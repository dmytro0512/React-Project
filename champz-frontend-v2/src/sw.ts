import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";

declare let self: ServiceWorkerGlobalScope;

// evaluate progress on *?requestId=* URLs only
const progressIndicatorUrls = /[?&]requestId=([^&]+)/i;

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const matches = progressIndicatorUrls.exec(event.request.url);
  if (matches && matches[1]) {
    event.respondWith(fetchWithProgressMonitor(event, matches[1]));
  }
});

function fetchWithProgressMonitor(event: FetchEvent, requestId: string) {
  /*  opaque request responses won't give us access to Content-Length and
   *  Response.body.getReader(), which are required for calculating download
   *  progress.  Respond with a newly-constructed Request from the original Request
   *  that will give us access to those.
   *  See https://stackoverflow.com/questions/39109789/what-limitations-apply-to-opaque-responses

   *  'Access-Control-Allow-Origin' header in the response must not be the
   *  wildcard '*' when the request's credentials mode is 'include'.  We'll omit credentials in this demo.
   */
  const newRequest = new Request(event.request, {
    mode: "cors",
    credentials: "omit",
  });
  return fetch(newRequest).then((response) =>
    respondWithProgressMonitor(event.clientId, response, requestId),
  );
}

function respondWithProgressMonitor(
  clientId: string,
  response: Response,
  requestId: string,
) {
  if (!response.body) {
    console.warn(
      "ReadableStream is not yet supported in this browser.  See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream",
    );
    return response;
  }
  if (!response.ok) {
    // HTTP error code response
    return response;
  }

  // server must send custom x-file-size header if gzip or other content-encoding is used
  const contentEncoding = response.headers.get("content-encoding");
  const contentLength = response.headers.get(
    contentEncoding ? "x-file-size" : "content-length",
  );
  if (contentLength === null) {
    // don't track download progress if we can't compare against a total size
    console.warn("Response size header unavailable. Cannot measure progress");
    return response;
  }

  let loaded = 0;
  const total = parseInt(contentLength, 10);
  const reader = response.body.getReader();

  return new Response(
    new ReadableStream({
      async start(controller) {
        let client: Client | undefined;
        self.clients.get(clientId).then((c) => {
          client = c;
          read();
        });

        function read() {
          reader
            .read()
            .then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }

              controller.enqueue(value);
              loaded += value.byteLength;
              client?.postMessage({
                loaded,
                total,
                requestId,
                type: "IMAGE_LOAD_PROGRESS",
              });
              read();
            })
            .catch((error) => {
              // error only typically occurs if network fails mid-download
              console.error("error in read()", error);
              controller.error(error);
            });
        }
      },

      // Firefox excutes this on page stop, Chrome does not
      cancel(reason) {
        console.log("cancel()", reason);
      },
    }),
  );
}

export {};
