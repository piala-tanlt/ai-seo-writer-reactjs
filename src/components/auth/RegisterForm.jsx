import Alert from "../common/Alert";
import Button from "../common/Button";
import Input from "../common/Input";
import BackLink from "./BackLink";
import Brand from "./Brand";
import SwitchLine from "./SwitchLine.jsx";
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
                <div className="auth-card-inner">
                    <BackLink />
                    <Brand
                        showTag={true}
                        title="アカウント"
                        titleGradient="登録"
                        subtitle="今すぐAI SEO記事を自動生成"
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
                    <Button
                        loading={loading}
                        onClick={handleSubmit}
                    >
                        続行する
                    </Button>
                    <SwitchLine />
                </div>
            </div>
        </div>
    );
}