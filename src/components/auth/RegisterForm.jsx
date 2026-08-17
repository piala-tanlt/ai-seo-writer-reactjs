import Alert from "../common/Alert";
import Button from "../common/Button";
import Input from "../common/Input";
import Brand from "./Brand";

export default function RegisterForm({
    form = {
        name: "",
        username: "",
        email: ""
    },
    alert = {},
    loading = false,
    handleChange,
    handleSubmit
}) {

    return (
        <div className="page">
            <div className="auth-card">
                <div class="auth-card-inner">
                <button
                    className="back-link"
                    type="button"
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg> サインインに戻る
                </button>

                <Brand
                    title="アカウント"
                    titleGradient="作成"
                    subtitle="今日からAI SEO記事の自動生成を開始"
                />

                <Alert
                    type={alert.type}
                    message={alert.message}
                />

                <Input
                    id="reg-name"
                    label="フルネーム"
                    value={form.name}
                    placeholder="Tanaka Hiroshi"
                    autoComplete="name"
                    onChange={e =>
                        handleChange(
                            "name",
                            e.target.value
                        )
                    }
                />

                <Input
                    id="reg-username"
                    label="ユーザー名"
                    value={form.username}
                    placeholder="tanaka_hiroshi"
                    autoComplete="username"
                    onChange={e =>
                        handleChange(
                            "username",
                            e.target.value
                        )
                    }
                />

                <Input
                    id="reg-email"
                    type="email"
                    label="メール"
                    value={form.email}
                    placeholder="you@example.com"
                    autoComplete="email"
                    onChange={e =>
                        handleChange(
                            "email",
                            e.target.value
                        )
                    }
                />

                <div class="info-box">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <span>登録後、仮パスワードをメールでお送りします。ログイン後にパスワードを変更してください。</span>
      </div>

                <Button
                    loading={loading}
                    onClick={handleSubmit}
                >
                    続行する
                </Button>

                <div className="switch-line">
                    既にアカウントをお持ちですか？
                    {" "}
                    <a href="#">
                        サインイン
                    </a>
                </div>
</div>
            </div>
        </div>
    );
}