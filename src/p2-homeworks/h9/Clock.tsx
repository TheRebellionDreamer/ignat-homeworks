import classes from './Clock.module.css';
import React, { useState } from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

const dateFormatter = new Intl.DateTimeFormat('ru', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
});
const timeFormatter = new Intl.DateTimeFormat('ru', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    window.clearInterval(timerId);
    setTimerId(0);
  };

  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const stringTime = timeFormatter.format(date);
  const stringDate = dateFormatter.format(date);

  const dateStyles = `${classes.text} ${classes.date} ${show ? classes['date-visible'] : ''}`;

  return (
    <div className={classes.root}>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classes.text}>
        {stringTime}
      </div>
      <div className={dateStyles}>{stringDate}</div>
      <div className={classes['button-container']}>
        <SuperButton onClick={start}>start</SuperButton>
        <SuperButton onClick={stop}>stop</SuperButton>
      </div>
    </div>
  );
}

export default Clock;
