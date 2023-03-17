import style from '../Style.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={style.wrapper}>
      {title} {children}
    </div>
  );
};
