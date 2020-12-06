/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PetitionCard.module.scss';

const cx = classNames.bind(styles);

function PetitionCard({ data }) {
  return (
    <>
      <div className={cx('petition-card')}>
        <span className={cx('category')}>{data.category}</span>
        <span className={cx('title')}>{data.title}</span>
        <span className={cx('end')}>{data.end_date}</span>
        <span className={cx('agree-num')}>{data.agree_num}</span>
      </div>
    </>
  );
}

export default PetitionCard;
