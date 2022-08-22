import { UserType } from '../HW8';

const enum HomeWorkActionTypes {
  CHECK = 'check',
  SORT = 'sort',
}

interface SORT_ACTION {
  type: HomeWorkActionTypes.SORT;
  payload: 'up' | 'down';
}

interface CHECK_ACTION {
  type: HomeWorkActionTypes.CHECK;
  payload: number;
}

type HomeWorkReducerActions = SORT_ACTION | CHECK_ACTION;

const homeWorkReducer = (state: UserType[], action: HomeWorkReducerActions): UserType[] => {
  switch (action.type) {
    case HomeWorkActionTypes.SORT: {
      const sortedState = [...state].sort((a, b) => (a.name > b.name ? 1 : -1));
      return action.payload === 'up' ? sortedState : sortedState.reverse();
    }
    case HomeWorkActionTypes.CHECK: {
      return state.filter(({ age }) => age >= action.payload);
    }
    default:
      return state;
  }
};

export { HomeWorkActionTypes };
export type { CHECK_ACTION, SORT_ACTION, HomeWorkReducerActions };
export default homeWorkReducer;
