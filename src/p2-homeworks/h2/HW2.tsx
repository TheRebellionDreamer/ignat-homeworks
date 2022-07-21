import React, { useState } from 'react';
import Affairs from './Affairs';

const defaultAffairs: AffairType[] = [
  { _id: 1, name: 'React', priority: 'high' },
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'html & css', priority: 'middle' },
];

export const filterAffairs = (affairs: AffairType[], filter: FilterType) => {
  if (filter === 'all') {
    return affairs;
  }

  return affairs.filter((element) => element.priority === filter);
};

export const deleteAffair = (affairs: AffairType[], _id: number): any => {
  return affairs.filter((element) => element._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs); // need to fix any
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

  return (
    <div>
      <hr />
      homeworks 2{/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export interface AffairType {
  _id: number;
  name: string;
  priority: FilterType;
}
export type AffairPriorityType = 'low' | 'middle' | 'high';
export type FilterType = 'all' | AffairPriorityType;

export default HW2;
