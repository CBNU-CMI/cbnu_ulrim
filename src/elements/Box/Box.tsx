/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Box.module.scss';

const cx = classNames.bind(styles);

function Box({
  margin,
  text = '',
  moveText = '',
  link = '',
  type = 'basic',
  size = 'md',
}) {
  return (
    <div className={cx('button', type, size)} style={{ marginBottom: margin }}>
      {text}
      <a href={link}>{moveText}</a>
    </div>
  );
}

export default Box;
