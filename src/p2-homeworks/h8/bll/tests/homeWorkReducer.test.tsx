import { UserType } from '../../HW8';
import homeWorkReducer, { HomeWorkActionTypes } from '../homeWorkReducer';

let initialState: UserType[]; // need to fix any

beforeEach(() => {
  initialState = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
  ];
});

test('sort name up', () => {
  const newState = homeWorkReducer(initialState, { type: HomeWorkActionTypes.SORT, payload: 'up' });

  const sortedUpIds = newState.map(({ _id }) => _id);
  const result = sortedUpIds.filter((userId, index) => newState[index]._id === userId);
  expect(result.length).toBe(newState.length);
});
test('sort name down', () => {
  const newState = homeWorkReducer(initialState, {
    type: HomeWorkActionTypes.SORT,
    payload: 'down',
  });
  const sortedDownIds = newState.map(({ _id }) => _id);
  const result = sortedDownIds.filter((id, index) => newState[index]._id === id);
  expect(result.length).toBe(newState.length);
});
test('check age 18', () => {
  const newState = homeWorkReducer(initialState, { type: HomeWorkActionTypes.CHECK, payload: 18 });
  expect(newState.length).toBe(4);
});
