import './recommend.css';
/* import noneimg1 from '../img/noneimg1.png';
import noneimg2 from '../img/noneimg2.png';
import noneimg3 from '../img/noneimg3.png'; */
import seoulImage from '../img/seoul.jpg';
import busanImage from '../img/busan.jpg';
import jejuImage from '../img/jeju.jpg';
import gangneungImage from '../img/gangneung.jpg';
import gyeongjuImage from '../img/gyeongju.jpg';
import jeonjuImage from '../img/jeonju.jpg';
import incheonImage from '../img/incheon.jpg';
import yeosuImage from '../img/yeosu.jpg';
import chuncheonImage from '../img/chuncheon.jpg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const allImgs = [
    seoulImage, busanImage, jejuImage, gangneungImage, gyeongjuImage, jeonjuImage, incheonImage, yeosuImage, chuncheonImage
];

function Recommend({ user }) {
    const [randomImgs, setRandomImgs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const chooseRandomImgs = () => {
            const shuffledImgs = allImgs.sort(() => 0.5 - Math.random());
            setRandomImgs(shuffledImgs.slice(0, 3));
        };

        chooseRandomImgs();
    }, []);

    const handleClick = () => {
        navigate("/travelboard");
        window.scrollTo(0, 0);
    };

    return (
        <div className="recommendTrip">
            <h1>이런 여행은 어떠세요?</h1>
            <div className="rcimg">
                {randomImgs.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`Recommended ${index}`} />
                ))}  
            </div>
            <button className="gotravelbt" onClick={handleClick}><h3>추천 여행지 보러가기</h3></button>
        </div>
    );
}

export default Recommend;
