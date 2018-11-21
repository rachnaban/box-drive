import ProgressBarFiller from './ProgressFiller';
const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <ProgressBarFiller percentage={props.percentage} />
    </div>
  );
};
