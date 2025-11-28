import './Visual.css';

const renderGoalImages = (goal, totalScore, filledSrc, emptySrc) => {
  return Array.from({ length: goal }, (_, i) => {
    const isFilled = i < totalScore;
    return (
      <img
        key={i}
        src={isFilled ? filledSrc : emptySrc}
        alt="score"
        className={`visual-image ${isFilled ? 'filled' : ''}`}
      />
    );
  });
};


const renderAttempts = (attempts, imageSource) => {
  return Array.from({ length: attempts }, (_, i) => (
    <img key={i} src={imageSource} alt="attempt" className="visual-image" />
  ));
};

const Visual = ({ goal, totalScore, attempts }) => {
  return (
    <div className='visualDiv'>
      <div className='scores'>
        <h3>Goal Progress:</h3>
        <div className="scores-images">
          {renderGoalImages(goal, totalScore, 'bp.png', 'wp.png')}
        </div>
      </div>

      <div className='attempts'>
        <h3>Attempts Left:</h3>
        <div className='attempts-images'>
          {renderAttempts(attempts, 'wq.png')}
        </div>
      </div>
    </div>
  );
};

export default Visual;
