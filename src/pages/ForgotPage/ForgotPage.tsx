/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './ForgotPage.module.scss';
import Forgot from 'components/Forgot';
import Line from 'elements/Line';
import Box from 'elements/Box';

const cx = classNames.bind(styles);

function ForgotPage() {
  return (
    <div className={cx('main-layout')}>
      <h1 className={cx('title')}>암호 변경</h1>
      <Forgot />
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

export default ForgotPage;
