import "./Footer.css";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="nb-footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>KSHITIJ<span>.</span>DEV</h2>
                        <p>Available for freelance and full-time opportunities.</p>
                    </div>
                    
                    <div className="footer-socials">
                        <a href="#" className="social-box github">GH</a>
                        <a href="#" className="social-box linkedin">LN</a>
                        <a href="#" className="social-box twitter">X</a>
                        <a href="#" className="social-box instagram">IG</a>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <div className="footer-info">
                        <span>© 2026 ALL RIGHTS RESERVED</span>
                        <span className="version-tag">VER_4.0.2</span>
                    </div>
                    
                    <button className="back-to-top" onClick={scrollToTop}>
                        TOP_OF_PAGE ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};