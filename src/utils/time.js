import { format } from 'date-fns';

const DATE_FORMAT = 'MM/DD HH:mm';

export const getDuration = (diffInSeconds) => {
  let remainingDiffInSeconds = diffInSeconds;
  const hours = Math.floor(remainingDiffInSeconds / (60 * 60));
  remainingDiffInSeconds -= hours * 60 * 60;
  const minutes = Math.floor(remainingDiffInSeconds / 60);
  remainingDiffInSeconds -= minutes * 60;
  const seconds = remainingDiffInSeconds;

  return `${convertTimeUnitToString(hours)}:${convertTimeUnitToString(
    minutes
  )}:${convertTimeUnitToString(seconds)}`;
};

export const formatDate = (date) => format(date, DATE_FORMAT);

const convertTimeUnitToString = (unit) => {
  if (`${unit}`.length === 1) return `0${unit}`;

  return unit === '0' ? '00' : unit;
};
