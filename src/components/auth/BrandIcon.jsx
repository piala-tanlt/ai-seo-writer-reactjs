export default function BrandIcon({
    variant = "default",
    showSpark = true
}) {
    return (
        <div className="brand-icon">
            {
                variant === "forgot"
                    ?
                    (
                        <svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"></circle><line x1="10.85" y1="12.15" x2="19" y2="4"></line><line x1="18" y1="5" x2="20" y2="7"></line><line x1="15" y1="8" x2="17" y2="10"></line></svg>
                    )
                    :
                    (
                        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h6" stroke-width="2.25"></path><polyline points="14 2 14 8 20 8" stroke-width="2.25"></polyline><line x1="8" y1="12" x2="12" y2="12" stroke-width="2.25"></line><line x1="8" y1="16" x2="10" y2="16" stroke-width="2.25"></line><polyline points="12,20 15,16 18,18 22,11" stroke-width="1.6"></polyline><line x1="22" y1="11" x2="21.8" y2="14.6" stroke-width="1.6"></line><line x1="22" y1="11" x2="19" y2="13" stroke-width="1.6"></line><path d="M21.5 16l.4 1.2L23.1 17.5l-1.2.4L21.5 19l-.4-1.2L19.9 17.5l1.2-.4z" fill="#fff" stroke="none"></path></svg>
                    )
            }
            {
                showSpark &&
                (
                    <>
                        <span className="brand-spark s1"></span>
                        <span className="brand-spark s2"></span>
                        <span className="brand-spark s3"></span>
                    </>
                )
            }
        </div>
    );
}