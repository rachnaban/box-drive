import ProgressBarFiller from './ProgressFiller';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  position: relative;
  height: 20px;
  width: 350px;
  border-radius: 50px;
  border: 1px solid #333;
`;
const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <ProgressBarFiller percentage={props.percentage} />
    </div>
  );
};
export default ProgressBar;
