import ProgressBar from './ProgressBarWrapper';

const Thumbnail = props => (
  <div>
    Thumbnail
    <ProgressBar percentage={props.progress} />
  </div>
);
export default Thumbnail;
