import React from 'react';
import { AffairType } from './HW2';
import classes from './Affair.module.css';

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
  const { affair, deleteAffairCallback } = props;

  const deleteCallback = () => {
    deleteAffairCallback(affair._id);
  };

  return (
    <div className={classes.affair}>
      <div className={classes.text}>
        <span>{affair.name}</span>
        <span>{affair.priority}</span>
      </div>
      <button onClick={deleteCallback}>Удалить</button>
    </div>
  );
}

export default Affair;
