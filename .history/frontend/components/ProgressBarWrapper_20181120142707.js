import React from 'react';
import ProgressBar from './ProgressBar';

class ProgressBarWrapper extends React.Component {
  state = {
    percentage: 0,
  };

  render() {
    return (
      <div>
        <ProgressBar percentage={this.state.percentage} />
      </div>
    );
  }
}
export default ProgressBarWrapper;
