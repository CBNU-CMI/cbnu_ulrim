/* External dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation({ className }) {
  return (
    <div className={cx('box', className)}>
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
    </div>
  );
}

export default Navigation;
