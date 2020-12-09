/* External dependencies */
import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PetitionList.module.scss';
import PetitionCard from 'components/PetitionCard';
import mockData from './mockData.json';
import Write from 'components/Write';

const cx = classNames.bind(styles);

function PetitionList() {
  const [downState, setDownState] = useState(false);
  const [writeRef, setWriteRef] = useState<HTMLAnchorElement>();

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
    if (!writeRef) return;
    intersectionObserverRef.current.observe(writeRef);
    return () => {
      intersectionObserverRef.current.disconnect();
    };
  }, [writeRef]);

  return (
    <div className={cx('petition_list')}>
      <div className={cx('petition_new')}>최신 청원들</div>
      <div className={cx('petition_write')}>
        <a
          ref={ref => setWriteRef(ref as HTMLAnchorElement)}
          href="/petition/write"
        >
          지금 청원하기
        </a>
      </div>
      <div className={cx('petition_cards')}>
        <div className={cx('petition_header')}>
          <span className={cx('category')}>카테고리</span>
          <span className={cx('title')}>제목</span>
          <span className={cx('end')}>청원마감일</span>
          <span className={cx('agree-num')}>참여인원</span>
        </div>
        {mockData.map(petition => {
          return <PetitionCard key={petition.id} petition={petition} />;
        })}
      </div>
      {downState ? <Write /> : ''}
    </div>
  );
}

export default PetitionList;
