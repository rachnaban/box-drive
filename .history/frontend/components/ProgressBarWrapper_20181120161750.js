import React from 'react';
import ProgressBar from './ProgressBar';

class ProgressBarWrapper extends React.Component {
  render() {
    return <ProgressBar percentage={this.props.percentage} />;
  }
}
export default ProgressBarWrapper;
