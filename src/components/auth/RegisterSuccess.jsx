import Alert from "../common/Alert";
import Button from "../common/Button";
import Brand from "./Brand";
export default function RegisterSuccess({
    email,
    alert,
    countdown,
    loading,
    resend
}) {
    return (
        <div className="page">
            <div className="auth-card">
                <div className="auth-card-inner">
                    <Brand
                        showTag={true}
                        title="メールを"
                        titleGradient="ご確認ください"
                    />
                    <div className="register-success">
                        <Alert
                            type={alert.type}
                            message={alert.message}
                        />
                        <div
                            style={{
                                marginTop: "24px",
                                marginBottom: "24px",
                                textAlign: "center",
                                color: "#475569",
                                lineHeight: "1.6"
                            }}
                        >
                            アクティベーションメールを
                            <strong
                                style={{ color: "#000" }}
                            >
                                {email}
                            </strong><br></br>
                            に送信しました。
                            <br />
                            <br />
                            メール内のリンクをクリックして、
                            <br />
                            手続きを続けてください。
                        </div>
                        <Button
                            loading={loading}
                            disabled={countdown > 0}
                            onClick={resend}
                        >
                            {countdown > 0
                                ? `認証メールを再送する (${countdown})`
                                : "認証メールを再送する"
                            }
                        </Button>
                        <div className="switch-line">
                            メールが届いていませんか？
                            <br />
                            迷惑メールフォルダもご確認ください。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}