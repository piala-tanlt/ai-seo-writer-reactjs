import { Link } from "react-router-dom";
export default function SwitchLine({
    text = "既にアカウントをお持ちですか？",
	textLink = "サインイン",
    to = "/login"
}) {
    return (
        <div className="switch-line">
            {text}
            {" "}
            <Link to={to}>
                {textLink}
            </Link>
        </div>
    );
}