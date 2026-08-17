import { useEffect, useRef, useState } from "react";
import {
    register,
    resendActivationEmail
} from "../api/auth";
import useAsyncAction from "./useAsyncAction";
export default function useRegister() {
    const {
        loading,
        setLoading,
        alert,
        showError,
        showSuccess,
        clearAlert
    } = useAsyncAction();
    const [form, setForm] = useState({
        name: "",
        username: "",
        email: ""
    });
    const [success, setSuccess] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [fieldErrors, setFieldErrors] = useState({
        name: false,
        username: false,
        email: false
    });
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    useEffect(() => {
        if (!success || countdown <= 0) {
            return;
        }
        const timer = setTimeout(() => {
            setCountdown(prev => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [success, countdown]);
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
    const handleChange = (field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));
        setFieldErrors(prev => ({
            ...prev,
            [field]: false
        }));
    };
    const validate = () => {
        if (!form.name.trim()) {
            shake("name");
            nameRef.current?.focus();
            return "すべての項目を入力してください";
        }
        if (!form.username.trim()) {
            shake("username");
            usernameRef.current?.focus();
            return "すべての項目を入力してください";
        }
        if (!form.email.trim()) {
            shake("email");
            emailRef.current?.focus();
            return "すべての項目を入力してください";
        }
        if (!/^[a-zA-Z0-9_]+$/.test(form.username)) {
            shake("username");
            usernameRef.current?.focus();
            return "ユーザー名には英字、数字、アンダースコアのみ使用できます";
        }
        return null;
    };
    const handleSubmit = async () => {
        clearAlert();
        const error = validate();
        if (error) {
            showError(error);
            return;
        }
        setLoading(true);
        const result = await register(form);
        setLoading(false);
        if (!result.ok) {
            const message =
                result.error ||
                "登録に失敗しました。";
            showError(message);
            if (
                message.includes("メール") ||
                message.toLowerCase().includes("email")
            ) {
                shake("email");
                emailRef.current?.focus();
            }
            if (
                message.includes("ユーザー名") ||
                message.toLowerCase().includes("username")
            ) {
                shake("username");
                usernameRef.current?.focus();
            }
            return;
        }
        showSuccess(
            result.message ||
            "認証メールを送信しました。"
        );
        setSuccess(true);
        setCountdown(300);
    };
    const resend = async () => {
        if (countdown > 0) {
            return;
        }
        setLoading(true);
        const result = await resendActivationEmail(
            form.email
        );
        setLoading(false);
        if (!result.ok) {
            showError(
                result.error ||
                "認証メールを再送できませんでした。"
            );
            return;
        }
        showSuccess(
            result.message ||
            "認証メールを再送しました。"
        );
        setCountdown(300);
    };
    return {
        form,
        alert,
        loading,
        success,
        countdown,
        fieldErrors,
        nameRef,
        usernameRef,
        emailRef,
        handleChange,
        handleSubmit,
        resend
    };
}