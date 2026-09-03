import Alert from "../common/Alert";
import Button from "../common/Button";
import Brand from "./Brand";
import Input from "../common/Input";
export default function SetPasswordForm({
    name,
    form,
    alert,
    loading,
    checkingToken,
    fieldErrors,
    passwordRef,
    confirmPasswordRef,
    handleChange,
    handleSubmit
}) {
    /*
    |--------------------------------------------------------------------------
    | Checking Token
    |--------------------------------------------------------------------------
    */
    if (checkingToken) {
        return (
            <div className="page">
                <div className="auth-card">
                    <div className="auth-card-inner">
                        <Brand
                            icon="⚡"
                            title="パスワードを設定"
                            subtitle="アカウントの設定を確認しています。"
                        />
                        <div className="msg">
                            認証リンクを確認しています...
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
                    <Brand
                        icon="⚡"
                        title={
                            name
                                ? `ようこそ, ${name}`
                                : "パスワードを設定"
                        }
                        subtitle="アカウントの設定を完了してください。"
                    />
                    <Alert
                        type={alert.type}
                        message={alert.message}
                    />
                    {/* Password */}
                    <Input
                        id="set-password"
                        label="パスワード"
                        type="password"
                        placeholder="8文字以上"
                        value={form.password}
                        inputRef={passwordRef}
                        error={fieldErrors.password}
                        onChange={e =>
                            handleChange(
                                "password",
                                e.target.value
                            )
                        }
                    />
                    {/* Confirm Password */}
                    <Input
                        id="confirm-password"
                        label="パスワード（確認）"
                        type="password"
                        placeholder="パスワード（確認）"
                        value={form.confirmPassword}
                        inputRef={confirmPasswordRef}
                        error={
                            fieldErrors.confirmPassword
                        }
                        onChange={e =>
                            handleChange(
                                "confirmPassword",
                                e.target.value
                            )
                        }
                        onKeyDown={e => {
                            if (
                                e.key === "Enter"
                            ) {
                                handleSubmit();
                            }
                        }}
                    />
                    <Button
                        loading={loading}
                        onClick={handleSubmit}
                    >
                        パスワードを設定する
                    </Button>
                </div>
            </div>
        </div>
    );
}