import "./scores.css";

const Scores = ({ customClassName, value, title }) => {
  return (
    <div className={`scores ${customClassName}`}>
      <div className="title">{title}</div>
      <div className="numbers">{value}</div>
    </div>
  );
};

export default Scores;
