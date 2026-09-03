export default function Alert({
    type = "",
    message = ""
}) {
    // Không có message thì không render gì
    if (!message) {
        return null;
    }
    const isSuccess = type === "success";
    return (
        <div
            className={`msg ${
                isSuccess ? "success" : "fail"
            } show`}
        >
            {isSuccess ? (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                    />
                    <polyline
                        points="8 12 11 15 16 9"
                    />
                </svg>
            ) : (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                    />
                    <line
                        x1="12"
                        y1="8"
                        x2="12"
                        y2="12"
                    />
                    <line
                        x1="12"
                        y1="16"
                        x2="12.01"
                        y2="16"
                    />
                </svg>
            )}
            <span>{message}</span>
        </div>
    );
}