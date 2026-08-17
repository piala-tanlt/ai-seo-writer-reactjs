import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<AuthLayout />}
            />
        </Routes>
    );
}