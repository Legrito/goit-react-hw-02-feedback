export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
    <div>
        <h3>Plese leave feedback</h3>
        <div>
        { options.map((option, idx) => 
            <button type="button" key={idx} name={option} onClick={onLeaveFeedback}>{option}</button>
        ) }
        </div>
    </div>
)};
