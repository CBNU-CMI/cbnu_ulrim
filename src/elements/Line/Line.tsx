/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Line.module.scss';

const cx = classNames.bind(styles);

function Line({ size = 'md', margin = '0' }) {
  return <div className={cx('line', size)} style={{ marginTop: margin }}></div>;
}

export default Line;
