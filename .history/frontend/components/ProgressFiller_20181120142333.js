import styled from 'styled-components';

const ProgressBarFiller = props => {
  return <div className="filler" style={{width: `${props.percentage}%`}} />;
};
export default ProgressBarFiller;
