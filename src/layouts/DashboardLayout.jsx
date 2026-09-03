import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import LeftSidebar from "../components/common/LeftSidebar";
import RightSidebar from "../components/common/RightSidebar";
import Footer from "../components/common/Footer";
export default function DashboardLayout() {
    return (
        <>  
            <Header />
            <div className="nav-overlay" id="navOverlay"></div>
            <div className="app-shell">
                <LeftSidebar />
                <div className="screens-wrap">
                    <div className="screens-main">
                        <Outlet />
                    </div>
                    <RightSidebar />
                </div>
            </div>
            <Footer />
        </>
    );
}