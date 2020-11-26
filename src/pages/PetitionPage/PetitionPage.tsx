/* External dependencies */
import React, { useEffect, useState, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PetitionPage.module.scss';
import PetitionList from 'components/PetitionList';
import PollList from 'components/PollList';
import Navigation from 'components/Global/Navigation';

const cx = classNames.bind(styles);

function PetitionPage() {
  const [downState, setDownState] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const intersectionHandler = useRef<IntersectionObserverCallback>(
    ([entry]) => {
      setDownState(!entry.isIntersecting);
    },
  );

  const intersectionObserverRef = useRef<IntersectionObserver>(
    new IntersectionObserver(intersectionHandler.current, {
      rootMargin: '-100px -100px',
    }),
  );

  useEffect(() => {
    intersectionObserverRef.current.observe(titleRef.current);
    return () => {
      intersectionObserverRef.current.disconnect();
    };
  }, []);

  return (
    <div className={cx('main-layout')}>
      <Navigation title="청원" className={downState ? 'down' : ''} />
      <h1 ref={titleRef} className={cx(downState ? 'no-title' : 'title')}>
        청원
      </h1>

      <Switch>
        <Route path="/petition" component={PetitionList} />
        <Route path="/poll" component={PollList} />
      </Switch>
    </div>
  );
}

export default PetitionPage;
