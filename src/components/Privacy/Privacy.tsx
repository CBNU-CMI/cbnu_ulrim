/* External dependencies */
import React from 'react';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './Privacy.module.scss';

const cx = classNames.bind(styles);

function Privacy() {
  return (
    <div className={cx('privacy')}>
      <p>
        우리는 충북대학교 학생 여러분의 개인 정보를 중요하게 생각합니다. 이에
        정보를 수집, 사용, 공개, 이전, 저장하는 것과 관련된 사항을 규정하는
        개인정보 처리방침을 마련했습니다. 아래의 개인정보 처리방침을 숙지한 후
        궁금한 사항이 있으면 언제든지 문의해 주십시오.
      </p>
      <h2 className={cx('privacy-head-2')}>개인 정보 수집 및 사용</h2>
      <p>
        개인정보란 한 개인을 식별하고 이 사람에게 연락하는 데 사용될 수 있는
        데이터를 말합니다.
      </p>
      <h3 className={cx('privacy-head-3')}>‘울림’에서 수집하는 개인 정보</h3>
      <p>
        우리는 개인 정보 수집을 최소화하기 위해 충북대학교 포탈 이메일 정보만을
        수집합니다.
      </p>
      <h3 className={cx('privacy-head-3')}>
        ‘울림’에서 유저의 개인 정보를 사용하는 방법
      </h3>
      <p>
        수집한 충북대학교 포탈 이메일은 고유한 사용자 식별, 메일링 서비스에
        사용됩니다.
      </p>
      <h2 className={cx('privacy-head-2')}>쿠키 및 기타 기술 사용 </h2>
      <p> 자동로그인 기능을 위해 쿠키가 사용됩니다.</p>
      <h2 className={cx('privacy-head-2')}> 개인 정보 보호</h2>
      <p>
        우리는 개인 정보의 보안을 매우 중요하게 생각합니다. ‘울림’의 모든 온라인
        서비스는 SSL/TLS 프로토콜을 사용하여 개인 정보를 보호합니다. 암호를
        저장할 때는 복호화가 불가능한 해쉬 알고리즘을 사용합니다.
      </p>
    </div>
  );
}

export default Privacy;
