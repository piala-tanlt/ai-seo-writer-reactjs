export default function Alert({
    type = "fail",
    message = ""
}) {
    if (!message) return null;
    return (
        <div className={`msg ${type}`}>
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
                {
                    type === "success"
                        ? (
                            <polyline
                                points="8 12 11 15 16 9"
                            />
                        )
                        : (
                            <>
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
                            </>
                        )
                }
            </svg>
            <span>{message}</span>
        </div>
    );
}