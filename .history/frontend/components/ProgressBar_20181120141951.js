const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  );
};
