import './recommend.css'; // CSS 파일을 import하여 스타일을 적용합니다
import noneimg1 from './img/noneimg1.png'; // 이미지를 import 합니다
import noneimg2 from './img/noneimg2.png';
import noneimg3 from './img/noneimg3.png';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const allImgs = [
    noneimg1, noneimg2, noneimg3, noneimg1, noneimg2, noneimg2, noneimg2, noneimg3, noneimg3, noneimg3, noneimg3, noneimg3, noneimg3
];

function Recommend({ user }) {
    const [randomImgs, setRandomImgs] = useState([]);

    useEffect(() => {
        const chooseRandomImgs = () => {
            const shuffledImgs = allImgs.sort(() => 0.5 - Math.random());
            setRandomImgs(shuffledImgs.slice(0, 3));
        };

        chooseRandomImgs();
    }, []);

    return (
        <div className="recommendTrip">
            <h1>이런 여행은 어떠세요?</h1>
            <div className="rcimg">
                {randomImgs.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`Recommended ${index}`} />
                ))}
               
            </div>
        </div>
    );
}

export default Recommend;
