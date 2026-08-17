import { useState } from "react";
export default function useAsyncAction() {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        type: "",
        message: ""
    });
    const showError = (message) => {
        setAlert({
            type: "fail",
            message
        });
    };
    const showSuccess = (message) => {
        setAlert({
            type: "success",
            message
        });
    };
    const clearAlert = () => {
        setAlert({
            type: "",
            message: ""
        });
    };
    return {
        loading,
        setLoading,
        alert,
        setAlert,
        showError,
        showSuccess,
        clearAlert
    };
}