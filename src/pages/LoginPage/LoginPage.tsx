/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './LoginPage.module.scss';
import Login from 'components/Login';
import Line from 'elements/Line';
import Box from 'elements/Box';

const cx = classNames.bind(styles);

function LoginPage() {
  return (
    <div className={cx('login-layout')}>
      <div className={cx('title')}>로그인</div>
      <Login />
      <Line margin="1rem" />
      <Box
        marginTop="1"
        text="울림이 처음이신가요? "
        moveText="회원가입 →"
        link="/signup"
      />
      <Box
        marginTop="1"
        text="암호를 잊으셨나요? "
        moveText="암호 변경 →"
        link="/forgot"
      />
      <Box marginTop="1" moveText="개인정보 처리방침" link="/privacy" />
    </div>
  );
}

export default LoginPage;
