import ProgressBarFiller from './ProgressFiller';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  /*position: absolute;
  height: 5px;
  width: 240px;
  border-radius: 50px;
  border: 1px solid #333;
  bottom: 1px;
  left: 4px;*/
`;
const ProgressBar = props => {
  JSON.stringify(props);

  return (
    <div className="progress-bar">
      <ProgressBarFiller percentage={props.percentage} />
    </div>
  );
};
export default ProgressBar;
