import ScoreCard from "./ScoreCard";
import SuggestionList from "./SuggestionList";
export default function AnalysisResult({
    result
}){
    if(!result)
        return null;
    return (
        <div className="analysis-result">
            <ScoreCard
                score={result.score}
            />
            <SuggestionList
                suggestions={
                    result.suggestions
                }
            />
        </div>
    );
}