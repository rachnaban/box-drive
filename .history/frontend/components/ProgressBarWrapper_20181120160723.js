import React from 'react';
import ProgressBar from './ProgressBar';

class ProgressBarWrapper extends React.Component {
  render() {
    return (
      <div>
        <ProgressBar percentage={this.props.percentage} />
      </div>
    );
  }
}
export default ProgressBarWrapper;
