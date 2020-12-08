/* External dependencies */
import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PetitionList.module.scss';
import PetitionCard from 'components/PetitionCard';
import mockData from './mockData.json';

const cx = classNames.bind(styles);

function PetitionList() {
  const [itemIndex, setItemIndex] = useState(0);
  const [contents, setContents] = useState(mockData.slice(0, 5));
  const [observerRef, setObserverRef] = useState<HTMLDivElement>();

  const addContentsList = () => {
    setItemIndex(itemIndex + 5);
    setContents(contents.concat(mockData.slice(itemIndex + 5, itemIndex + 10)));
  };

  const intersectionHandler = useRef<IntersectionObserverCallback>(
    ([entry]) => {
      if (entry.isIntersecting) {
        addContentsList();
      }
    },
  );

  const intersectionObserverRef = useRef<IntersectionObserver>(
    new IntersectionObserver(intersectionHandler.current, {
      threshold: 1,
    }),
  );

  useEffect(() => {
    if (!observerRef) return;
    intersectionObserverRef.current.observe(observerRef);
    return () => {
      intersectionObserverRef.current.disconnect();
    };
  }, [observerRef]);

  return (
    <div className={cx('petition_list')}>
      <div className={cx('petition_new')}>최신 청원들</div>
      <div className={cx('petition_write')}>
        <a href="/petition/write">지금 청원하기</a>
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
        <div
          className="observer"
          ref={ref => setObserverRef(ref as HTMLDivElement)}
        />
      </div>
    </div>
  );
}

export default PetitionList;
