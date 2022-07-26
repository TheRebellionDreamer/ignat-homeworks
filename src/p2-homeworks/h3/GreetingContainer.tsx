import React, { ChangeEvent, useRef, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const addUser = () => {
    const newUserName = name.trim();
    if (!newUserName) {
      inputRef.current?.focus();
      setError('Пожалуйста, введите имя пользователя');
      return;
    }

    addUserCallback(newUserName);
    alert(`Hello ${newUserName}!`);
    setName('');
    setError('');
  };

  const totalUsers = users.length;

  return (
    <Greeting
      ref={inputRef}
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  );
};

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

export default GreetingContainer;
