/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PrivacyPage.module.scss';
import Privacy from 'components/Privacy';
import Line from 'elements/Line';

const cx = classNames.bind(styles);

function PrivacyPage() {
  return (
    <div className={cx('main-layout')}>
      <h1 className={cx('title')}>개인정보 처리방침</h1>
      <Line margin="1rem" />
      <Privacy />
    </div>
  );
}

export default PrivacyPage;
