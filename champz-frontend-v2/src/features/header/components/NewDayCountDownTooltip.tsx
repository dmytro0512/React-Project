import { ChampzCountdownTimer } from "@/components/ChampzCountdown";

export function NewDayCountDownTooltip() {
  return (
    <>
      {`New day in `}
      <ChampzCountdownTimer dueDaySwitch={true} />
    </>
  );
}
