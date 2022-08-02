import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import { PATH } from './Pages';

const setActiveLink: ActiveLinkSetter = ({ isActive }) => {
  return `${classes.link} ${isActive ? classes.active : ''}`;
};

function Header() {
  const links: ILink[] = [
    {
      to: PATH.PRE_JUNIOR,
      text: 'Pre-junior',
    },
    {
      to: PATH.JUNIOR,
      text: 'Junior',
    },
    {
      to: PATH.JUNIOR_PLUS,
      text: 'Junior+',
    },
  ];

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        {links.map(({ text, to }) => (
          <NavLink key={to} to={to} children={text} className={setActiveLink} />
        ))}
      </nav>
    </header>
  );
}

type ActiveLinkSetter = ({ isActive }: { isActive: boolean }) => string;

interface ILink {
  to: string;
  text: string;
}

export default Header;
