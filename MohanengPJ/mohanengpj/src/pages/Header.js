import React, { useState, useEffect } from 'react';
import logo from '../img/nologo.png';
import krmap from '../img/krmap.png';
import './style.css'
import axios from 'axios';

const regionInfo = {
    seoul: "testtesttesttesttesttesttesttesttesttesttesttest",
    jeju: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
};

const translatedRegionNames = {
    seoul: "서울",
    incheon: "인천",
    daejeon: "대전",
    daegu: "대구",
    ulsan: "울산",
    busan: "부산",
    gwangju: "광주",
    gyeonggi: "경기도",
    gangwon: "강원도",
    chungbuk: "충청북도",
    chungnam: "충청남도",
    jeonbuk: "전라북도",
    jeonnam: "전라남도",
    gyeongbuk: "경상북도",
    gyeongnam: "경상남도",
    jeju: "제주도"
};

const regionCoordinates = {
    seoul: { lat: 37.5665, lon: 126.9780 },
    incheon: { lat: 37.4563, lon: 126.7052 },
    daejeon: { lat: 36.3504, lon: 127.3845 },
    daegu: { lat: 35.8714, lon: 128.6014 },
    ulsan: { lat: 35.5384, lon: 129.3114 },
    busan: { lat: 35.1796, lon: 129.0756 },
    gwangju: { lat: 35.1595, lon: 126.8526 },
    gyeonggi: { lat: 37.4138, lon: 127.5183 },   
    gangwon: { lat: 37.8228, lon: 128.1555 }, 
    chungbuk: { lat: 36.6359, lon: 127.4913 },
    chungnam: { lat: 36.5184, lon: 126.8000 }, 
    jeonbuk: { lat: 35.7175, lon: 127.1530 }, 
    jeonnam: { lat: 34.8679, lon: 126.9910 }, 
    gyeongbuk: { lat: 36.4919, lon: 128.8889 }, 
    gyeongnam: { lat: 35.4606, lon: 128.2132 }, 
    jeju: { lat: 33.4890, lon: 126.4983 }
};


