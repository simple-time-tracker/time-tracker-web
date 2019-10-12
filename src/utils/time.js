import { format } from 'date-fns';

const DATE_FORMAT = 'MM/DD HH:mm';

export const getDuration = (diffInSeconds) => {
  const hours = Math.floor(diffInSeconds / (60 * 60));
  diffInSeconds = diffInSeconds - hours * 60 * 60;
  const minutes = Math.floor(diffInSeconds / 60);
  diffInSeconds = diffInSeconds - minutes * 60;
  const seconds = diffInSeconds;

  return `${convertTimeUnitToString(hours)}:${convertTimeUnitToString(
    minutes
  )}:${convertTimeUnitToString(seconds)}`;
};

export const formatDate = (date) => format(date, DATE_FORMAT);

const convertTimeUnitToString = (unit) => {
  if (('' + unit).length === 1) return '0' + unit;
  else return unit === '0' ? '00' : unit;
};
