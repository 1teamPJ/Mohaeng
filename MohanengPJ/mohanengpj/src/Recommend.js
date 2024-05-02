import './recommend.css'
import noneimg1 from './img/noneimg1.png';
import noneimg2 from './img/noneimg2.png';
import noneimg3 from './img/noneimg3.png';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* const triprm = [
    {
        id : 1,
        imgSrc: noneimg1
    },
    {
        id : 2,
        imgSrc: noneimg2
    },
    {
        id : 3,
        imgSrc: noneimg3
    }
] */

    const allImgs = [
        noneimg1, noneimg2, noneimg3, noneimg1, noneimg2, noneimg2, noneimg2, noneimg3, noneimg3, noneimg3, noneimg3, noneimg3, noneimg3
    ];
  

    function Recommend({ user }){
        const [randomImgs, setRandomImgs] = useState([]);

        useEffect(() => {
            const chooseRandomImgs = () => {
              const shuffledImgs = allImgs.sort(() => 0.5 - Math.random());
              setRandomImgs(shuffledImgs.slice(0, 3));
            };
        
            chooseRandomImgs();
          }, []);

        return(
            <>
                <div class="recommendTrip">
                    <h1 class="">이런 여행은 어떠세요?</h1>
                    <div class="rcimg">
                        {
                        /* randomImgs.map((item) => (
                            <img key={item.id} src={item.imgSrc} alt={`이미지 ${item.id}`} />
                        )) */
                        randomImgs.map((imgSrc, index) => (
                            <img key={index} src={imgSrc} alt={`Recommended ${index}`} />
                          ))
                        }
                        <button><NavLink to="/testpage" className="noneunderline">버튼</NavLink></button>
                    </div>
                </div>
            </>
        );
    }
    export default Recommend;