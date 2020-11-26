/* External dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './LoginPage.module.scss';
import PetitionList from 'components/PetitionList';
import PollList from 'components/PollList';
import Navigation from 'components/Global/Navigation';
import Login from 'components/Login';
import Line from 'elements/Line';
import Button from 'elements/Button';
import Box from 'elements/Box';

const cx = classNames.bind(styles);

function LoginPage() {
  return (
    <div className={cx('main-layout')}>
      <Navigation title="로그인" className="" />
      <h1 className={cx('title')}>로그인</h1>
      <Login />
      <Line margin="1rem" />
      <Box
        margin="1rem"
        text="울림이 처음이신가요? "
        moveText="회원가입 →"
        link="/signup"
        size="xl"
      />
      <Box
        margin="1rem"
        text="암호를 잊으셨나요? "
        moveText="암호 변경 →"
        link="/forgot"
        size="xl"
      />
      <Box
        margin="1rem"
        moveText="개인정보 처리방침"
        link="/privacy"
        size="xl"
      />

      <Switch>
        <Route path="/petition" component={PetitionList} />
        <Route path="/poll" component={PollList} />
      </Switch>
    </div>
  );
}

export default LoginPage;
