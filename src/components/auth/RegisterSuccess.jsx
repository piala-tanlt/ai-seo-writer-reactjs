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

                <Brand
                    icon="📧"
                    title="メールをご確認ください"
                    subtitle="今すぐ資料をLPに変換"
                    hideSubtitle
                />

                <div className="register-success">

                    <Alert
                        type={alert.type}
                        message={alert.message}
                    />

                    <div
                        style={{
                            marginTop: "24px",
                            textAlign: "center",
                            color: "#9ca3af",
                            lineHeight: "1.6"
                        }}
                    >
                        アクティベーションメールを
                        <strong
                            style={{ color: "#fff" }}
                        >
                            {email}
                        </strong>
                        に送信しました。

                        <br />
                        <br />

                        メール内のリンクをクリックして、手続きを
                        <br />
                        続けてください。
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
    );
}