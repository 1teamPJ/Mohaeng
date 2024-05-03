import React, {useState} from 'react';
import seoulImage from './images/seoul.jpg';
import busanImage from './images/busan.jpg';
import jejuImage from './images/jeju.jpg';
import gangneungImage from './images/gangneung.jpg';
import gyeongjuImage from './images/gyeongju.jpg';


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
            <h1>여행 추천</h1>
            
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

export default  TravelRecommendations;