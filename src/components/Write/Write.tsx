/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { BsPencilSquare } from 'react-icons/bs';

/* Internal dependencies */
import styles from './Write.module.scss';

const cx = classNames.bind(styles);

function Write() {
  return (
    <div className={cx('write-icon')}>
      <BsPencilSquare className={cx('BsPencilSquare')} />
    </div>
  );
}

export default Write;
