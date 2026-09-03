// src/components/dashboard/articles/ArticleCard.jsx
import { useNavigate } from "react-router-dom";
export default function ArticleCard({ article }) {
    const navigate = useNavigate();
    const openEditor = () => {
        navigate(`/editor?article=${article.id}`);
    };
    const openCopyEditor = () => {
        navigate(`/editor?article=${article.id}&copy=true`);
    };
    const openPushModal = (type) => {
        console.log("openPushModal:", type, article.id);
    };
    return (
        <div
            className="card"
            style={{
                padding: "18px 20px",
                ...(article.highlight
                    ? {
                          borderLeft:
                              "3px solid var(--accent)",
                      }
                    : {}),
            }}
        >
            <div
                className="job-row-head"
                style={
                    article.stats
                        ? {
                              marginBottom: "14px",
                          }
                        : undefined
                }
            >
                <div>
                    <div className="job-name">
                        {article.title}
                        {article.version && (
                            <span
                                style={{
                                    color: "var(--text-mute)",
                                    fontWeight: 400,
                                }}
                            >
                                {" "}
                                ({article.version})
                            </span>
                        )}
                    </div>
                    <div className="job-date">
                        {article.date}
                    </div>
                    <div className="id-row">
                        {/* ARTICLE ID */}
                        <span className="id-chip article">
                            <svg viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                            {article.id}
                        </span>
                        {/* COPY OF */}
                        {article.copyOf && (
                            <span
                                className="id-chip"
                                style={{
                                    color: "var(--accent)",
                                    borderColor:
                                        "var(--accent-dim)",
                                    background:
                                        "var(--accent-soft)",
                                }}
                            >
                                <svg viewBox="0 0 24 24">
                                    <polyline points="9 17 4 12 9 7" />
                                    <path d="M20 18v-2a4 4 0 00-4-4H4" />
                                </svg>
                                {article.copyOf}
                            </span>
                        )}
                        {/* JOB ID */}
                        <span className="id-chip">
                            <svg viewBox="0 0 24 24">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {article.jobId}
                        </span>
                        {/* JOB TYPE */}
                        <span
                            className={`jobtype-tag ${article.jobTypeClass}`}
                        >
                            {article.jobTypeIcon}
                            {article.jobType}
                        </span>
                        {/* WORDPRESS */}
                        <span className="id-chip">
                            {article.wordpressIcon && (
                                article.wordpressIcon
                            )}
                            {article.wordpress}
                        </span>
                    </div>
                </div>
                {/* RIGHT ACTIONS */}
                <div
                    style={{
                        display: "flex",
                        gap: "7px",
                        alignItems: "center",
                        flexShrink: 0,
                    }}
                >
                    {/* STATUS */}
                    <span
                        className={`badge ${article.badgeClass}`}
                    >
                        {article.badgeIcon}
                        {article.badge}
                    </span>
                    {/* EDIT */}
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={
                            article.copyOf
                                ? openCopyEditor
                                : openEditor
                        }
                    >
                        <svg viewBox="0 0 24 24">
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4z" />
                        </svg>
                        編集
                    </button>
                    {/* DRAFT UPDATE */}
                    {article.action === "draft" && (
                        <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                                openPushModal("draft")
                            }
                        >
                            <svg viewBox="0 0 24 24">
                                <line
                                    x1="12"
                                    y1="19"
                                    x2="12"
                                    y2="5"
                                />
                                <polyline points="5 12 12 5 19 12" />
                            </svg>
                            下書き更新
                        </button>
                    )}
                    {/* DOWNLOAD */}
                    {article.action === "download" && (
                        <>
                            <button
                                className="btn btn-secondary btn-sm"
                            >
                                <svg viewBox="0 0 24 24">
                                    <line
                                        x1="12"
                                        y1="5"
                                        x2="12"
                                        y2="19"
                                    />
                                    <polyline points="19 12 12 19 5 12" />
                                </svg>
                                ダウンロード
                            </button>
                            {/* PUBLISH */}
                            <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                    openPushModal("first")
                                }
                            >
                                <svg viewBox="0 0 24 24">
                                    <line
                                        x1="12"
                                        y1="19"
                                        x2="12"
                                        y2="5"
                                    />
                                    <polyline points="5 12 12 5 19 12" />
                                </svg>
                                公開
                            </button>
                        </>
                    )}
                </div>
            </div>
            {/* GSC STATS */}
            {article.stats && (
                <div className="stat-grid">
                    <div className="stat-card">
                        <div
                            className="num"
                            style={{
                                color: "var(--accent)",
                                fontSize: "27px",
                            }}
                        >
                            {article.stats.views}
                        </div>
                        <div className="lab">
                            表示回数
                        </div>
                    </div>
                    <div className="stat-card">
                        <div
                            className="num"
                            style={{
                                color: "var(--accent)",
                                fontSize: "27px",
                            }}
                        >
                            {article.stats.clicks}
                        </div>
                        <div className="lab">
                            クリック数
                        </div>
                    </div>
                    <div className="stat-card">
                        <div
                            className="num"
                            style={{
                                color: "var(--green)",
                                fontSize: "27px",
                            }}
                        >
                            {article.stats.ctr}
                        </div>
                        <div className="lab">
                            CTR
                        </div>
                    </div>
                    <div className="stat-card">
                        <div
                            className="num"
                            style={{
                                color: "var(--amber)",
                                fontSize: "27px",
                            }}
                        >
                            {article.stats.rank}
                        </div>
                        <div className="lab">
                            平均掲載順位
                        </div>
                    </div>
                </div>
            )}
            {/* HINT */}
            {article.hint && (
                <div
                    className="form-hint"
                    style={{
                        marginTop: "11px",
                    }}
                >
                    <svg viewBox="0 0 24 24">
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                        />
                        <line
                            x1="12"
                            y1="16"
                            x2="12"
                            y2="12"
                        />
                        <line
                            x1="12"
                            y1="8"
                            x2="12.01"
                            y2="8"
                        />
                    </svg>
                    {article.hint}
                </div>
            )}
        </div>
    );
}