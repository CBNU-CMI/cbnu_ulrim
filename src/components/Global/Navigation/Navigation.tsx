/* External dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Internal dependencies */
import {} from './Navigation.module.scss';

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/petition" activeStyle={{ color: '#0077cc' }}>
          청원
        </NavLink>
      </li>
      <li>
        <NavLink to="/poll" activeStyle={{ color: '#0077cc' }}>
          투표
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeStyle={{ color: '#0077cc' }}>
          로그인
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
