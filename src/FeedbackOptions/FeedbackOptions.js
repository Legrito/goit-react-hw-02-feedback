import styles from './FeedbackOptions.module.scss'

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
    <div>
        <div className={styles.options__wrapper}>
        { options.map((option, idx) => 
            <button type="button" key={idx} name={option} onClick={onLeaveFeedback}>{option}</button>
        ) }
        </div>
    </div>
)};
