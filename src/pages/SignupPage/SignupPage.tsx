/* External dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './SignupPage.module.scss';
import PetitionList from 'components/PetitionList';
import PollList from 'components/PollList';
import Signup from 'components/Signup';

const cx = classNames.bind(styles);

function SignupPage() {
  return (
    <div className={cx('main-layout')}>
      <h1 className={cx('title')}>회원가입</h1>
      <Signup />
      <Switch>
        <Route path="/petition" component={PetitionList} />
        <Route path="/poll" component={PollList} />
      </Switch>
    </div>
  );
}

export default SignupPage;
