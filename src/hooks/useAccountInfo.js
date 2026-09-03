import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/auth";
import formatDate from "../utils/formatDate";
export default function useAccountInfo() {
    const [user, setUser] = useState({
        username: "-",
        email: "-",
        createdAt: "-",
        passwordChangedAt: "-"
    });
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(null);
    useEffect(() => {
        let active = true;
        (async () => {
            const result = await getCurrentUser();
            if (!active) {
                return;
            }
            if (!result.ok) {
                setAlert({
                    type: "fail",
                    message:
                        result.error ||
                        "アカウント情報を取得できませんでした。"
                });
                setLoading(false);
                return;
            }
            setUser({
                username: result.user?.username || "-",
                email: result.user?.email || "-",
                createdAt: formatDate(result.user?.registered),
                passwordChangedAt: formatDate(result.user?.passwordChanged)
            });
            setLoading(false);
        })();
        return () => {
            active = false;
        };
    }, []);
    return {
        user,
        loading,
        alert
    };
}
