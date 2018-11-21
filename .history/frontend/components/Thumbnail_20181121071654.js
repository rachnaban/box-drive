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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div>{props.file.name}</div>
    {props.response && props.response.alt && props.response.src ? (
      <img src={props.response.src} alt={props.response.alt} />
    ) : null}
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

const Thumbnail = props => {
  //console.log(props.items[0]);

  return (
    <div>
      {props.items
        .filter(item => !item.cancelled && !!item.file)
        .map(item => {
          return (
            <ThumbnailItem
              key={item.index}
              progress={item.progress}
              file={item.file}
              response={item.response}
            />
          );
        })}
    </div>
  );
};
export default Thumbnail;
