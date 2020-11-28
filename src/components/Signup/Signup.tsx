/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Signup.module.scss';
import Input from 'elements/Input';
import Button from 'elements/Button';

const cx = classNames.bind(styles);

function Signup() {
  const submit = () => {
    console.log('submit');
  };

  return (
    <div>
      <div className={cx('input-wrapper')}>
        <Input placeholder="아이디" />
      </div>
      <div className={cx('input-wrapper')}>
        <Input placeholder="닉네임" />
      </div>
      <div className={cx('input-wrapper')}>
        <Input placeholder="비밀번호" />
      </div>
      <div className={cx('button-wrapper')}>
        <Button text="회원가입" onClick={submit} type="primary" size="xl" />
      </div>
    </div>
  );
}

export default Signup;
