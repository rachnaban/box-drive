import ProgressBarWrapper from './ProgressBarWrapper';
import styled from 'styled-components';

const ThumbnailItem = props => (
  <div
    style={{
      width: '250px',
      height: '250px',
      borderRadius: '10px',
      border: '1px solid grey',
      position: 'relative',
    }}
  >
    <div>{props.file.name}</div>
    <ProgressBarWrapper
      percentage={props.progress}
      style={{
        height: '5px',
        width: '240px',
        borderRadius: '50px',
        border: '1px solid #333',
        bottom: '0',
        position: 'absolute',
      }}
    />
  </div>
);

const Thumbnail = props => {return(
  {JSON.stringify(props.items)}
  <div>
    {props.items
      .filter(item => !item.cancelled && !!item.file)
      .map(item => {
        return (
          <ThumbnailItem
            key={item.index}
            progress={item.progress}
            file={item.file}
          />
        );
      })}
  </div>
);
    };
export default Thumbnail;
