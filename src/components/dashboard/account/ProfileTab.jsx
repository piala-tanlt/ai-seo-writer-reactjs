import { useState } from "react";
export default function ProfileTab({
    user,
    loading
}) {
    const [showPassForm, setShowPassForm] = useState(false);
    return (
        <div className="account-content active">
            <div className="section-title">
                アカウント情報
            </div>
            <div
                className="card card-body"
                style={{
                    opacity: loading ? .6 : 1
                }}
            >
                <div className="info-row">
                    <div className="info-label">
                        ユーザー名
                    </div>
                    <div className="info-value">
                        {user.username}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">
                        メールアドレス
                    </div>
                    <div className="info-value">
                        {user.email}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">
                        登録日
                    </div>
                    <div className="info-value">
                        {user.createdAt}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">
                        ステータス
                    </div>
                    <div
                        className="info-value"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                        }}
                    >
                        <span
                            style={{
                                width: "7px",
                                height: "7px",
                                background: "var(--green)",
                                borderRadius: "50%"
                            }}
                        />
                        <span
                            style={{
                                color: "var(--green-text)",
                                fontWeight: 600
                            }}
                        >
                            有効
                        </span>
                    </div>
                </div>
            </div>

            <div
                className="section-title"
                style={{
                    marginTop: "24px"
                }}
            >
                パスワード
            </div>
            <div className="card card-body">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start"
                    }}
                >
                    <div
                        style={{
                            flex: 1
                        }}
                    >
                        <div
                            className="info-row"
                            style={{
                                paddingTop: 0
                            }}
                        >
                            <div className="info-label">
                                パスワード
                            </div>
                            <div
                                className="info-value"
                                style={{
                                    letterSpacing: ".1em"
                                }}
                            >
                                ••••••••••••
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="info-label">
                                最終変更日
                            </div>
                            <div
                                className="info-value"
                                style={{
                                    color: "var(--text-mute)"
                                }}
                            >
                                {user.passwordChangedAt}
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn btn-outline btn-sm"
                        onClick={
                            () => setShowPassForm(prev => !prev)
                        }
                    >
                        <svg viewBox="0 0 24 24">
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4z" />
                        </svg>
                        変更
                    </button>
                </div>
            </div>

            {
                showPassForm &&
                (
                    <div
                        className="card"
                        style={{
                            marginTop: "12px"
                        }}
                    >
                        <div className="card-body">
                            <div className="form-group">
                                <label className="form-label">
                                    <svg viewBox="0 0 24 24">
                                        <rect x="3" y="11" width="18" height="11" rx="2" />
                                        <path d="M7 11V7a5 5 0 0110 0v4" />
                                    </svg>
                                    現在のパスワード
                                </label>
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder="現在のパスワードを入力"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                    </svg>
                                    新しいパスワード
                                </label>
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder="新しいパスワードを入力"
                                />
                                <div className="form-hint">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="16" x2="12" y2="12" />
                                        <line x1="12" y1="8" x2="12.01" y2="8" />
                                    </svg>
                                    {" "}8文字以上、大文字と数字を含めてください
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                    </svg>
                                    新しいパスワード（確認）
                                </label>
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder="新しいパスワードを再入力"
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "8px",
                                    justifyContent: "flex-end"
                                }}
                            >
                                <button
                                    className="btn btn-ghost btn-sm"
                                    onClick={
                                        () => setShowPassForm(false)
                                    }
                                >
                                    キャンセル
                                </button>
                                <button className="btn btn-primary btn-sm">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z" />
                                        <polyline points="17 21 17 13 7 13 7 21" />
                                        <polyline points="7 3 7 8 15 8" />
                                    </svg>
                                    パスワードを更新
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
