/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import Button, { ButtonSize } from 'elements/Button';
import styles from './PetitionWrite.module.scss';

const cx = classNames.bind(styles);

function PetitionWrite() {
  return (
    <div className={cx('petition-write')}>
      <input className={cx('title')} placeholder="청원제목을 입력하세요" />
      <select className={cx('category')}>
        <option value="">수업</option>
        <option value="">학생회</option>
        <option value="">기숙사</option>
        <option value="">교칙</option>
        <option value="">행사</option>
      </select>
      <textarea
        className={cx('contents')}
        rows={20}
        placeholder="청원내용을 입력하세요"
      ></textarea>
      <div className={cx('files')}>
        <h2>이미지 선택</h2>
        <input type="file" accept="image/*" />
        <input type="file" accept="image/*" />
        <input type="file" accept="image/*" />
      </div>
      <div className={cx('submit')}>
        <Button text="제출" marginTop={2} buttonSize={ButtonSize.LG} />
      </div>
    </div>
  );
}

export default PetitionWrite;
