

import React, { useState } from 'react';
function FeedBoard(){
    const [posts, setPosts] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newImage, setNewImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(''); // 추가된 부분

    const handleAddPost = () => {
        if (newTitle.trim() !== '' && newContent.trim() !== '') {
            if (newImage) {
                const newPost = {
                    id: posts.length + 1,
                    title: newTitle,
                    content: newContent,
                    image: newImage // 사용자가 선택한 이미지 경로
                };
                setPosts([...posts, newPost]);
            } else {
                alert('이미지를 선택해주세요.'); // 이미지가 선택되지 않은 경우 알림
            }
            setNewTitle('');
            setNewContent('');
            setNewImage(null);
            setImagePreview('');
        } else {
            alert('제목과 내용을 입력해주세요.');
        }
    };

    const handleDeletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setNewImage(URL.createObjectURL(file));
        setImagePreview(file.name); // 이미지 선택 시 파일 이름 표시
    };

    return (
        <div className="container">
            <h1>여행 추천</h1>
            
            <div className="input-container">
                <label className="file-input-label">
                    이미지 선택
                    <input 
                        type="file" 
                        className="file-input" 
                        onChange={handleFileInputChange} 
                    />
                </label>
                {/* 이미지 선택 시 파일 이름 표시 */}
                {imagePreview && <p>선택된 이미지: {imagePreview}</p>}
            </div>
            <input 
                type="text" 
                placeholder="제목" 
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)} 
            />
            <textarea 
                placeholder="내용" 
                value={newContent} 
                onChange={(e) => setNewContent(e.target.value)} 
            ></textarea>
            <input 
                type="submit" 
                value="게시글 작성" 
                onClick={handleAddPost} 
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.content}</p>
                        <div className="btn-container">
                            <button className="btn btn-danger" onClick={() => handleDeletePost(post.id)}>삭제</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeedBoard;
