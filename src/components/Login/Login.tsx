/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Login.module.scss';
import Input from 'elements/Input';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div>
      <div className={cx('input-wrapper')}>
        <Input placeholder="아이디" />
      </div>
      <div className={cx('input-wrapper')}>
        <Input placeholder="비밀번호" />
      </div>
    </div>
  );
}

export default Login;
