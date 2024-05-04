import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>회사 정보</h3>
          <p>회사 소개</p>
          <p>이용약관</p>
          <p>개인정보 처리방침</p>
        </div>
        <div className="footer-column">
          <h3>고객 지원</h3>
          <p>자주 묻는 질문</p>
          <p>문의하기</p>
        </div>
        <div className="footer-column">
          <h3>팔로우하기</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024. MOHAENG. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;