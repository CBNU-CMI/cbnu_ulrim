/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './SignupPage.module.scss';
import Signup from 'components/Signup';
import Line from 'elements/Line';
import Box from 'elements/Box';

const cx = classNames.bind(styles);

function SignupPage() {
  return (
    <div className={cx('main-layout')}>
      <h1 className={cx('title')}>회원가입</h1>
      <Signup />
      <Line margin="1rem" />
      <Box
        marginTop="1"
        text="이미 가입하셨나요? "
        moveText="로그인 →"
        link="/login"
      />
      <Box marginTop="1" moveText="개인정보 처리방침" link="/privacy" />
    </div>
  );
}

export default SignupPage;
