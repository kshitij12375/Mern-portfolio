import "./Home.css";

export const Home = () => {
    return (
        <main className="portfolio-home">
            <div className="aura aura-top"></div>
            
            <section className="hero-section">
                <div className="hero-left">
                    <div className="hero-badge">AVAIL_FOR_WORK_2026</div>
                    <h1 className="hero-title">KSHITIJ<br /><span className="outline-text">TECHNICAL</span></h1>
                    <p className="hero-description">
                        Full-Stack Developer building <span className="highlight-cyan">Digital Dominance</span>. 
                        Clean code. Brutal aesthetics. Fast deployment.
                    </p>
                    <div className="hero-btn-group">
                        <button className="btn-main work">VIEW_PROJECTS</button>
                        <button className="btn-main start">GET_IN_TOUCH</button>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="system-card">
                        <div className="card-tag">SYSTEM_CORE_V2</div>
                        <div className="card-main-content">
                            <div className="data-row">
                                <span className="label">ROLE:</span>
                                <span className="value">MERN_ENGINEER</span>
                            </div>
                            <div className="data-row">
                                <span className="label">STATUS:</span>
                                <span className="value active-blink">ONLINE</span>
                            </div>
                            <div className="data-row">
                                <span className="label">LOC:</span>
                                <span className="value">GLOBAL_REMOTE</span>
                            </div>
                        </div>
                        <div className="card-footer">INIT_SEQUENCE_SUCCESSFUL</div>
                    </div>
                </div>
            </section>

            {/* Redesigned Tech Ticker - Skewed & High Speed */}
            <div className="ticker-wrap">
                <div className="ticker">
                    <div className="ticker__item">REACT</div>
                    <div className="ticker__item outline">NODE.JS</div>
                    <div className="ticker__item">MONGODB</div>
                    <div className="ticker__item outline">EXPRESS</div>
                    <div className="ticker__item">NEXT.JS</div>
                    <div className="ticker__item outline">TYPESCRIPT</div>
                    <div className="ticker__item">DOCKER</div>
                    <div className="ticker__item outline">AWS</div>
                    {/* Duplicate for seamless loop */}
                    <div className="ticker__item">REACT</div>
                    <div className="ticker__item outline">NODE.JS</div>
                    <div className="ticker__item">MONGODB</div>
                    <div className="ticker__item outline">EXPRESS</div>
                </div>
            </div>
        </main>
    );
};