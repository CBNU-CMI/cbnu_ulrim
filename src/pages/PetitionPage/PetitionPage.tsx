/* External dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import Navigation from 'components/Global/Navigation';
import PetitionList from 'components/PetitionList';
import styles from './PetitionPage.module.scss';

const cx = classNames.bind(styles);

function PetitionPage() {
  return (
    <div className={cx('main-layout')}>
      <Navigation />
      <Switch>
        <Route path="/petition" component={PetitionList} />
      </Switch>
    </div>
  );
}

export default PetitionPage;
