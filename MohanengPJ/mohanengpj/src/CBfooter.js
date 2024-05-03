
function CBFooter({
    selectedThemes = [],
    selectedPartners = [],
    selectedTripStyles = [],
    selectedDurations = [],
    selectedTripItems = []
}) {
    return (
        <div>
            <h3>선택된 여행 테마:</h3>
            <ul>
                {selectedThemes.map(theme => (
                    <li key={theme.id}>{theme.name}</li>
                ))}
            </ul>

            <h3>선택된 파트너:</h3>
            <ul>
                {selectedPartners.map(partner => (
                    <li key={partner.id}>{partner.name}</li>
                ))}
            </ul>

            <h3>선택된 여행 스타일:</h3>
            <ul>
                {selectedTripStyles.map(style => (
                    <li key={style.id}>{style.name}</li>
                ))}
            </ul>

            <h3>선택된 여행 기간:</h3>
            <ul>
                {selectedDurations.map(duration => (
                    <li key={duration.id}>{duration.name}</li>
                ))}
            </ul>

            <h3>선택된 준비물:</h3>
            <ul>
                {selectedTripItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CBFooter;
