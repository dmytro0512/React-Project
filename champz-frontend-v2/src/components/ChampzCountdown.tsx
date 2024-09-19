import { useCountdown } from "@/hooks/useCountdown";

export interface ChampzCountdownTimerProps {
  dueEpoch?: number;
  dueDaySwitch?: Boolean;
  fromdDay?: number;
  toDay?: number;
  onExpired?(): void;
}

export const ChampzCountdownTimer = (props: ChampzCountdownTimerProps) => {
  const countDown = useCountdown({
    dueDaySwitch: props.dueDaySwitch,
    dueEpoch: props.dueEpoch,
  });

  return (
    <>
      {countDown.remainingDays > 0 && `${countDown.remainingDays}d `}
      {(countDown.remainingDays > 0 || countDown.remainingHours > 0) &&
        `${countDown.remainingHours}h `}
      {(countDown.remainingDays > 0 ||
        countDown.remainingHours > 0 ||
        countDown.remainingMinutes > 0) &&
        `${countDown.remainingMinutes}m `}
      {(countDown.remainingDays > 0 ||
        countDown.remainingHours > 0 ||
        countDown.remainingMinutes > 0 ||
        countDown.remainingSeconds > 0) &&
        `${countDown.remainingSeconds}s `}
    </>
  );
};
