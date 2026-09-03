export default function ArticleStats({
    stats
}){
    return (
        <div className="stat-grid">
            <div className="stat-card">
                <div className="num">
                    {stats.views}
                </div>
                <div className="lab">
                    表示回数
                </div>
            </div>
            <div className="stat-card">
                <div className="num">
                    {stats.clicks}
                </div>
                <div className="lab">
                    クリック数
                </div>
            </div>
            <div className="stat-card">
                <div className="num">
                    {stats.ctr}
                </div>
                <div className="lab">
                    CTR
                </div>
            </div>
            <div className="stat-card">
                <div className="num">
                    {stats.rank}
                </div>
                <div className="lab">
                    平均掲載順位
                </div>
            </div>
        </div>
    );
}