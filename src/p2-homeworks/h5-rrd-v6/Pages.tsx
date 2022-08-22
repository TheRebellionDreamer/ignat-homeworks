import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Junior from './pages/Junior';
import Error404 from './pages/Error404';
import PreJunior from './pages/PreJunior';

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/junior-plus',
  ERROR_PAGE: '/*',
};

function Pages() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR} />} />
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
        <Route path={PATH.JUNIOR} element={<Junior />} />
        <Route path={PATH.ERROR_PAGE} element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Pages;
