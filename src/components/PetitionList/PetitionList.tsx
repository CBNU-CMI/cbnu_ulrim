/* External dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

/* Internal dependencies */
import { getPetitionList } from 'modules/reducers/petitionReducer';
import * as petitionSelector from 'modules/selectors/petitionSelector';
import PetitionItem from 'components/PetitionItem';
import styles from './PetitionList.module.scss';

const cx = classNames.bind(styles);

function PetitionList() {
  const dispatch = useDispatch();
  const petitionList = useSelector(petitionSelector.getPetitionList);

  useEffect(() => {
    dispatch(getPetitionList());
  }, [dispatch]);

  return (
    <div className={cx('petition-list')}>
      {petitionList.map(petition => (
        <PetitionItem key={petition.id} petition={petition} />
      ))}
    </div>
  );
}

export default PetitionList;
