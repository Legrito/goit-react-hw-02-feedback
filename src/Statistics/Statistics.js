import styles from './Statistics.module.scss'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={styles.statistis__wrapper}>
            <div>
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
              <p>Total: {total}</p>
              <p>Positive feedback: {positivePercentage}% </p>
            </div> 
          </div>
    )};