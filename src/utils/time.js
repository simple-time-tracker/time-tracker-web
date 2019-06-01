export const getDuration = diffInSeconds => {
  var hours = Math.floor(diffInSeconds / (60 * 60));
  diffInSeconds = diffInSeconds - hours * 60 * 60;
  var minutes = Math.floor(diffInSeconds / 60);
  diffInSeconds = diffInSeconds - minutes * 60;
  var seconds = diffInSeconds;

  return `${convertTimeUnitToString(hours)}:${convertTimeUnitToString(
    minutes
  )}:${convertTimeUnitToString(seconds)}`;
};

const convertTimeUnitToString = unit => {
  if (("" + unit).length == 1) return "0" + unit;
  else return unit == "0" ? "00" : unit;
};
