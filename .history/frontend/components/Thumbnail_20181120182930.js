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
        return (
          <div key={item.index}>
            <ProgressBar percentage={item.progress} />
          </div>
        );
      })}
  </StyledThumbnail>
);
export default Thumbnail;
