import { Link } from "react-router-dom";
import { useState } from "react";
import Alert from "../common/Alert";
import Brand from "./Brand";
import SwitchLine from "./SwitchLine.jsx";
export default function LoginForm({
    form,
    alert,
    loading,
    handleChange,
    handleSubmit,
    handleKeyDown
}) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="page">
            <div className="auth-card">
                <div className="auth-card-inner">
                    <Brand
                        title="AI SEO"
                        titleGradient="Writer"
                        subtitle="アカウントにサインイン"
                    />
                    <Alert
                        type={alert.type}
                        message={alert.message}
                    />
                    {/* Email */}
                    <div className="form-group">
                        <label
                            className="form-label"
                            htmlFor="login-email"
                        >
                            メール
                        </label>
                        <input
                            className="form-input"
                            id="login-email"
                            type="email"
                            value={form.email}
                            placeholder="you@example.com"
                            autoComplete="email"
                            onChange={e =>
                                handleChange(
                                    "email",
                                    e.target.value
                                )
                            }
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    {/* Password */}
                    <div className="form-group">
                        <label
                            className="form-label"
                            htmlFor="login-pw"
                        >
                            パスワード
                        </label>
                        <div className="pw-wrap">
                            <input
                                className="form-input"
                                id="login-pw"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                placeholder="••••••••"
                                autoComplete="current-password"
                                onChange={e =>
                                    handleChange(
                                        "password",
                                        e.target.value
                                    )
                                }
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                className="pw-toggle"
                                type="button"
                                aria-label="パスワードを表示"
                                onClick={() =>
                                    setShowPassword(
                                        prev => !prev
                                    )
                                }
                            >
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Forgot password */}
                    <div className="forgot-row">
                        <Link to="/forgot-password">
                            パスワードをお忘れですか？
                        </Link>
                    </div>
                    {/* Login */}
                    <button
                        className="btn-submit"
                        type="button"
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        {loading
                            ? "サインイン中..."
                            : "サインイン"
                        }
                    </button>
                    {/* Register */}
                    <SwitchLine text="アカウントをお持ちでないですか？" textLink="サインアップ" to="/register" />
                </div>
            </div>
        </div>
    );
}