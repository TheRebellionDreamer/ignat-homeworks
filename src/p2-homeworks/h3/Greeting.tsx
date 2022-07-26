import cx from 'classnames';
import React, { ChangeEvent, forwardRef } from 'react';
import classes from './Greeting.module.css';

const Greeting = forwardRef<HTMLInputElement, GreetingPropsType>(
  ({ name, setNameCallback, addUser, error, totalUsers }, ref) => {
    const inputClasses = cx(classes.inputContainer, {
      [classes.error]: error,
    });

    return (
      <div className={classes.root}>
        <div className={inputClasses}>
          <input value={name} onChange={setNameCallback} ref={ref} />
          {error && <span>{error}</span>}
        </div>
        <button onClick={addUser}>add</button>
        <span>{totalUsers}</span>
      </div>
    );
  },
);

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string;
  totalUsers: number;
};

export default Greeting;
