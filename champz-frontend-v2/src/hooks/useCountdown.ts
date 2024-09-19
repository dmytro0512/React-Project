import { useEffect, useState } from "react";
import { useTypeChecker } from "./useTypeChecker";
import { ChampzCountdownTimerProps } from "@/components/ChampzCountdown";

const useCountdown = (props: ChampzCountdownTimerProps) => {
  const typeChecker = useTypeChecker();

  if (props.dueEpoch) {
    // dueEpoch is a Unix Timestamp of a Target Date
    if (typeChecker.isNumber(props.dueEpoch)) {
      const targetDate = new Date(props.dueEpoch).getTime();
      const [dateTimeDifference, setDateTimeDifference] = useState(
        targetDate - new Date().getTime(),
      );

      useEffect(() => {
        const interval = setInterval(() => {
          setDateTimeDifference(targetDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
      }, [targetDate]);

      return getDaysHoursMinutesSeconds(dateTimeDifference);
    }
  }

  if (props.dueDaySwitch) {
    const [dateTimeDifference, setDateTimeDifference] = useState(
      getRemainingMillisecondsToDaySwitch(),
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setDateTimeDifference(getRemainingMillisecondsToDaySwitch());
      }, 1000);

      return () => clearInterval(interval);
    }, [dateTimeDifference]);

    return getDaysHoursMinutesSeconds(dateTimeDifference);
  }

  return {
    remainingDays: 0,
    remainingHours: 0,
    remainingMinutes: 0,
    remainingSeconds: 0,
  };
};

const getRemainingMillisecondsToDaySwitch = () => {
  const currentTimeMs = new Date().getTime();
  const aFullDayinMs = 86400000;

  // Create a Date object for 9:00 PM UTC
  const targetTime = new Date();
  targetTime.setUTCHours(21, 0, 0, 0); // Set hours, minutes, seconds, milliseconds

  // Calculate the time difference in milliseconds
  const msToDaySwitch =
    targetTime.getTime() > currentTimeMs
      ? targetTime.getTime() - currentTimeMs
      : aFullDayinMs + targetTime.getTime() - currentTimeMs;

  return msToDaySwitch;
};

const getDaysHoursMinutesSeconds = (dateTimeDifference: number) => {
  const remainingDays = Math.floor(dateTimeDifference / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor(
    (dateTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const remainingMinutes = Math.floor(
    (dateTimeDifference % (1000 * 60 * 60)) / (1000 * 60),
  );
  const remainingSeconds = Math.floor(
    (dateTimeDifference % (1000 * 60)) / 1000,
  );

  return { remainingDays, remainingHours, remainingMinutes, remainingSeconds };
};

export { useCountdown };
