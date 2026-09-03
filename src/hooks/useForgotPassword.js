import {
    useRef,
    useState
} from "react";
import {
    forgotPassword
} from "../api/auth";
export default function useForgotPassword() {
    /*
    |--------------------------------------------------------------------------
    | Form
    |--------------------------------------------------------------------------
    */
    const [form, setForm] = useState({
        email: ""
    });
    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */
    const [loading, setLoading] = useState(false);
    /*
    |--------------------------------------------------------------------------
    | Alert
    |--------------------------------------------------------------------------
    */
    const [alert, setAlert] = useState(null);
    /*
    |--------------------------------------------------------------------------
    | Success
    |--------------------------------------------------------------------------
    */
    const [success, setSuccess] = useState(false);
    /*
    |--------------------------------------------------------------------------
    | Field Errors
    |--------------------------------------------------------------------------
    */
    const [fieldErrors, setFieldErrors] = useState({
        email: false
    });
    /*
    |--------------------------------------------------------------------------
    | Ref
    |--------------------------------------------------------------------------
    */
    const emailRef = useRef(null);
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
        },400);
    };
    /*
    |--------------------------------------------------------------------------
    | Change
    |--------------------------------------------------------------------------
    */
    const handleChange = (field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));
        setFieldErrors(prev => ({
            ...prev,
            [field]: false
        }));
        setAlert(null);
    };
    /*
    |--------------------------------------------------------------------------
    | Validate
    |--------------------------------------------------------------------------
    */
    const validate = () => {
        if(!form.email.trim()) {
            shake("email");
            emailRef.current?.focus();
            return "メールアドレスを入力してください。";
        }
        return null;
    };
    /*
    |--------------------------------------------------------------------------
    | Submit
    |--------------------------------------------------------------------------
    */
    const handleSubmit = async () => {
        setAlert({
            type:"",
            message:""
        });
        setSuccess(false);
        const validationError = validate();
        if(validationError) {
            setAlert({
                type:"fail",
                message:validationError
            });
            return;
        }
        setLoading(true);
        try {
            const result = await forgotPassword(
                form.email.trim()
            );
            /*
            |--------------------------------------------------------------------------
            | Failed
            |--------------------------------------------------------------------------
            */
            if(!result.ok) {
                setAlert({
                    type:"fail",
                    message:
                        result.error ||
                        "エラーが発生しました。"
                });
                shake("email");
                emailRef.current?.focus();
                return;
            }
            /*
            |--------------------------------------------------------------------------
            | Success
            |--------------------------------------------------------------------------
            */
            setSuccess(true);
            setAlert({
                type:"success",
                message:
                    "リセットリンクを送信しました。"
            });
        }
        catch(error) {
            console.error(
                "FORGOT PASSWORD ERROR:",
                error
            );
            setAlert({
                type:"fail",
                message:
                    "ネットワークエラーが発生しました。"
            });
        }
        finally {
            setLoading(false);
        }
    };
    return {
        form,
        loading,
        alert,
        success,
        fieldErrors,
        emailRef,
        handleChange,
        handleSubmit
    };
}