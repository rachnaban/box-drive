import ProgressBar from './ProgressBarWrapper';

const Thumbnail = props => (
  <div>
    Thumbnail
    {JSON.stringify(props)}
    <ProgressBar percentage={props.progress} />
  </div>
);
export default Thumbnail;
