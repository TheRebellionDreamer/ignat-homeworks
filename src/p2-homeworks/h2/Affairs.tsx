import React from 'react';
import Affair from './Affair';
import { AffairType, FilterType } from './HW2';
import classes from './Affairs.module.css';

type AffairsPropsType = {
  data: AffairType[];
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const { setFilter, deleteAffairCallback, data } = props;

  const mappedAffairs = data.map((a: AffairType) => (
    <Affair key={a._id} affair={a} deleteAffairCallback={deleteAffairCallback} />
  ));

  const setAll = () => {
    setFilter('all');
  };
  const setHigh = () => {
    setFilter('high');
  };
  const setMiddle = () => {
    setFilter('middle');
  };
  const setLow = () => {
    setFilter('low');
  };

  return (
    <div className={classes.affairs}>
      {mappedAffairs}
      <div className={classes['button-container']}>
        <button onClick={setAll}>All</button>
        <button onClick={setHigh}>High</button>
        <button onClick={setMiddle}>Middle</button>
        <button onClick={setLow}>Low</button>
      </div>
    </div>
  );
}

export default Affairs;
