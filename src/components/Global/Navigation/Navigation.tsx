/* External dependencies */
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import { getTitleByPathName } from 'utils/stringUtils';
import ExNavLink from 'elements/ExNavLink';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
  const location = useLocation();
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [downState, setDownState] = useState(false);

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

  const title = useMemo(() => {
    return getTitleByPathName(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (titleRef.current) {
      intersectionObserverRef.current.observe(titleRef.current);

      return function cleanup() {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        intersectionObserverRef.current.disconnect();
      };
    }
  }, [titleRef]);

  return (
    <>
      <div className={cx('box', downState ? 'down' : '')}>
        {downState ? <p>{title}</p> : ''}
        <ul>
          <li>
            <ExNavLink
              to="/petition"
              activePath={['/', '/petition', '/petition/write']}
            >
              청원
            </ExNavLink>
          </li>
          <li>
            <ExNavLink to="/poll" activePath={['/poll']}>
              투표
            </ExNavLink>
          </li>
          <li>
            <ExNavLink
              to="/login"
              activePath={['/login', '/signup', '/forgot', '/privacy']}
            >
              로그인
            </ExNavLink>
          </li>
        </ul>
      </div>
      {title !== '로그인' && (
        <h1 ref={titleRef} className={cx(downState ? 'no-title' : 'title')}>
          {title}
        </h1>
      )}
    </>
  );
}

export default Navigation;
