import SetPasswordForm
    from "../../components/auth/SetPasswordForm";

import useSetPassword
    from "../../hooks/useSetPassword";

export default function SetPassword() {

    const {
        form,
        name,
        alert,
        loading,
        checkingToken,
        fieldErrors,
        passwordRef,
        confirmPasswordRef,
        handleChange,
        handleSubmit
    } = useSetPassword();


    return (
        <SetPasswordForm

            name={name}

            form={form}

            alert={alert}

            loading={loading}

            checkingToken={checkingToken}

            fieldErrors={fieldErrors}

            passwordRef={passwordRef}

            confirmPasswordRef={
                confirmPasswordRef
            }

            handleChange={
                handleChange
            }

            handleSubmit={
                handleSubmit
            }

        />
    );
}