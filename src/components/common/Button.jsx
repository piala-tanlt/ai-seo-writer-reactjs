export default function Button({
    children,
    loading = false,
    disabled = false,
    type = "button",
    className = "",
    onClick
}) {
    return (
        <button
            type={type}
            className={`btn-submit ${className}`}
            disabled={loading || disabled}
            onClick={onClick}
        >
            {
                loading
                    ? "作成中..."
                    : children
            }
        </button>
    );
}