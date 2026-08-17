import RegisterForm from "../../components/auth/RegisterForm";
import RegisterSuccess from "../../components/auth/RegisterSuccess";
import useRegister from "../../hooks/useRegister";

export default function Register() {

    const {
        form = {
            name: "",
            username: "",
            email: ""
        },
        alert = {},
        loading = false,
        success = false,
        countdown = 0,
        handleChange,
        handleSubmit,
        resend
    } = useRegister();

    if (success) {
        return (
            <RegisterSuccess
                email={form.email}
                alert={alert}
                countdown={countdown}
                loading={loading}
                resend={resend}
            />
        );
    }

    return (
        <RegisterForm
            form={form}
            alert={alert}
            loading={loading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}