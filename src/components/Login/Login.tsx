/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import { Formik, Field } from 'formik';

/* Internal dependencies */
import styles from './Login.module.scss';
import Button from 'elements/Button';

const cx = classNames.bind(styles);

function Login() {
  return (
    <>
      <Formik
        initialValues={{ id: '', password: '' }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          setSubmitting(false);
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                className={cx('input-wrapper')}
                name="id"
                values={values.id}
                placeholder="아이디"
              />
            </div>
            <div>
              <Field
                className={cx('input-wrapper')}
                name="password"
                values={values.password}
                placeholder="비밀번호"
              />
            </div>
            <Button text="로그인" marginTop="1" />
          </form>
        )}
      </Formik>
    </>
  );
}

export default Login;
