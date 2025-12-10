import "./Visual.css";

const Visual = ({ goal, totalScore, attempts }) => {
  const filledSrc = "/assets/images/goal-completed-image.png";
  const emptySrc = "/assets/images/goal-remaining-image.png";
  const attemptSrc = "/assets/images/attempts-remaining-image.png";

  return (
    <div className="visualDiv">
      <div className="scores">
        <h3>Goal Progress:</h3>
        <div className="scores-images">
          {Array.from({ length: goal }).map((_, i) => {
            const isFilled = i < totalScore;
            return (
              <img
                key={i}
                src={isFilled ? filledSrc : emptySrc}
                alt="goal-step"
                className={`visual-image ${isFilled ? "filled" : ""}`}
              />
            );
          })}
        </div>
      </div>

      <div className="attempts">
        <h3>Attempts Left:</h3>
        <div className="attempts-images">
          {Array.from({ length: attempts }).map((_, i) => (
            <img key={i} src={attemptSrc} alt="attempt" className="visual-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Visual;
