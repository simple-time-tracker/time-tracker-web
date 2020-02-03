import { format, parseISO, formatDistanceStrict } from 'date-fns';

const SHORT_DATE_FORMAT = 'MM/dd HH:mm';
const LONG_DATE_FORMAT = 'yyyy-MM-dd HH:mm';
const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;

export const formatDuration = (diffInSeconds) => {
  if (Number.isNaN(diffInSeconds) || diffInSeconds < 0) {
    throw new Error('Duration time should be not negative number');
  }

  let remainingDiffInSeconds = diffInSeconds;
  const hours = Math.floor(remainingDiffInSeconds / (60 * 60));
  remainingDiffInSeconds -= hours * 60 * 60;
  const minutes = Math.floor(remainingDiffInSeconds / 60);
  remainingDiffInSeconds -= minutes * 60;
  const seconds = remainingDiffInSeconds;

  return `${hours}:${convertTimeUnitToString(minutes)}:${convertTimeUnitToString(
    seconds
  )}`;
};

// eslint-disable-next-line arrow-body-style
export const formatDurationInWords = (timeSpentInMilliseconds) => {
  return timeSpentInMilliseconds >= HOUR_IN_MILLISECONDS
    ? formatDurationInHours(timeSpentInMilliseconds)
    : formatDurationStrict(timeSpentInMilliseconds);
};

export const formatShortDate = (date) => format(parseISO(date), SHORT_DATE_FORMAT);

export const formatLongDate = (date) => format(parseISO(date), LONG_DATE_FORMAT);

const convertTimeUnitToString = (unit) => {
  if (`${unit}`.length === 1) return `0${unit}`;

  return unit === '0' ? '00' : unit;
};

// eslint-disable-next-line arrow-body-style
const formatDurationInHours = (timeSpentInMilliseconds) => {
  return formatDistanceStrict(new Date(0), new Date(timeSpentInMilliseconds), {
    unit: 'hour',
    roundingMethod: 'floor',
  });
};

// eslint-disable-next-line arrow-body-style
const formatDurationStrict = (timeSpentInMilliseconds) => {
  return formatDistanceStrict(new Date(0), new Date(timeSpentInMilliseconds), {
    roundingMethod: 'floor',
  });
};
