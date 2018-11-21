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
  <StyledThumbnail>
    {props.items
      .filter(item => !item.cancelled && !!item.file)
      .map(item => {
        const file = item.file;
        {
          JSON.stringify(file);
        }
        return (
          <div key={item.index}>
            <div>{item.progress}%</div>
          </div>
        );
      })}
  </StyledThumbnail>
);
export default Thumbnail;
