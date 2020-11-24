/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import PetitionModel from 'models/Petition';
import styles from './PetitionItem.module.scss';

const cx = classNames.bind(styles);

interface PetitionItemProps {
  petition: PetitionModel;
}

function PetitionItem({ petition }: PetitionItemProps) {
  return (
    <div className={cx('petition-item')}>
      <div className={cx('id')}>{petition.id}</div>
      <div className={cx('title')}>{petition.title}</div>
      <div className={cx('createdAt')}>{petition.createdAt}</div>
    </div>
  );
}

export default PetitionItem;
