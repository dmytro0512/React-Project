import { LinearProgressWithLabel } from "@/components/LinearProgressWithLabel";
import { ChampzFont } from "@/fonts/champzFont";
import { UrlWithRequestId } from "@/types/urlWithRequestId";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";

/**
 * mock request id to store in the state wether the fonts are loaded or not
 */
const FONTS_REQUEST_ID = "fonts";

export function PreloadAssets({
  imageUrlsWithRequestId,
  fonts,
  onReady,
  progressPercent,
}: PreloadImagesProps) {
  const [loaded, setLoaded] = useState<{
    [requestId: string]: boolean;
  }>(
    [...imageUrlsWithRequestId, { requestId: FONTS_REQUEST_ID }].reduce(
      (acc, value) => ({
        ...acc,
        [value.requestId]: false,
      }),
      {},
    ),
  );

  const onLoadHandler = (requestId: string) => {
    setLoaded((_state) => {
      return {
        ..._state,
        [requestId]: true,
      };
    });
  };

  const markFontsAsLoaded = () => {
    /**
     * This way loading the fonts won't be calculated into the progress bar percentage,
     * here we just set that they are loaded. I couldn't find a better way to do it.
     */
    setLoaded((_state) => {
      return {
        ..._state,
        [FONTS_REQUEST_ID]: true,
      };
    });
  };

  useEffect(() => {
    if (Object.values(loaded).every(Boolean)) {
      onReady();
    }
  }, [loaded, onReady]);

  useEffect(() => {
    fonts.forEach((font) => {
      document.fonts.add(font.fontFace);
      font.fontFace.load();
    });

    if (document.fonts.status === "loading") {
      document.fonts.ready.then(() => {
        markFontsAsLoaded();
      });
    } else {
      markFontsAsLoaded();
    }
  }, [fonts]);

  return (
    <Container>
      {imageUrlsWithRequestId.map(({ url, requestId }) => {
        return (
          <img
            src={`${url}?requestId=${requestId}`}
            key={requestId}
            style={{ display: "none" }}
            onLoad={() => onLoadHandler(requestId)}
          />
        );
      })}
      <LinearProgressWithLabel
        value={progressPercent}
      ></LinearProgressWithLabel>
    </Container>
  );
}

interface PreloadImagesProps {
  imageUrlsWithRequestId: UrlWithRequestId[];
  fonts: ChampzFont[];
  progressPercent: number;
  onReady: () => void;
}
