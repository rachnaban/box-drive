import ProgressBarFiller from './ProgressFiller';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  position: relative;
  height: 5px;
  width: 240px;
  border-radius: 50px;
  border: 1px solid #333;
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
