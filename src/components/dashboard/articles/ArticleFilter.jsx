// src/components/dashboard/articles/ArticleFilter.jsx
export default function ArticleFilter() {
    return (
        <div className="filter-bar">
            <div className="filter-search">
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="11"
                        cy="11"
                        r="8"
                    />
                    <line
                        x1="21"
                        y1="21"
                        x2="16.65"
                        y2="16.65"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="記事を検索…"
                />
            </div>
            <button className="filter-chip active">
                すべて
            </button>
            <button className="filter-chip">
                生成済み
            </button>
            <button className="filter-chip">
                編集済み
            </button>
            <button className="filter-chip">
                公開済み
            </button>
            <select className="filter-select">
                <option>
                    新しい順
                </option>
                <option>
                    古い順
                </option>
                <option>
                    インプレッション順
                </option>
            </select>
        </div>
    );
}