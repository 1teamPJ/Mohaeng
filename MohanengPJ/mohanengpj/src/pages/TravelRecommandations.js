import React, {useState} from 'react';
import seoulImage from '../img/seoul.jpg';
import busanImage from '../img/busan.jpg';
import jejuImage from '../img/jeju.jpg';
import gangneungImage from '../img/gangneung.jpg';
import gyeongjuImage from '../img/gyeongju.jpg';
import jeonjuImage from '../img/jeonju.jpg';
import incheonImage from '../img/incheon.jpg';
import yeosuImage from '../img/yeosu.jpg';
import chuncheonImage from '../img/chuncheon.jpg';



function TravelRecommendations(){
    const [posts, setPosts] = useState([
        { 
            id: 1, 
            title: '서울', 
            content: '서울에는 많은 관광 명소와 맛집이 있습니다.',
            image: seoulImage,
            region: '서울',
            rank: 1
        },
        { 
            id: 2, 
            title: '부산', 
            content: '부산은 바다가 아름다운 도시로 유명합니다.',
            image: busanImage,
            region: '부산',
            rank: 2
        },
        { 
            id: 3, 
            title: '제주도', 
            content: '제주도에는 멋진 자연 경관과 맛있는 음식이 있습니다.',
            image: jejuImage,
            region: '제주도',
            rank: 3
        },
        { 
            id: 4, 
            title: '강릉', 
            content: '강릉은 바다와 산이 어우러진 아름다운 곳입니다.',
            image: gangneungImage,
            region: '강릉',
            rank: 4
        },
        { 
            id: 5, 
            title: '경주', 
            content: '경주는 한국의 역사와 문화가 곳곳에 녹아 있는 곳입니다.',
            image: gyeongjuImage,
            region: '경주',
            rank: 5
        },
        { 
            id: 6, 
            title: '전주', 
            content: '전주에 위치한 한옥마을은 전통적인 한국 문화를 경험할 수 있는 곳으로 유명합니다.',
            image: jeonjuImage,
            region: '전주',
            rank: 6
        },
        { 
            id: 7, 
            title: '인천', 
            content: '인천은 현대적인 도시 풍경과 역사적인 유적지를 함께 감상할 수 있는 매력적인 여행지입니다.',
            image: incheonImage,
            region: '인천',
            rank: 7
        },
        { 
            id: 8, 
            title: '여수', 
            content: '여수는 한국의 남해안에 위치한 아름다운 도시로, 특히 "바다의 도시"로 불립니다. ',
            image: yeosuImage,
            region: '여수',
            rank: 8
        },
        { 
            id: 9, 
            title: '춘천', 
            content: '춘천은 한국의 강원도에 위치한 아름다운 도시로, 자연 경관과 맛있는 음식, 문화적인 명소로 유명합니다. ',
            image: chuncheonImage,
            region: '춘천',
            rank: 9
        },
        { 
            id: 10, 
            title: '대구', 
            content: '대구는 한국의 대표적인 도시 중 하나로, 역사와 문화, 먹거리가 풍부한 도시입니다. ',
            image: gyeongjuImage,
            region: '대구',
            rank: 10
        }
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.rank.toString().includes(searchTerm)
    );

    return (
        <div>
            <h1>여행 추천 순위</h1>

            <input 
                type="text" 
                placeholder="제목, 지역, 순위를 입력하세요" 
                value={searchTerm} 
                onChange={handleSearchTermChange} 
            />
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.content}</p>
                        <p>지역: {post.region}</p>
                        <p>순위: {post.rank}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TravelRecommendations;