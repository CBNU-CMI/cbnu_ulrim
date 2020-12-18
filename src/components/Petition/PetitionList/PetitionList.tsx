/* External dependencies */
import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PetitionList.module.scss';
import PetitionCard from 'components/PetitionCard';
import mockData from './mockData.json';
import Write from 'components/Write';

const cx = classNames.bind(styles);

const ADDITIONAL_LOAD_COUNT = 5;

function PetitionList() {
  const observerRef = useRef<HTMLDivElement>(null);
  const writeRef = useRef<HTMLAnchorElement>(null);

  const [itemIndex, setItemIndex] = useState(0);
  const [contents, setContents] = useState<Array<any>>([]);
  const [downState, setDownState] = useState(false);

  useEffect(() => {
    setContents(prev =>
      prev.concat(mockData.slice(itemIndex, itemIndex + ADDITIONAL_LOAD_COUNT)),
    );
  }, [itemIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setItemIndex(prev => prev + ADDITIONAL_LOAD_COUNT);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    );

    observer.observe(observerRef.current as HTMLDivElement);

    return function cleanup() {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setDownState(!entry.isIntersecting);
      },
      {
        rootMargin: '-100px -100px',
      },
    );

    observer.observe(writeRef.current as HTMLAnchorElement);

    return function cleanup() {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={cx('petition_list')}>
      <div className={cx('petition_new')}>최신 청원들</div>
      <div className={cx('petition_write')}>
        <a ref={writeRef} href="/petition/write">
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
        {contents.map(petition => {
          return <PetitionCard key={petition.id} petition={petition} />;
        })}
        <div ref={observerRef} />
      </div>
      {downState && <Write />}
    </div>
  );
}

export default PetitionList;
