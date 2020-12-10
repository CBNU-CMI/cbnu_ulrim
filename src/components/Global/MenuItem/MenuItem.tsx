/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem() {
  return <div className={cx('menu-item')}></div>;
}

export default MenuItem;
