import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import SetPassword from "./pages/SetPassword/SetPassword";
export default function App() {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
			<Route path="/set-password/" element={<SetPassword />} />
        </Routes>
    );
}