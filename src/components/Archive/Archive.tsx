/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { IoIosArrowForward } from 'react-icons/io';
import { IoFileTrayFullOutline } from 'react-icons/io5';

/* Internal dependencies */
import styles from './Archive.module.scss';
const cx = classNames.bind(styles);

function Archive({ link }) {
  return (
    <div className={cx('archive-box')}>
      <a href={link}>
        <div className={cx('archive')}>
          <div className={cx('archive-text')}>
            <IoFileTrayFullOutline className={cx('IoFileTrayFullOutline')} />
            <span>아카이브</span>
            <p>
              일정량 이상의 추천을 받은 인기 청원은 아카이브에 따로 보관됩니다.
            </p>
          </div>
          <IoIosArrowForward className={cx('IoIosArrowForward')} />
        </div>
      </a>
    </div>
  );
}

export default Archive;
