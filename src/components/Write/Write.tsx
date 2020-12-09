/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { BsPencilSquare } from 'react-icons/bs';

/* Internal dependencies */
import styles from './Write.module.scss';

const cx = classNames.bind(styles);

function Write() {
  return (
    <a href="/petition/write" className={cx('write-icon')}>
      <BsPencilSquare className={cx('BsPencilSquare')} />
    </a>
  );
}

export default Write;
