/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PollPage.module.scss';
import PollList from 'components/PollList';

const cx = classNames.bind(styles);

function PollPage() {
  return <PollList />;
}

export default PollPage;
