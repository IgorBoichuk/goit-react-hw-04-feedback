import React from 'react';
import { Statistics } from '../statistics/statistics';
import PropTypes from 'prop-types';

export const Feedback = ({ total, percentage, good, neutral, bad }) => {
  return (
    <div>
      <Statistics
        // good={state.good}
        // neutral={state.neutral}
        // bad={state.bad}
        // total={total}
        // percentage={percentage}
        // state={state}
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        percentage={percentage}
        // state={state}
      />
    </div>
  );
};

Feedback.prototype = {
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  state: PropTypes.array.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
