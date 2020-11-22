/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Layout.module.scss';
import Navigation from 'components/Global/Navigation';
const cx = classNames.bind(styles);

function Layout({ children }) {
  return (
    <div className={cx('main-layout')}>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
