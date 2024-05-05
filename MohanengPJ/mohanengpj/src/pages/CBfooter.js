// import { NavLink } from 'react-router-dom';

function CBFooter({
    selectedThemes = [],
    selectedPartners = [],
    selectedTripStyles = [],
    selectedDurations = [],
    selectedTripItems = []
}) {
    return (
        <div className="cbfooter">
            <h1> 당신의 취향입니다</h1>

            <h3 className="font">당신의 최향저격 여행 style </h3>
            <ul>
                {selectedThemes.map(theme => (
                    <li key={theme.id}>{theme.name}</li>
                ))}
            </ul>

            <h3> 이번 여행, 당신은 누구랑 함꼐하고 싶으세요?</h3>
            <ul>
                {selectedPartners.map(partner => (
                    <li key={partner.id}>{partner.name}</li>
                ))}
            </ul>

            <h3>선택된 여행 스타일 </h3>
            <ul>
                {selectedTripStyles.map(style => (
                    <li key={style.id}>{style.name}</li>
                ))}
            </ul>

            <h3>당신의 원하는 여행 기간 </h3>
            <ul>
                {selectedDurations.map(duration => (
                    <li key={duration.id}>{duration.name}</li>
                ))}
            </ul>

            <h3>당신의 준비물</h3>
            <ul>
                {selectedTripItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            {/* <button> <NavLink to="/testpage" className="noneunderline">추천목록 보러가기</NavLink> </button> */}
        </div>
    );
}

export default CBFooter;
