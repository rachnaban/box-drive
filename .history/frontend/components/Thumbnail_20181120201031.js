import ProgressBar from './ProgressBarWrapper';
import styled from 'styled-components';

const StyledThumbnail = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid grey;
  /*position: relative;*/
`;
const Thumbnail = props => (
  <div>
    {props.items
      .filter(item => !item.cancelled && !!item.file)
      .map(item => {
        return (
          <StyledThumbnail key={item.index}>
            Item 1
            <ProgressBar percentage={item.progress} />
          </StyledThumbnail>
        );
      })}
  </div>
);
export default Thumbnail;
