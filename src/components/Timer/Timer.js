import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { formatDuration } from '../../utils/time/time';

class Timer extends PureComponent {
  static propTypes = {
    secondsPassed: PropTypes.number,
  };

  render = () => (
    <span
      className="is-block is-fullwidth"
      style={{ fontSize: '1.25em', textAlign: 'center' }}
    >
      {formatDuration(this.props.secondsPassed)}
    </span>
  );
}

export default Timer;
