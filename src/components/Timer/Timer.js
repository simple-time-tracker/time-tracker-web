import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { differenceInSeconds } from 'date-fns';
import { formatDuration } from '../../utils/time/time';

class Timer extends PureComponent {
  static propTypes = {
    startDate: PropTypes.instanceOf(Date),
    isTracking: PropTypes.bool,
  };

  state = {
    secondsPassed: 0,
    updateInterval: undefined,
  };

  componentDidUpdate = (prevProps) => {
    const { startDate, isTracking } = this.props;

    if (!prevProps.isTracking && isTracking && !startDate) {
      this.setState({
        secondsPassed: 0,
        updateInterval: setInterval(() => {
          this.setState({
            secondsPassed: this.state.secondsPassed + 1,
          });
        }, 1000),
      });
    }

    if (
      (!!prevProps.startDate && !startDate) ||
      (prevProps.isTracking && !isTracking)
    ) {
      clearInterval(this.state.updateInterval);
      this.setState({
        secondsPassed: 0,
        updateInterval: undefined,
      });
    }

    if (!prevProps.startDate && !!startDate) {
      const secondsElapsed = differenceInSeconds(new Date(), startDate);

      this.setState({
        secondsPassed: secondsElapsed,
        updateInterval: setInterval(() => {
          this.setState({
            secondsPassed: this.state.secondsPassed + 1,
          });
        }, 1000),
      });
    }
  };

  render = () => (
    <span
      className="is-block is-fullwidth"
      style={{ fontSize: '1.25em', textAlign: 'center' }}
    >
      {formatDuration(this.state.secondsPassed)}
    </span>
  );
}

export default Timer;
