/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Forgot.module.scss';
import Input from 'elements/Input';
import Button from 'elements/Button';

const cx = classNames.bind(styles);

function Forgot() {
  const submit = () => {
    console.log('submit');
  };

  return (
    <div>
      <div className={cx('input-wrapper')}>
        <Input placeholder="아이디" />
      </div>
      <div className={cx('button-wrapper')}>
        <Button
          text="이메일 발송"
          onClick={submit}
          type="primary"
          marginTop="1rem"
          size="xl"
        />
      </div>
    </div>
  );
}

export default Forgot;
