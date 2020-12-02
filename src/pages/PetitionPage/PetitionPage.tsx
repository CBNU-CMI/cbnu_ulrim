/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PetitionPage.module.scss';
import PetitionList from 'components/PetitionList';

const cx = classNames.bind(styles);

function PetitionPage() {
  return <PetitionList />;
}

export default PetitionPage;
