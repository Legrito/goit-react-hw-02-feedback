import { Notification } from '../NotificationMessage';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
          <h3>Statistics</h3>
            <div>
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
              {total > 0 ? (
                <div>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}% </p>
                </div>
              ) 
            : (
                <Notification message="No feedback given" />
            )}
            </div> 
          </div>
    )};