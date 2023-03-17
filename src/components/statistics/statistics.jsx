import React from 'react';
import PropTypes from 'prop-types';
import style from '../Style.module.css';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.statistics}>Statistics</h2>
      <ul className={style.statlist}>
        <li className={style.statitem}>Good: {good}</li>
        <li className={style.statitem}>Neutral: {neutral}</li>
        <li className={style.statitem}>Bad: {bad}</li>
        <li className={style.statitem}>Total: {total}</li>
        <li className={style.statitem}>Positive feedback: {percentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
