/* External dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PrivacyPage.module.scss';
import PetitionList from 'components/PetitionList';
import PollList from 'components/PollList';
import Navigation from 'components/Global/Navigation';
import Privacy from 'components/Privacy';
import Line from 'elements/Line';

const cx = classNames.bind(styles);

function PrivacyPage() {
  return (
    <div className={cx('main-layout')}>
      <Navigation title="개인정보 처리방침" className="" />
      <h1 className={cx('title')}>개인정보 처리방침</h1>
      <Line margin="1rem" />
      <Privacy />
      <Switch>
        <Route path="/petition" component={PetitionList} />
        <Route path="/poll" component={PollList} />
      </Switch>
    </div>
  );
}

export default PrivacyPage;
