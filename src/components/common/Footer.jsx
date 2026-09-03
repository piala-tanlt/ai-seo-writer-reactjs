export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <div className="footer-mark">
                        <svg viewBox="0 0 24 24">
                            <path d="M6 21l13-13" />
                            <path d="M15 6l3 3" />
                            <path
                                d="M9 3l.5 1.5L11 5l-1.5.5L9 7l-.5-1.5L7 5z"
                                fill="#fff"
                                stroke="none"
                            />
                        </svg>
                    </div>
                    <div>
                        <div className="footer-brand-name">
                            AI SEO <strong>Writer</strong>
                        </div>
                        <div className="footer-copy">
                            © 2026 AI SEO Writer. All rights reserved.
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <a href="#privacy">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        プライバシーポリシー
                    </a>
                    <a href="#terms">
                        <svg viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                        利用規約
                    </a>
                    <a href="#contact">
                        <svg viewBox="0 0 24 24">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        お問い合わせ
                    </a>
                </div>
            </div>
        </footer>
    );
}