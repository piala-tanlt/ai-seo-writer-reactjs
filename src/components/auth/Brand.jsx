import BrandIcon from "./BrandIcon";
export default function Brand({
    variant = "default",
    showSpark = true,
    showTag = false,
    title,
    subtitle,
    titleGradient,
    hideSubtitle = false,
}) {
    return (
        <div className="brand">
            <BrandIcon
                variant={variant}
                showSpark={showSpark}
            />
            {
                showTag &&
                (
                    <div className="brand-tag">
                        AI SEO Writer
                    </div>
                )
            }
            <div className="brand-name">
                {title}
                {
                    titleGradient &&
                    (
                        <strong>
                            {titleGradient}
                        </strong>
                    )
                }
            </div>
            {
                !hideSubtitle &&
                subtitle &&
                (
                    <div className="brand-sub">
                        {subtitle}
                    </div>
                )
            }
        </div>
    );
}