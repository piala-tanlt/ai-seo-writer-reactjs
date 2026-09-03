import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
import useForgotPassword from "../../hooks/useForgotPassword";
export default function ForgotPassword(){
    const {
        form,
        loading,
        alert,
        success,
        fieldErrors,
        emailRef,
        handleChange,
        handleSubmit
    } = useForgotPassword();
    return (
        <ForgotPasswordForm
            form={form}
            loading={loading}
            alert={alert}
            success={success}
            fieldErrors={fieldErrors}
            emailRef={emailRef}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}