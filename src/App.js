import './App.css';
import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './SectionTitle';
import { Notification } from './NotificationMessage';

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

addFeedback = (e) => {
  this.setState(prevState => ({
    [e.target.name]: prevState[e.target.name] + 1,
  }));
};

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = good / (this.countTotalFeedback() * 0.01);
    return Math.round(total);
  }

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const feedbackType= Object.keys(this.state);
      return (
          <div className="feedback__wrapper">
            <Section title="">
              <FeedbackOptions options={feedbackType} onLeaveFeedback={this.addFeedback} />
            </Section>
            {total > 0 
            ? <Section title="">
              <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={percentage} />
              </Section> 
            : <Notification message="No feedback given" />}                         
          </div>
      )
  }
};

export default App;
