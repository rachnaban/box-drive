import ProgressBarFiller from './ProgressFiller';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  position: absolute;
  height: 5px;
  width: 240px;
  border-radius: 50px;
  border: 1px solid #333;
  bottom: 1px;
  margin: 0 auto;
`;
const ProgressBar = props => {
  JSON.stringify(props);

  return (
    <StyledProgressBar className="progress-bar">
      <ProgressBarFiller percentage={props.percentage} />
    </StyledProgressBar>
  );
};
export default ProgressBar;
