import ProgressBar from './ProgressBarWrapper';
import styled from 'styled-components';

const StyledThumbnail = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid grey;
`;
const Thumbnail = props => (
  <StyledThumbnail>
    <img src={props.src} alt={props.alt} />
    <ProgressBar percentage={props.progress} />
  </StyledThumbnail>
);
export default Thumbnail;
