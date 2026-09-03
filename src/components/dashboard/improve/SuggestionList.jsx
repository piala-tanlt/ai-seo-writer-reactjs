export default function SuggestionList({
    suggestions
}){
    return (
        <div className="suggestion-box">
            <h3>
                AI改善提案
            </h3>
            <ul>
                {
                    suggestions.map(
                        (item,index)=>(
                            <li
                                key={index}
                            >
                                <span>
                                    ✦
                                </span>
                                {item}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}