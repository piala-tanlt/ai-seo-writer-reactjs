import { useEffect, useRef, useState } from "react";

import {
    checkToken,
    setPassword
} from "../api/auth";

import useAsyncAction from "./useAsyncAction";

export default function useSetPassword() {

    const {
        alert,
        showError,
        showSuccess,
        clearAlert
    } = useAsyncAction();

    /*
    |--------------------------------------------------------------------------
    | Form
    |--------------------------------------------------------------------------
    */

    const [form, setForm] = useState({
        password: "",
        confirmPassword: ""
    });

    /*
    |--------------------------------------------------------------------------
    | Token
    |--------------------------------------------------------------------------
    */

    const [token, setToken] = useState("");

    /*
    |--------------------------------------------------------------------------
    | User
    |--------------------------------------------------------------------------
    */

    const [name, setName] = useState("");

    /*
    |--------------------------------------------------------------------------
    | Page State
    |--------------------------------------------------------------------------
    */

    const [loading, setLoading] = useState(false);

    const [checkingToken, setCheckingToken] =
        useState(true);

    const [success, setSuccess] =
        useState(false);

    /*
    |--------------------------------------------------------------------------
    | Field Errors / Shake
    |--------------------------------------------------------------------------
    */

    const [fieldErrors, setFieldErrors] = useState({
        password: false,
        confirmPassword: false
    });

    const passwordRef = useRef(null);

    const confirmPasswordRef = useRef(null);


    /*
    |--------------------------------------------------------------------------
    | Get Token
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const urlToken =
            params.get("token");

        if (!urlToken) {

            setCheckingToken(false);

            showError(
                "認証リンクが無効です。"
            );

            return;
        }

        setToken(urlToken);

        verifyToken(urlToken);

    }, []);


    /*
    |--------------------------------------------------------------------------
    | Verify Token
    |--------------------------------------------------------------------------
    */

    const verifyToken = async (tokenValue) => {

        setCheckingToken(true);

        const result =
            await checkToken(tokenValue);

        setCheckingToken(false);

        if (!result.ok) {

            showError(
                result.error ||
                "認証リンクが無効です。"
            );

            return;
        }

        setName(
            result.name || ""
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Change
    |--------------------------------------------------------------------------
    */

    const handleChange = (
        field,
        value
    ) => {

        setForm(prev => ({
            ...prev,
            [field]: value
        }));

        setFieldErrors(prev => ({
            ...prev,
            [field]: false
        }));
    };


    /*
    |--------------------------------------------------------------------------
    | Shake
    |--------------------------------------------------------------------------
    */

    const shake = (field) => {

        setFieldErrors(prev => ({
            ...prev,
            [field]: true
        }));

        setTimeout(() => {

            setFieldErrors(prev => ({
                ...prev,
                [field]: false
            }));

        }, 400);
    };


    /*
    |--------------------------------------------------------------------------
    | Validate
    |--------------------------------------------------------------------------
    */

    const validate = () => {

        const password =
            form.password.trim();

        const confirmPassword =
            form.confirmPassword.trim();


        if (!password) {

            shake("password");

            passwordRef.current?.focus();

            return "すべての項目を入力してください";
        }


        if (!confirmPassword) {

            shake("confirmPassword");

            confirmPasswordRef.current?.focus();

            return "すべての項目を入力してください";
        }


        if (password.length < 8) {

            shake("password");

            passwordRef.current?.focus();

            return "パスワードは8文字以上で入力してください。";
        }


        if (password !== confirmPassword) {

            shake("confirmPassword");

            confirmPasswordRef.current?.focus();

            return "パスワードが一致しません。";
        }


        return null;
    };


    /*
    |--------------------------------------------------------------------------
    | Submit
    |--------------------------------------------------------------------------
    */

    const handleSubmit = async () => {

        clearAlert();

        const error = validate();

        if (error) {

            showError(error);

            return;
        }


        if (!token) {

            showError(
                "認証リンクが無効です。"
            );

            return;
        }


        setLoading(true);


        const result =
            await setPassword({
                token,
                password: form.password,
                confirmPassword:
                    form.confirmPassword
            });


        setLoading(false);


        /*
        |--------------------------------------------------------------------------
        | Error
        |--------------------------------------------------------------------------
        */

        if (!result.ok) {

            const message =
                result.error ||
                "アカウントを作成できませんでした。";

            showError(message);

            return;
        }


        /*
        |--------------------------------------------------------------------------
        | Success
        |--------------------------------------------------------------------------
        */

        showSuccess(
            result.message ||
            "アカウントが正常に作成されました。"
        );

        setSuccess(true);
    };


    /*
    |--------------------------------------------------------------------------
    | Return
    |--------------------------------------------------------------------------
    */

    return {

        form,

        token,

        name,

        alert,

        loading,

        checkingToken,

        success,

        fieldErrors,

        passwordRef,

        confirmPasswordRef,

        handleChange,

        handleSubmit
    };
}