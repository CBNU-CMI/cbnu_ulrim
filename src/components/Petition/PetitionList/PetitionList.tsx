/* External dependencies */
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

/* Internal dependencies */
import { getPetitionList } from 'modules/reducers/petitionReducer';
import * as petitionSelector from 'modules/selectors/petitionSelector';
import PetitionCard from 'components/PetitionCard';
import Write from 'components/Write';
import styles from './PetitionList.module.scss';

const cx = classNames.bind(styles);

const ADDITIONAL_LOAD_COUNT = 5;

function PetitionList() {
  const dispatch = useDispatch();
  const petitionList = useSelector(petitionSelector.getPetitionList);

  const observerRef = useRef<HTMLDivElement>(null);
  const writeRef = useRef<HTMLAnchorElement>(null);

  const [itemIndex, setItemIndex] = useState(0);
  const [downState, setDownState] = useState(false);

  const renderedPetitionList = useMemo(() => {
    return petitionList.slice(0, itemIndex);
  }, [petitionList, itemIndex]);

  useEffect(() => {
    dispatch(getPetitionList());
  }, [dispatch]);

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
        {renderedPetitionList.map(petition => {
          return <PetitionCard key={petition.id} petition={petition} />;
        })}
        <div ref={observerRef} />
      </div>
      {downState && <Write />}
    </div>
  );
}

export default PetitionList;
