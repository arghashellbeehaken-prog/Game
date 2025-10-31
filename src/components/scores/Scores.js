import './scores.css'

const Scores = ({componentName, value, title}) => {
    
    return (
        <div className={`scores ${componentName}`}>
            <div className="title">
                {title}
            </div>
            <div className="numbers">
                {value}
            </div>
        </div>
    );
}

export default Scores;