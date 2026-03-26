import "./Service.css";

export const Service = () => {
    return (
        <main className="project-main">
            <div className="project-aura"></div>
            
            <section className="project-container">
                <div className="project-header">
                    <div className="header-badge">DEPLOYED_SOLUTIONS_V2</div>
                    <h1 className="project-title">MY<span>_</span>PROJECTS</h1>
                    <p className="project-subtitle">
                        A collection of high-performance applications built with 
                        brutal precision and modern stacks.
                    </p>
                </div>

                <div className="project-grid">
                    {/* Project Card 1 */}
                    <div className="project-card">
                        <div className="card-index">01</div>
                        <div className="card-image-placeholder">
                            <span>PREVIEW_UNAVAILABLE</span>
                        </div>
                        <div className="card-details">
                            <h3>E-COMMERCE_OS</h3>
                            <p>Full-stack marketplace with real-time inventory tracking.</p>
                            <div className="tech-stack-tags">
                                <span>REACT</span>
                                <span>NODE</span>
                                <span>REDUX</span>
                            </div>
                            <button className="view-project-btn">OPEN_SOURCE ↗</button>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="project-card accent-purple">
                        <div className="card-index">02</div>
                        <div className="card-image-placeholder">
                            <span>DASHBOARD_UI</span>
                        </div>
                        <div className="card-details">
                            <h3>CRYPTO_TRACKER</h3>
                            <p>Interactive data visualization for global market trends.</p>
                            <div className="tech-stack-tags">
                                <span>NEXT.JS</span>
                                <span>D3.JS</span>
                                <span>FIREBASE</span>
                            </div>
                            <button className="view-project-btn">OPEN_SOURCE ↗</button>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="project-card accent-cyan">
                        <div className="card-index">03</div>
                        <div className="card-image-placeholder">
                            <span>AUTH_SYSTEM</span>
                        </div>
                        <div className="card-details">
                            <h3>SECURE_GATEWAY</h3>
                            <p>Advanced MERN authentication system with JWT & OAuth.</p>
                            <div className="tech-stack-tags">
                                <span>MONGODB</span>
                                <span>EXPRESS</span>
                                <span>JWT</span>
                            </div>
                            <button className="view-project-btn">OPEN_SOURCE ↗</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};