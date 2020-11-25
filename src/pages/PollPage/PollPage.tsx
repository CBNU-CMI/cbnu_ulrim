/* External dependencies */
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PollPage.module.scss';
import PetitionList from 'components/PetitionList';
import PollList from 'components/PollList';
import Navigation from 'components/Global/Navigation';

const cx = classNames.bind(styles);

function PollPage() {
  const [downState, setDownState] = useState(false);
  const callback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setDownState(false);
      } else {
        setDownState(true);
      }
    });
  };
  const observer = new IntersectionObserver(callback, {
    rootMargin: '-100px -100px',
  });

  useEffect(() => {
    observer.observe(document.querySelector<any>('h1'));
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={cx('main-layout')}>
      {downState ? (
        <>
          <Navigation title="투표" className="down" />
          <h1 className={cx('no-title')}>투표</h1>
        </>
      ) : (
        <>
          <Navigation title="투표" className="" />
          <h1 className={cx('title')}>투표</h1>
        </>
      )}

      <Switch>
        <Route path="/petition" component={PetitionList} />
        <Route path="/poll" component={PollList} />
      </Switch>
    </div>
  );
}

export default PollPage;
