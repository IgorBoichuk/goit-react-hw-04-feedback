import { useState } from 'react';
import style from './Style.module.css';

import { Feedback } from './feedback/feedback';
import { Feedbackoptions } from './feedback-options/feedbackoptions';
import { Section } from './section/section';
import { Notification } from './notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = event => {
    const { name } = event.target;

    console.log('this is name in increment ', name);

    switch (name) {
      case 'Good':
        setGood(prevstate => prevstate + 1);
        break;

      case 'Neutral':
        setNeutral(prevstate => prevstate + 1);
        break;

      case 'Bad':
        setBad(prevstate => prevstate + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

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
        <Feedbackoptions onIncrement={increment} />
      </Section>

      <Section>
        {countTotalFeedback() ? (
          <Feedback
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
            good={good}
            neutral={neutral}
            bad={bad}
          ></Feedback>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    </div>
  );
}
