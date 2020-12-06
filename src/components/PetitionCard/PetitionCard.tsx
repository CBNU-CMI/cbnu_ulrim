/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PetitionCard.module.scss';

const cx = classNames.bind(styles);

function PetitionCard({ petition }) {
  return (
    <div className={cx('petition-card')}>
      <span className={cx('category')}>{petition.category}</span>
      <span className={cx('title')}>{petition.title}</span>
      <span className={cx('end')}>{petition.end_date}</span>
      <span className={cx('agree-num')}>{petition.agree_num}</span>
    </div>
  );
}

export default PetitionCard;
