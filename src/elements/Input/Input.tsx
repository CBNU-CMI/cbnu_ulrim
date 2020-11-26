/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ placeholder, size = 'md' }) {
  return <input placeholder={placeholder} className={cx('input', size)} />;
}

export default Input;
