export default function ScoreCard({
    score
}){
    return (
        <div className="score-card">
            <div className="score-number">
                {score}
            </div>
            <div className="score-label">
                SEO SCORE
            </div>
        </div>
    );
}