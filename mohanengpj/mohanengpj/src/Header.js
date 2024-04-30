import logo from './img/nologo.png';
import './style.css'

function Header(){
    return(
        <>
        <div class="header">
            <img src={logo} alt="로고 없음" height="100"/>
            <a href="https://www.instagram.com/" class="headerword">인스타그램</a>
            <a href="https://www.kakaocorp.com/" class="headerword">카카오톡</a>
        </div>
        <div class="secondheader">
            <h1 class="locate">지역</h1>
            <select name='region' class="lc">
                <option value='none' class="textc" selected>--선택안함--</option>
                <option value='seoul'>서울</option>
                <option value='busan'>인천</option>
                <option value='busan'>대전</option>
                <option value='busan'>대구</option>
                <option value='busan'>울산</option>
                <option value='busan'>부산</option>
                <option value='busan'>광주</option>
                <option value='busan'>세종</option>
                <option value='busan'>경기도</option>
                <option value='busan'>강원도</option>
                <option value='busan'>충청북도</option>
                <option value='busan'>충청남도</option>
                <option value='busan'>전라북도</option>
                <option value='busan'>전라남도</option>
                <option value='busan'>경상북도</option>
                <option value='busan'>경상남도</option>
            </select>
        </div>
        </>
    );
}

export default Header;