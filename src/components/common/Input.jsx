export default function Input({
    id,
    label,
    type = "text",
    value,
    placeholder,
    autoComplete,
    onChange,
    onKeyDown,
    inputRef,
    error
}) {
    return (
        <div className="form-group">
            <label
                className="form-label"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                ref={inputRef}
                id={id}
                className={
                    `form-input ${error ? "shake" : ""}`
                }
                type={type}
                value={value}
                placeholder={placeholder}
                autoComplete={autoComplete}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}