import style from '../Style.module.css';

export const Feedbackoptions = ({ onIncrement }) => {
  return (
    <div className={style.buttonlist}>
      <button
        className={style.button}
        type="button"
        name="Good"
        onClick={onIncrement}
      >
        Good
      </button>
      <button
        className={style.button}
        type="button"
        name="Neutral"
        onClick={onIncrement}
      >
        Neutral
      </button>
      <button
        className={style.button}
        type="button"
        name="Bad"
        onClick={onIncrement}
      >
        Bad
      </button>
    </div>
  );
};
