import { useState } from "react";
export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => {
        setNavOpen((prev) => !prev);
        // Nếu Sidebar dùng class/body state,
        // có thể xử lý thêm ở đây.
        document.body.classList.toggle("nav-open");
    };
    return (
        <header className="topbar">
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <button
                    className={`hamburger ${navOpen ? "active" : ""}`}
                    id="hamburger"
                    onClick={toggleNav}
                    aria-label="メニュー"
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="brand">
                    <div className="brand-mark">
                        <svg viewBox="0 0 24 24">
                            <path d="M6 21l13-13" />
                            <path d="M15 6l3 3" />
                            <path
                                d="M9 3l.5 1.5L11 5l-1.5.5L9 7l-.5-1.5L7 5z"
                                fill="#fff"
                                stroke="none"
                            />
                            <path
                                d="M19 13l.4 1.2L21 15l-1.2.4L19 16.6l-.4-1.2L17.4 15z"
                                fill="#fff"
                                stroke="none"
                            />
                        </svg>
                        <span className="brand-spark s1"></span>
                        <span className="brand-spark s2"></span>
                        <span className="brand-spark s3"></span>
                    </div>
                    <div className="brand-name">
                        AI SEO <strong>Writer</strong>
                    </div>
                </div>
            </div>
            <div className="topbar-right">
                <div className="credit-pill">
                    <svg viewBox="0 0 24 24">
                        <circle
                            cx="12"
                            cy="12"
                            r="8"
                        />
                        <path d="M9.5 9.5c0-1 .9-2 2.5-2s2.5 1 2.5 2c0 1.5-1.5 2-2.5 2.5M12 16h.01" />
                    </svg>
                    <span>クレジット</span>
                    <strong>24</strong>
                </div>
                <button
                    className="btn-logout"
                    type="button"
                    onClick={() => {
                        // TODO:
                        // logout logic
                    }}
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line
                            x1="21"
                            y1="12"
                            x2="9"
                            y2="12"
                        />
                    </svg>
                    ログアウト
                </button>
            </div>
        </header>
    );
}