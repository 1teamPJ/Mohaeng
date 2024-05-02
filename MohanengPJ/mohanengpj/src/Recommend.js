import './recommend.css'
import noneimg1 from './img/noneimg1.png';
import noneimg2 from './img/noneimg2.png';
import noneimg3 from './img/noneimg3.png';
import { NavLink } from 'react-router-dom';

const triprm = [
    {
        id : 1,
        img : {noneimg1}
    },
    {
        id : 2,
        img : {noneimg2}
    },
    {
        id : 3,
        img : {noneimg3}
    }
]

function Recommend({ user }){
    return(
        <>
            <div class="recommendTrip">
                <h1 class="">이런 여행은 어떠세요?</h1>
                <div class="rcimg">
                    {/* <Recommend user={triprm[0].img}/> */}
                    {/* <img src={noneimg1}></img>
                    <img src={noneimg2}></img>
                    <img src={noneimg3}></img>
                    <img src={noneimg1}></img>
                    <img src={noneimg2}></img>
                    <img src={noneimg3}></img>
                    <img src={noneimg1}></img>
                    <img src={noneimg2}></img>
                    <img src={noneimg3}></img>
                    <img src={noneimg3}></img>
                    <img src={noneimg3}></img>
                    <img src={noneimg3}></img> */}
                    <button><NavLink to="/testpage" className="noneunderline">버튼</NavLink></button>
                </div>
            </div>
        </>
    );
}
export default Recommend;