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