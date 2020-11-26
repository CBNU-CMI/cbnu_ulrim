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

const cx = classNames.bind(styles);

function LoginPage() {
  return (
    <div className={cx('main-layout')}>
      <Navigation title="로그인" className="" />
      <h1 className={cx('title')}>로그인</h1>
      <Login />
      <Switch>
        <Route path="/petition" component={PetitionList} />
        <Route path="/poll" component={PollList} />
      </Switch>
    </div>
  );
}

export default LoginPage;
