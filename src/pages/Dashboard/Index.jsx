import { useNavigate } from "react-router-dom";
import ArticleFilter from "../../components/dashboard/articles/ArticleFilter";
import ArticleList from "../../components/dashboard/articles/ArticleList";
export default function DashboardPage() {
    const navigate = useNavigate();
    return (
        <section className="screen active">
            <div
                className="page-head"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <div>
                    <h1 className="page-title">
                        <svg viewBox="0 0 24 24">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                        ダッシュボード
                    </h1>
                    <div className="page-desc">
                        AI生成SEO記事を管理
                    </div>
                    <div
                        style={{
                            marginTop: "2px",
                            fontSize: "13px",
                            color: "var(--text-mute)",
                        }}
                    >
                        おかえりなさい、
                        <strong
                            style={{
                                color: "var(--text)",
                                fontWeight: 600,
                            }}
                        >
                            Tanaka
                        </strong>
                    </div>
                </div>
                <button
                    className="btn btn-primary"
                    style={{
                        padding: "14px 24px",
                        fontSize: "18px",
                        borderRadius: "12px",
                        fontWeight: 700,
                        gap: "6px",
                    }}
                    onClick={() => navigate("/create")}
                >
                    <svg viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    新規作成
                </button>
            </div>
            <ArticleList />
        </section>
    );
}