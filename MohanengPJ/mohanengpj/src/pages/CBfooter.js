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
            
            <h3>당신의 최종 취향</h3>
            <ol>
                {selectedThemes.map(theme => (
                    <li key={theme.id}>{theme.name}</li>
                ))}
            </ol>

            <h3> 당신의 워하는 파트너</h3>
            <ol>
                {selectedPartners.map(partner => (
                    <li key={partner.id}>{partner.name}</li>
                ))}
            </ol>

            <h3>선택된 여행 스타일 </h3>
            <ol>
                {selectedTripStyles.map(style => (
                    <li key={style.id}>{style.name}</li>
                ))}
            </ol>

            <h3>당신의 원하는 여행 기간 </h3>
            <ol>
                {selectedDurations.map(duration => (
                    <li key={duration.id}>{duration.name}</li>
                ))}
            </ol>

            <h3>당신 취향 준비물</h3>
            <ol>
                {selectedTripItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ol>

            {/* <button> <NavLink to="/testpage" className="noneunderline">추천목록 보러가기</NavLink> </button> */}
        </div>
    );
}

export default CBFooter;
