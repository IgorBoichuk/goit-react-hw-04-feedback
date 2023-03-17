import React from 'react';
import style from './Style.module.css';

import { Feedback } from './feedback/feedback';
import { Feedbackoptions } from './feedback-options/feedbackoptions';
import { Section } from './section/section';
import { Notification } from './notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = event => {
    const { target } = event;

    this.setState(prevState => {
      return {
        [target.name.toLowerCase()]: prevState[target.name.toLowerCase()] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }
  render() {
    return (
      <div
        className={style.container}
        style={{
          height: '100vh',
          marginLeft: 'auto',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title={''}>
          <h1 className={style.title}>Please leave feedback</h1>
          <Feedbackoptions onIncrement={this.increment} />
        </Section>

        <Section>
          {this.countTotalFeedback() ? (
            <Feedback
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
              onIncrement={this.increment}
              state={this.state}
            ></Feedback>
          ) : (
            <Notification message={'There is no feedback'}></Notification>
          )}
        </Section>
      </div>
    );
  }
}
