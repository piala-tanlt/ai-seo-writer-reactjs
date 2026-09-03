import { Link } from "react-router-dom";
import BackLink from "./BackLink";
import Brand from "./Brand";
import SwitchLine from "./SwitchLine.jsx";
export default function ForgotPasswordForm({
    form,
    loading,
    alert,
    success,
    handleChange,
    handleSubmit
}) {
    if (success) {
        return (
            <div className="page">
                <div className="auth-card">
                    <div className="auth-card-inner">
                        <div
                            className="success-state show"
                            id="forgot-success"
                        >
                            <div className="check-circle">
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#34D399"
                                    strokeWidth="2.5"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <div
                                style={{
                                    fontSize: "17px",
                                    fontWeight: 700,
                                    color: "var(--text)",
                                    marginBottom: "8px"
                                }}
                            >
                                受信トレイをご確認ください。
                            </div>
                            <div
                                style={{
                                    fontSize: "13px",
                                    color: "var(--muted)",
                                    lineHeight: 1.6,
                                    marginBottom: "24px"
                                }}
                            >
                                新しいパスワードを
                                <strong
                                    id="sent-email"
                                    style={{
                                        color: "var(--text)"
                                    }}
                                >
                                    {form.email}
                                </strong>
                                に
                                <br />
                                送信しました。受信トレイをご確認のうえ、
                                <br />
                                <strong>ログイン後にパスワードを変更してください。</strong>
                            </div>
                            <Link
                                to="/login"
                                className="btn-submit"
                                style={{
                                    display: "block",
                                    textDecoration: "none"
                                }}
                            >
                                ログイン画面に戻る
                            </Link>
                            <SwitchLine text="届いていませんか？" textLink="メールを再送信" to="/forgot-password" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="page">
            <div className="auth-card">
                <div className="auth-card-inner">
                    <BackLink />
                    <Brand
                        showTag={true}
                        variant="forgot"
                        showSpark={false}
                        title="パスワードを"
                        titleGradient="再設定"
                        subtitle="リセットリンクをお送りします"
                    />
                    {
                        alert?.message &&
                        (
                            <div className="msg fail">
                                {alert.message}
                            </div>
                        )
                    }
                    <div className="form-group">
                        <label className="form-label">
                            メールアドレス
                        </label>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={(e)=>
                                handleChange(
                                    "email",
                                    e.target.value
                                )
                            }
                            placeholder="you@example.com"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn-submit"
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        {
                            loading
                                ?
                                "送信中..."
                                :
                                "リセットリンクを送信"
                        }
                    </button>
                    <SwitchLine text="パスワードを思い出しましたか？" />
                </div>
            </div>
        </div>
    );
}