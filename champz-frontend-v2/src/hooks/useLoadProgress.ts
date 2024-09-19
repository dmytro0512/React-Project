import { getPercentValue } from "@/utils/getPercentValue";
import { useEffect, useState } from "react";

export function useLoadProgress(
  props: UseLoadProgressProps,
): UseLoadProgressReturn {
  const [progresses, setProgresses] = useState<{
    [requestId: string]: ProgressState;
  }>({});
  const [aggregatedProgress, setAggregatedProgress] = useState<ProgressState>({
    loaded: 0,
    total: 0,
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.data.type === "IMAGE_LOAD_PROGRESS") {
        if (
          !props.requestIds.some(
            (requestId) => event.data.requestId === requestId,
          )
        ) {
          return;
        }
        setProgresses((_state) => {
          const { requestId, loaded, total } = event.data;
          return {
            ..._state,
            [requestId]: { loaded, total },
          };
        });
      }
    };
    navigator.serviceWorker.addEventListener("message", onMessage);

    return () => {
      navigator.serviceWorker.removeEventListener("message", onMessage);
    };
  }, [props.requestIds]);

  useEffect(() => {
    const progressValues = Object.values(progresses);
    if (!progressValues.length) {
      return;
    }
    const sumOfProgresses = Object.values(progresses).reduce(
      (acc, _progress) => {
        acc.loaded += _progress.loaded;
        acc.total += _progress.total;
        return acc;
      },
      { loaded: 0, total: 0 },
    );
    setAggregatedProgress({
      loaded: sumOfProgresses.loaded,
      total: sumOfProgresses.total,
    });
  }, [progresses]);

  return {
    aggregatedProgress,
    progresses,
    aggregatedProgressPercent:
      getPercentValue(aggregatedProgress.loaded, aggregatedProgress.total) || 0,
    ready,
    setReady,
  };
}

interface ProgressState {
  loaded: number;
  total: number;
}

interface UseLoadProgressReturn {
  aggregatedProgress: ProgressState;
  aggregatedProgressPercent: number;
  progresses: {
    [requestId: number]: ProgressState;
  };
  ready: boolean;
  setReady: (value: boolean) => void;
}

interface UseLoadProgressProps {
  requestIds: string[];
}
