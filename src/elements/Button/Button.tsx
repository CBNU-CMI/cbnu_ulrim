/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ text, type = 'basic', size = 'md', onClick }) {
  return (
    <span className={cx('button', type, size)} onClick={onClick}>
      {text}
    </span>
  );
}

export default Button;
