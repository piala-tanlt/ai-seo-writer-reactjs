import axios from "axios";
const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/wp-json/custom/v1`,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
export default api;