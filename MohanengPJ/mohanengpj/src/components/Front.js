// User 컴포넌트 코드
import logo from '../img/mainlogo6.png';
import { NavLink } from 'react-router-dom';
import styles from './Front.module.css'; // CSS 모듈을 import하여 styles 객체로 사용합니다
import { useNavigate } from 'react-router-dom';


function Front() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.header}> {/* 헤더에 해당하는 부분에 header 클래스를 적용합니다 */}
      <img src={logo} alt="로고 없음" className={styles.logo} onClick={handleClick} /> {/* 로고 이미지에 logo 클래스를 적용합니다 */}
      <nav className={styles["nav-links"]}> {/* 네비게이션 링크들에 해당하는 부분에 nav-links 클래스를 적용합니다 */}
        <NavLink to="/" className={styles["nav-link"]}>메인</NavLink> {/* 링크에 nav-link 클래스를 적용합니다 */}
        <NavLink to="/checkboard" className={styles["nav-link"]}>체크보드</NavLink>
        <NavLink to="/feedboard" className={styles["nav-link"]}>피드보드</NavLink>
        <NavLink to="/travelboard" className={styles["nav-link"]}>여행보드</NavLink>
        </nav>
      <div className={styles.footer}></div>
    </div>
  );
}

export default Front;