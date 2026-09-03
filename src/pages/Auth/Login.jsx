import LoginForm from "../../components/auth/LoginForm";
import useLogin from "../../hooks/useLogin";
export default function Login() {
    const {
        form,
        loading,
        alert,
        handleChange,
        handleSubmit,
        handleKeyDown
    } = useLogin();
    return (
        <LoginForm
            form={form}
            loading={loading}
            alert={alert}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleKeyDown={handleKeyDown}
        />
    );
}