function Header(){

    const [selectedRegion, setSelectedRegion] = useState('');
    const [infoComponent, setInfoComponent] = useState(null);
    const [regionName, setRegionName] = useState('');
    const [translatedRegionName, setTranslatedRegionName] = useState('');

    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lon: "" },
      });
      const [weather, setWeather] = useState(null);

      const onSuccess = location => {
        setLocation({
          loaded: true,
          coordinates: {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          },
        });
      };

      useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(onSuccess);
        }
      }, []);

      useEffect(() => {
        if (location.loaded) {
          axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lon}&appid=bdde3f61441a8ac05c85c4d21c0e8743&lang=kr`)
            .then(response => {
              setWeather(response.data);
            });
        }
    }, [location]);
    

    const handleClick = (regionName) => {
        console.log(regionName + ' 클릭됨');
        setRegionName(regionName);
        setSelectedRegion(regionName);
        if (regionName === 'none') {
            setInfoComponent(null);
        }else{
            const newTranslatedRegionName = translatedRegionNames[regionName];
            setTranslatedRegionName(newTranslatedRegionName);
            const coords = regionCoordinates[regionName];
            const seoulLocation = {
                coords: {
                    latitude: coords.lat,
                    longitude: coords.lon,
                },
            };
            onSuccess(seoulLocation);
            setInfoComponent(
                <div class="backBoard">
                <div class="region">
                    <h2>{newTranslatedRegionName}</h2>
                        
                </div>
                <div class="boardList">
                    <ul class="no-bullet">
                        <li>
                            <div class="imgLeft">
                                <img src={logo} alt="logo"></img>
                            </div>
                            <div class="textRight">
                                <span>제목이 입력되는 부분</span>
                                <br/>
                                <span>요약이 입력되는 부분</span>
                            </div>
                        </li>

                        <li>
                            <div class="imgLeft">
                                <img src={logo}></img>
                            </div>
                            <div class="textRight">
                                <span>제목이 입력되는 부분</span>
                                <br/>
                                <span>요약이 입력되는 부분</span>
                            </div>
                        </li>

                        <li>
                            <div class="imgLeft">
                                <img src={logo}></img>
                            </div>
                            <div class="textRight">
                                <span>제목이 입력되는 부분</span>
                                <br/>
                                <span>요약이 입력되는 부분</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            );
        }
    };


    //목록에 쓸 예제 만듬
    // const [travelList, setTravelList] = useState([]);

    // const addList = () => {
    //     const nextIndex = 0;

    //     const seoulList ={
    //         no : nextIndex,
    //         image : "nologo.png",
    //         title : 'hello'
    //     };

    //     setTravelList(prevList => [...prevList, seoulList]);
    //     nextIndex +=1;
    // }
    // 여기 까지 예시
    return(
        <>
        <div class="header">
            {/* 프론트로 보낼려고 잠시 주석처리  */}
            {/* <img src={logo} alt="로고 없음" height="100"/>
            <a href="https://www.instagram.com/" class="headerword">인스타그램</a>
            <a href="https://www.kakaocorp.com/" class="headerword">카카오톡</a> */}
            <div class="weather">
                {location.loaded ? (
                    <>
                        <h3 className='weatherinfo'>{weather ? `${weather.name}의 날씨 정보` : "날씨 정보를 불러오는 중..."}</h3>
                        {weather && (
                            <div>
                                <p>지역: {weather.name} / 날씨: {weather.weather[0].description} / 온도: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
                            </div>
                        )}
                    </>
                ) : (
                    <h3>위치 정보를 불러오는 중...</h3>
                )}
            </div>
        </div>
        <div class="secondheader">
            <h1 class="locate">지역</h1>
            <select name='region' class="lc" value={selectedRegion} onChange={e => handleClick(e.target.value)}>
                <option value='none' className="textc" selected>--선택 안함--</option>
                <option value='seoul' alt="서울">서울</option>
                <option value='incheon'>인천</option>
                <option value='daejeon'>대전</option>
                <option value='daegu'>대구</option>
                <option value='ulsan'>울산</option>
                <option value='busan'>부산</option>
                <option value='gwangju'>광주</option>
                <option value='gyeonggi'>경기도</option>
                <option value='gangwon'>강원도</option>
                <option value='chungbuk'>충청북도</option>
                <option value='chungnam'>충청남도</option>
                <option value='jeonbuk'>전라북도</option>
                <option value='jeonnam'>전라남도</option>
                <option value='gyeongbuk'>경상북도</option>
                <option value='gyeongnam'>경상남도</option>
                <option value='jeju'>제주도</option>
            </select>
        </div>
            <div class="koreamap">
                <img src={krmap} usemap="#image-map"/>
                {infoComponent}
                
            </div>

            <map name="image-map">
                <area onClick={() => handleClick('seoul')} alt="서울" title="서울" href="#" coords="218,70,221,74,231,76,220,90,212,85,205,76,213,73,211,75" shape="poly"/>
                <area onClick={() => handleClick('incheon')} alt="인천" title="인천" href="#" coords="159,73,168,69,175,74,179,80,180,87,186,88,191,85,196,80,202,83,207,88,206,95,197,99,189,96,182,97,175,96,170,85,164,78" shape="poly"/>
                <area onClick={() => handleClick('daejeon')} alt="대전" title="대전" href="#" coords="252,196,247,201,247,207,248,213,253,216,259,213,260,206" shape="poly"/>
                <area onClick={() => handleClick('daegu')} alt="대구" title="대구" href="#" coords="344,247,345,240,349,235,359,236,356,242,357,247,355,254,352,259,343,262,339,256" shape="poly"/>
                <area onClick={() => handleClick('ulsan')} alt="울산" title="울산" href="#" coords="403,261,393,261,389,271,390,278,391,290,396,294,401,295,403,287,410,279,411,271,406,268" shape="poly"/>
                <area onClick={() => handleClick('busan')} alt="부산" title="부산" href="#" coords="376,303,386,300,394,302,392,310,387,322,378,326,370,334,359,337,352,344,348,353,339,348,333,343,347,329,363,315" shape="poly"/>
                <area onClick={() => handleClick('gwangju')} alt="광주" title="광주" href="#" coords="200,306,198,311,201,322,215,321,212,312,208,305" shape="poly"/>
                <area onClick={() => handleClick('gyeonggi')} alt="경기도" title="경기도" href="#" coords="227,95,208,104,204,127,216,140,243,144,281,116,249,40,214,31,236,82" shape="poly"/>
                <area onClick={() => handleClick('gangwon')} alt="강원도" title="강원도" href="#" coords="229,22,268,15,328,2,356,56,400,122,347,129,288,110,276,72,265,40" shape="poly"/>
                <area onClick={() => handleClick('chungbuk')} alt="충청북도" title="충청북도" href="#" coords="249,145,289,125,325,133,336,139,325,153,292,164,281,178,297,217,283,233,271,215,255,189,253,172" shape="poly"/>
                <area onClick={() => handleClick('chungnam')} alt="충청남도" title="충청남도" href="#" coords="180,135,150,154,186,205,197,231,228,221,266,233,239,207,248,166,236,152,208,154" shape="poly"/>
                <area onClick={() => handleClick('jeonbuk')} alt="경상북도" title="경상북도" href="#" coords="294,180,329,159,353,139,404,139,408,231,423,233,416,254,358,264,371,230,340,229,331,255,292,237,310,215,298,202" shape="poly"/>
                <area onClick={() => handleClick('jeonnam')} alt="경상남도" title="경상남도" href="#" coords="290,248,272,268,270,300,284,343,328,338,383,292,377,271,354,273,319,262,309,250" shape="poly"/>
                <area onClick={() => handleClick('gyeongbuk')} alt="전라북도" title="전라북도" href="#" coords="199,239,177,270,186,299,208,282,231,296,262,291,265,261,280,241,252,241,224,230" shape="poly"/>
                <area onClick={() => handleClick('gyeongnam')} alt="전라남도" title="전라남도" href="#" coords="173,295,142,336,139,393,231,391,272,358,272,319,261,299,224,325,196,330" shape="poly"/>
                <area onClick={() => handleClick('jeju')} alt="제주도" title="제주도" href="#" coords="188,417,136,423,122,446,134,454,171,453,190,440" shape="poly"/>
            </map>

        </>
    );
}


export default Header;