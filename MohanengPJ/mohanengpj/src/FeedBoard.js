import React, { useState } from 'react';

function FeedBoard() {
    const [posts, setPosts] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newImages, setNewImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleAddPost = () => {
        if (newTitle.trim() !== '' && newContent.trim() !== '') {
            if (newImages.length > 0) {
                const newPost = {
                    id: posts.length + 1,
                    title: newTitle,
                    content: newContent,
                    images: newImages
                };
                setPosts([...posts, newPost]);
                setNewImages([]);
                setImagePreviews([]);
            } else {
                alert('이미지를 선택해주세요.');
            }
            setNewTitle('');
            setNewContent('');
        } else {
            alert('제목과 내용을 입력해주세요.');
        }
    };

    const handleDeletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        const newImagesArray = Array.from(files).map(file => URL.createObjectURL(file));
        setNewImages(prevImages => [...prevImages, ...newImagesArray]);
        setImagePreviews(prevPreviews => [...prevPreviews, ...Array.from(files).map(file => file.name)]);
    };

    return (
        <div className="container">
            <h1>여행 기록</h1>
            
            <div className="input-container">
                <label className="file-input-label">
                    이미지 선택
                    <input 
                        type="file" 
                        className="file-input" 
                        onChange={handleFileInputChange} 
                        multiple  // 여러 파일 선택 가능하도록 수정
                    />
                </label>
                {/* 이미지 선택 시 파일 이름 표시 */}
                {imagePreviews && imagePreviews.map((preview, index) => (
                    <p key={index}>선택된 이미지: {preview}</p>
                ))}
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
                        {post.images.map((image, index) => (
                            <img key={index} src={image} alt={post.title} />
                        ))}
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
