import ProgressBarWrapper from './ProgressBarWrapper';
import styled from 'styled-components';


const ThumbnailItem =(props)=>( <div
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '10px',
            border: '1px solid grey',
            position: 'relative',
          }}
        >
          <ProgressBarWrapper
            percentage={20}
            style={{
              height: '5px',
              width: '240px',
              borderRadius: '50px',
              border: '1px solid #333',
              bottom: '0',
              position: 'absolute',
            }}
          />
        </div>);

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
          <ThumbnailItem key={item.index}/>
            
        );
      })}
  </div>
);
export default Thumbnail;
