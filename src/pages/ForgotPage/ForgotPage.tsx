/* External dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './ForgotPage.module.scss';
import PetitionList from 'components/PetitionList';
import PollList from 'components/PollList';
import Navigation from 'components/Global/Navigation';
import Forgot from 'components/Forgot';
import Line from 'elements/Line';
import Box from 'elements/Box';

const cx = classNames.bind(styles);

function ForgotPage() {
  return (
    <div className={cx('main-layout')}>
      <Navigation title="개인정보 처리방침" className="" />
      <h1 className={cx('title')}>개인정보</h1>
      <Forgot />
      <Line margin="1rem" />
      <Box
        margin="1rem"
        text="이미 가입하셨나요? "
        moveText="로그인 →"
        link="/login"
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

export default ForgotPage;
