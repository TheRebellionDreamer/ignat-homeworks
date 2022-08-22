import React, { useState } from 'react';
import homeWorkReducer, {
  HomeWorkActionTypes,
  HomeWorkReducerActions,
} from './bll/homeWorkReducer';
import classes from './HW8.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople: UserType[] = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<UserType[]>(initialPeople); // need to fix any

  // need to fix any
  const finalPeople = people.map(({ _id, age, name }: UserType) => (
    <div key={_id} className={classes.item}>
      <span>{name}</span>
      <span>{age}</span>
    </div>
  ));

  const sortUp = () => {
    const action: HomeWorkReducerActions = {
      type: HomeWorkActionTypes.SORT,
      payload: 'up',
    };
    setPeople(homeWorkReducer(initialPeople, action));
  };

  const sortDown = () => {
    const action: HomeWorkReducerActions = {
      type: HomeWorkActionTypes.SORT,
      payload: 'down',
    };
    setPeople(homeWorkReducer(initialPeople, action));
  };

  const checkAge = () => {
    const action: HomeWorkReducerActions = {
      type: HomeWorkActionTypes.CHECK,
      payload: 18,
    };
    setPeople(homeWorkReducer(initialPeople, action));
  };

  return (
    <div className={classes.list}>
      <hr />
      homeworks 8{/*should work (должно работать)*/}
      {people.map(({ _id, age, name }) => (
        <div key={_id} className={classes.item}>
          <span>{name}</span>
          <span>{age}</span>
        </div>
      ))}
      <div className={classes['button-container']}>
        <SuperButton onClick={sortUp}>sort up</SuperButton>
        <SuperButton onClick={sortDown}>sort down</SuperButton>
        <SuperButton onClick={checkAge}>check 18</SuperButton>
      </div>
      <hr />
      <hr />
    </div>
  );
}

export default HW8;
