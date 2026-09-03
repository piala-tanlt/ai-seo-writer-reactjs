import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import LoginPage
    from "../pages/Auth/Login";
import RegisterPage
    from "../pages/Auth/Register";
import SetPasswordPage
    from "../pages/Auth/SetPassword";
import ForgotPasswordPage
    from "../pages/Auth/ForgotPassword";
import DashboardLayout
    from "../layouts/DashboardLayout";
import DashboardPage
    from "../pages/Dashboard/Index";
import CreateArticlePage
    from "../pages/Dashboard/CreateArticle";
import EditorPage
    from "../pages/Dashboard/Editor";
import ImprovePage
    from "../pages/Dashboard/Improve";
import SettingsPage
    from "../pages/Dashboard/Settings";
import CreditsPage
    from "../pages/Dashboard/Credits";
import AccountPage
    from "../pages/Dashboard/Account";
export default function AppRouter() {
    return (
        <BrowserRouter
            basename="/ai-seo-writer"
        >
            <Routes>
                 {/* ======================
                    AUTH ROUTES
                ======================= */}
                <Route
                    path="/login"
                    element={
                        <LoginPage />
                    }
                />
                <Route
                    path="/register"
                    element={
                        <RegisterPage />
                    }
                />
                <Route
                    path="/set-password"
                    element={
                        <SetPasswordPage />
                    }
                />
                <Route
                    path="/forgot-password"
                    element={
                        <ForgotPasswordPage />
                    }
                />
                {/* ======================
                    DASHBOARD ROUTES
                ======================= */}
                <Route
                    element={
                        <DashboardLayout />
                    }
                >
                    {/* Dashboard */}
                    <Route
                        path="/dashboard/"
                        element={
                            <DashboardPage />
                        }
                    />
                    {/* Create */}
                    <Route
                        path="/dashboard/create/"
                        element={
                            <CreateArticlePage />
                        }
                    />
                    {/* Editor */}
                    <Route
                        path="/dashboard/editor/"
                        element={
                            <EditorPage />
                        }
                    />
                    {/* AI Improve */}
                    <Route
                        path="/dashboard/ai-improvement/"
                        element={
                            <ImprovePage />
                        }
                    />
                    {/* Settings */}
                    <Route
                        path="/dashboard/settings/"
                        element={
                            <SettingsPage />
                        }
                    />
                    {/* Credits */}
                    <Route
                        path="/dashboard/credits/"
                        element={
                            <CreditsPage />
                        }
                    />
                    {/* Account */}
                    <Route
                        path="/dashboard/account/"
                        element={
                            <AccountPage />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}