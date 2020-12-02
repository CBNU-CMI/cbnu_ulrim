/* External dependencies */
import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setTitle('청원');
        break;
      case '/petition':
        setTitle('청원');
        break;
      case '/poll':
        setTitle('투표');
        break;
      case '/login':
        setTitle('로그인');
        break;
      default:
        break;
    }
  }, [location.pathname]);

  const [downState, setDownState] = useState(false);
  const [titleRef, setTitleRef] = useState<HTMLHeadingElement>();

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
    if (!titleRef) return;
    intersectionObserverRef.current.observe(titleRef);
    return () => {
      intersectionObserverRef.current.disconnect();
    };
  }, [titleRef]);

  return (
    <>
      <div className={cx('box', downState ? 'down' : '')}>
        {downState ? <p>{title}</p> : ''}
        <ul>
          <li>
            <NavLink to="/petition" activeStyle={{ color: '#0077cc' }}>
              청원
            </NavLink>
          </li>
          <li>
            <NavLink to="/poll" activeStyle={{ color: '#0077cc' }}>
              투표
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeStyle={{ color: '#0077cc' }}>
              로그인
            </NavLink>
          </li>
        </ul>
      </div>
      {title !== '로그인' ? (
        <h1
          ref={ref => setTitleRef(ref as HTMLHeadingElement)}
          className={cx(downState ? 'no-title' : 'title')}
        >
          {title}
        </h1>
      ) : (
        ''
      )}
    </>
  );
}

export default Navigation;
