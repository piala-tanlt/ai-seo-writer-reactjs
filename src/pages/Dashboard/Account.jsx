import { useState } from "react";
import ProfileTab from "../../components/dashboard/account/ProfileTab";
import BillingTab from "../../components/dashboard/account/BillingTab";
import useAccountInfo from "../../hooks/useAccountInfo";
export default function AccountPage(){
    const [activeTab, setActiveTab] = useState("profile");
    const {
        user,
        loading,
        alert
    } = useAccountInfo();
    return (
        <section className="screen">
            <div className="page-head">
                <h1 className="page-title">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    マイアカウント
                </h1>
                <div className="page-desc">
                    プロフィール、パスワード、請求の管理
                </div>
            </div>

            {
                alert?.message &&
                (
                    <div className="msg fail">
                        {alert.message}
                    </div>
                )
            }

            <div className="account-tabs">
                <button
                    className={`account-tab-btn ${activeTab === "profile" ? "active" : ""}`}
                    onClick={() => setActiveTab("profile")}
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    プロフィール
                </button>
                <button
                    className={`account-tab-btn ${activeTab === "billing" ? "active" : ""}`}
                    onClick={() => setActiveTab("billing")}
                >
                    <svg viewBox="0 0 24 24">
                        <rect x="1" y="4" width="22" height="16" rx="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    請求
                </button>
            </div>

            {
                activeTab === "profile"
                    ? <ProfileTab user={user} loading={loading} />
                    : <BillingTab availableCredits={22} />
            }
        </section>
    );
}
