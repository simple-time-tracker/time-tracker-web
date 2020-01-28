import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatDuration } from '../../utils/time/time';

const Timer = ({ secondsPassed }) => {
  useEffect(() => {
    document.title = getTitle(secondsPassed);
  });

  return (
    <span
      className="is-block is-fullwidth"
      style={{ fontSize: '1.25em', textAlign: 'center' }}
    >
      {formatDuration(secondsPassed)}
    </span>
  );
};
// eslint-disable-next-line
const getTitle = (secondsElapsed) =>
  secondsElapsed
    ? `${formatDuration(secondsElapsed)} - Time tracker`
    : 'Time tracker';

Timer.propTypes = {
  secondsPassed: PropTypes.number,
};

export default Timer;
