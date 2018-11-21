import ProgressBar from './ProgressBarWrapper';
import styled from 'styled-components';

const StyledThumbnail = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid grey;
  position: relative;
`;
const Thumbnail = props => (
  <div>
    {props.items
      .filter(item => !item.cancelled && !!item.file)
      .map(item => {
        const file = item.file;
        return (
          <div key={item.index}>
            <div>{item.progress}%</div>
          </div>
        );
      })}
  </div>
);
export default Thumbnail;
