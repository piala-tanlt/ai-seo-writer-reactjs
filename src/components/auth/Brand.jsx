export default function Brand({
    title,
    subtitle,
    titleGradient,
    hideSubtitle = false
}) {
    return (
        <div className="brand">

            <div class="brand-icon">
                <svg viewBox="0 0 24 24"><path d="M6 21l13-13"></path><path d="M15 6l3 3"></path><path d="M9 3l.5 1.5L11 5l-1.5.5L9 7l-.5-1.5L7 5z" fill="#fff" stroke="none"></path><path d="M19 13l.4 1.2L21 15l-1.2.4L19 16.6l-.4-1.2L17.4 15z" fill="#fff" stroke="none"></path></svg>
                <span class="brand-spark s1"></span>
                <span class="brand-spark s2"></span>
                <span class="brand-spark s3"></span>
            </div>

            <div className="brand-name">
                {title} <strong>{titleGradient}</strong>
            </div>

            <div
                className="brand-sub"
                style={{
                    display: hideSubtitle
                        ? "none"
                        : undefined
                }}
            >
                {subtitle}
            </div>

        </div>
    );
}