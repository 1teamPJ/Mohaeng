import React, { useState } from 'react';
import CBfooter from './CBfooter';


function CBlist() {
    //여행 테마
    const [themes, setThemes] = useState([
        {id: 1, name: '맛집탐방', checked: false}, 
        {id: 2, name: '지역 관광', checked: false},
        {id: 3, name: '엑티비티', checked: false}, 
        {id: 4, name: '힐링', checked: false}]);
    const [newTheme, setNewTheme] = useState('');
    const toggleThemeChecked = (id) => {
        const updatedThemes = themes.map(theme =>
            theme.id === id ? { ...theme, checked: !theme.checked } : theme
        );
        setThemes(updatedThemes);
    };
    //누구랑
    const [Partners, setPartners] = useState([
        {id:1, name: 'Friend', checked: false},
        {id:2, name: 'Family', checked: false},
        {id:3, name: 'Lover', checked: false},
        {id:4, name: 'Alone', checked: false}]);
    const [newPartner, setNewPartner] = useState('');
    const togglePartnersChecked = (id) => {
        const updatedPartners = Partners.map(partner =>
            partner.id === id ? { ...partner, checked: !partner.checked } : partner
        );
        setPartners(updatedPartners);
    };
    //여행 스타일
    const [TripStyles, setTripStyles] = useState([
        {id:1, name: '계획적'},
        {id:2, name: '즉흥적'},
        {id:3, name: '낭만파'},
        {id:4, name: '실속파'},]);
    const [newTripStyle, setNewTripStyle] = useState('');
    const toggleTripStylesChecked = (id) => {
        const updatedTripStyles = TripStyles.map(style =>
            style.id === id ? { ...style, checked: !style.checked } : style
        );
        setTripStyles(updatedTripStyles);
    };



    //   여행 기간
    const [Duration, setDuration] = useState([
        {id:1, name: '1박2일'},
        {id:2, name: '당일치기'},
        {id:3, name: '1달 살기'},
        {id:4, name: '무박 3일'}]);
    const [newDuration, setNewDuration] = useState('');
    const toggleDurationsChecked = (id) => {
        const updatedDurations = Duration.map(duration =>
            duration.id === id ? { ...duration, checked: !duration.checked } : duration
        );
        setDuration(updatedDurations);
    };


    //  여행 준비물
    const [TripItem, setTripItem] = useState([
        {id:1, name: '여권'},
        {id:2, name: '양말'},
        {id:3, name: '에어팟'},
        {id:4, name: '카메라'},]);
    const [newTripItem, setNewTripItem] = useState('');
    const toggleTripItemsChecked = (id) => {
        const updatedTripItems = TripItem.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setTripItem(updatedTripItems);
    };



    // 여행테마
    const deleteTheme = (id) => {
        const updatedThemes = themes.filter(theme => theme.id !== id);
        setThemes(updatedThemes);
    };
    const addTheme = () => {
        const newId = themes.length > 0 ? Math.max(...themes.map(theme => theme.id)) + 1 : 1; // 새로운 ID 생성
        const newThemeObj = { id: newId, name: newTheme, checked: false };
        setThemes([...themes, newThemeObj]);
        setNewTheme(''); // 입력 필드 초기화
    };


    // 누구랑 여행 체크
    const deletePartner = (id) => {
        const updatedPartners = Partners.filter(partner => partner.id !== id);
        setPartners(updatedPartners);
    };
    const addPartner = () => {
        const newId = Partners.length > 0 ? Math.max(...Partners.map(partner => partner.id)) + 1 : 1;
        const newPartnerObj = { id: newId, name: newPartner, checked: false };
        setPartners([...Partners, newPartnerObj]);
        setNewPartner('');
    };


    // 여행 스타일
    const deleteTripStyle = (id) => {
        const updatedTripStyles = TripStyles.filter(tripStyle => tripStyle.id !== id);
        setTripStyles(updatedTripStyles);
    };
    const addTripStyle = () => {
        const newId = TripStyles.length > 0 ? Math.max(...TripStyles.map(tripStyle => tripStyle.id)) + 1 : 1;
        const newTripStyleObj = { id: newId, name: newTripStyle, checked: false };
        setTripStyles([...TripStyles, newTripStyleObj]);
        setNewTripStyle('');
    };


    //여행 기간
    const deleteDuration = (id) => {
        const updatedDurations = Duration.filter(duration => duration.id !== id);
        setDuration(updatedDurations);
    };
    const addDuration = () => {
        const newId = Duration.length > 0 ? Math.max(...Duration.map(duration => duration.id)) + 1 : 1;
        const newDurationObj = { id: newId, name: newDuration, checked: false };
        setDuration([...Duration, newDurationObj]);
        setNewDuration('');
    };

    //여행 준비물
    const deleteTripItem = (id) => {
        const updatedTripItems = TripItem.filter(tripItem => tripItem.id !== id);
        setTripItem(updatedTripItems);
    };
    const addTripItem = () => {
        const newId = TripItem.length > 0 ? Math.max(...TripItem.map(tripItem => tripItem.id)) + 1 : 1;
        const newTripItemObj = { id: newId, name: newTripItem, checked: false };
        setTripItem([...TripItem, newTripItemObj]);
        setNewTripItem('');
    };

      const selectedThemes = themes.filter(theme => theme.checked);
      const selectedPartners = Partners.filter(partner => partner.checked);
      const selectedTripStyles = TripStyles.filter(style => style.checked);
      const selectedDurations = Duration.filter(duration => duration.checked);
      const selectedTripItems = TripItem.filter(item => item.checked);
  

    
    
    
    
    return (
        <>  
            <div className='CBlist'>     
                {/* 여행 테마? */}
                <div>
                <h2> 1.당신이 선호하는 여행 테마는 무엇입니까?</h2>
                </div>
                <ul>
                    {themes.map((theme) => (
                    <li key={theme.id}>
                        <input 
                            type="checkbox"
                            checked={theme.checked}
                            onChange={() => toggleThemeChecked(theme.id)}
                            /> 
                        <span> {theme.name} </span>
                        <button onClick={() => deleteTheme(theme.id)}> 삭제</button>
                    </li>
                    ))}
                </ul>
                <input type="text" value={newTheme} onChange={(e) => setNewTheme(e.target.value)} placeholder="새 여행 테마 입력" />
                <button onClick={addTheme}>추가</button>

                
                    {/* 여행 누구랑 */}
                <div>
                <h2>2. 이번 여행, 당신은 누구랑 함꼐하고 싶으세요?</h2>
                </div>
                <ul>
                    {Partners.map(Partner => (
                    <li key={Partner.id}>
                        <input
                             type="checkbox" 
                             checked={Partner.checked}
                             onChange={() => togglePartnersChecked(Partner.id)} />
                        <span>{Partner.name}</span>
                        <button onClick={() => deletePartner(Partner.id)}>삭제</button>
                    </li>
                     ))}
                </ul>
                <input type="text" value={newPartner} onChange={(e) => setNewPartner(e.target.value)} placeholder="새 여행 파트너 입력" />
                <button onClick={addPartner}>추가</button>

                {/* 여행 스타일 */}
                <div>
                <h2>3.당신의 여행 스타일은?</h2>
                </div>
                <ul>
                    {TripStyles.map(TripStyles => (
                    <li key={TripStyles.id}>
                        <input 
                            type="checkbox" 
                            checked={TripStyles.checked}
                            onChange={() => toggleTripStylesChecked(TripStyles.id)}/>
                        <span>{TripStyles.name}</span>
                        <button onClick={() => deleteTripStyle(TripStyles.id)}>삭제</button>
                    </li>
                     ))}
                </ul>
                <input type="text" value={newTripStyle} onChange={(e) => setNewTripStyle(e.target.value)} placeholder="너의 여행 스타일 입력" />
                <button onClick={addTripStyle}>추가</button>

                {/* 여행 기간 */}
                <div>
                <h2>4. 당신이 선호하는 여행 기간은? </h2>
                </div>
                <ul>
                    {Duration.map(Duration => (
                    <li key={Duration.id}>
                        <input 
                            type="checkbox"
                            checked={Duration.checked}
                            onChange={() => toggleDurationsChecked(Duration.id)}/>
                        <span>{Duration.name}</span>
                        <button onClick={() => deleteDuration(Duration.id)}>삭제</button>
                    </li>
                     ))}
                </ul>
                <input type="text" value={newDuration} onChange={(e) => setNewDuration(e.target.value)} placeholder="준비물 챙겨!!" />
                <button onClick={addDuration}>추가</button>

                {/* 여행 준비물 */}
                <div>
                <h2>5.여행 갈 때 꼭 챙겨가야 하는 아이템은?! </h2>
                </div>
                <ul>
                    {TripItem.map(TripItem => (
                    <li key={TripItem.id}>
                        <input 
                            type="checkbox"
                            checked={TripItem.checked}
                            onChange={() => toggleTripItemsChecked(TripItem.id)}/>
                        <span>{TripItem.name}</span>
                        <button onClick={() => deleteTripItem(TripItem.id)}>삭제</button>
                    </li>
                     ))}
                </ul>
                <input type="text" value={newTripItem} onChange={(e) => setNewTripItem(e.target.value)} placeholder="준비물 챙겨!!" />
                <button onClick={addTripItem}>추가</button>


            </div>

           
                <CBfooter 
                selectedThemes={selectedThemes}
                selectedPartners={selectedPartners}
                selectedTripStyles={selectedTripStyles}
                selectedDurations={selectedDurations}
                selectedTripItems={selectedTripItems}
                />
            
        </>
    );
}
export default CBlist;
