import api from "./axios";
/*
|--------------------------------------------------------------------------
| Register
|--------------------------------------------------------------------------
*/
export async function register(user) {
    try {
        const { data } = await api.post(
            "/register",
            user
        );
        return data;
    } catch (err) {
        if (err.response?.data) {
            return err.response.data;
        }
        return {
            ok: false,
            error: "ネットワークエラーが発生しました"
        };
    }
}
/*
|--------------------------------------------------------------------------
| Resend Activation Email
|--------------------------------------------------------------------------
*/
export async function resendActivationEmail(email) {
    try {
        const { data } = await api.post(
            "/resend-activation",
            {
                email
            }
        );
        return data;
    } catch (err) {
        if (err.response?.data) {
            return err.response.data;
        }
        return {
            ok: false,
            error: "ネットワークエラーが発生しました"
        };
    }
}
/*
|--------------------------------------------------------------------------
| Check Activation Token
|--------------------------------------------------------------------------
*/
export async function checkToken(token) {
    try {
        const { data } = await api.get(
            "/check-token",
            {
                params: {
                    token
                }
            }
        );
        return data;
    } catch (err) {
        if (err.response?.data) {
            return err.response.data;
        }
        return {
            ok: false,
            error: "ネットワークエラーが発生しました"
        };
    }
}
/*
|--------------------------------------------------------------------------
| Set Password
|--------------------------------------------------------------------------
*/
export async function setPassword({
    token,
    password,
    confirmPassword
}) {
    try {
        const { data } = await api.post(
            "/set-password",
            {
                token,
                password,
                confirm_password: confirmPassword
            }
        );
        return data;
    } catch (err) {
        if (err.response?.data) {
            return err.response.data;
        }
        return {
            ok: false,
            error: "ネットワークエラーが発生しました"
        };
    }
}
/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/
export async function login(email, password) {
    try {
        const { data } = await api.post(
            "/login",
            {
                email,
                password
            }
        );
        return data;
    } catch (err) {
        console.error(
            "LOGIN ERROR:",
            err
        );
        if (err.response?.data) {
            return err.response.data;
        }
        return {
            ok: false,
            error:
                "ネットワークエラーが発生しました"
        };
    }
}
/*
|--------------------------------------------------------------------------
| Current User
|--------------------------------------------------------------------------
*/
export async function getCurrentUser() {
    try {
        const { data } = await api.get("/me");
        return data;
    } catch (err) {
        console.error("ME ERROR:", err);
        if (err.response?.data) {
            return err.response.data;
        }
        return {
            ok: false,
            error: "ログイン状態を確認できませんでした。"
        };
    }
}
/*
|--------------------------------------------------------------------------
| Forgot Password
|--------------------------------------------------------------------------
*/
export async function forgotPassword(email) {
    try {
        const { data } = await api.post(
            "/forgot-password",
            {
                email
            }
        );
        return data;
    } catch (err) {
        console.error(
            "FORGOT PASSWORD ERROR:",
            err
        );
        if (err.response?.data) {
            return err.response.data;
        }
        return {
            ok: false,
            error:
                "ネットワークエラーが発生しました"
        };
    }
}