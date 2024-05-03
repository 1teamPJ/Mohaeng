import logo from '../img/nologo.png';
import { NavLink } from 'react-router-dom';

function Front(){
    return(
        <div>
            <img src={logo} alt="로고 없음" height="100"/>
            <NavLink to="/">메인</NavLink>
            <NavLink to="/checkboard">체크보드</NavLink>
            <NavLink to="/feedboard">피드보드</NavLink>
            <NavLink to="/travelboard">여행보드</NavLink>
        </div>
    );
}

export default Front;