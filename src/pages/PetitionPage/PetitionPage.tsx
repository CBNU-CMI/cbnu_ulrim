/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PetitionPage.module.scss';
import PetitionList from 'components/Petition/PetitionList';
import Archive from 'components/Archive';

const cx = classNames.bind(styles);

function PetitionPage() {
  return (
    <div className={cx('petition')}>
      <div className={cx('petition_descrive')}>
        <p>울림의 청원은 동의수 100건이 넘는 사안에 대하여</p>
        <p>'충북대학교 관계자'에게 문의하고 답변을 받는 철학을 지향합니다.</p>
      </div>
      <Archive link="/petition/archive" />
      <PetitionList />
    </div>
  );
}

export default PetitionPage;
