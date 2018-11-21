const Thumbnail = props => (
  <div>
    Thumbnail
    {JSON.stringify(props)}
    <ProgressBar className="progress-bar" id="progress-bar">
      <div className="progress" id="progress" />
    </ProgressBar>{' '}
  </div>
);
export default Thumbnail;
