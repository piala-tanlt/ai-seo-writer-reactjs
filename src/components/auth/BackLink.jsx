import { Link } from "react-router-dom";
export default function BackLink({
    to = "/login",
    text = "サインインに戻る"
}) {
    return (
        <Link
            className="back-link"
            to={to}
        >
            <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
            >
                <polyline
                    points="15 18 9 12 15 6"
                />
            </svg>
            {text}
        </Link>
    );
}