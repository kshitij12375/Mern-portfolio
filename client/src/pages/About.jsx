import "./About.css";
import { useAuth } from "../store/auth";

export const About = () => {
    const { userr } = useAuth(); // Assuming 'user' is the correct object from your store

    return (
        <main className="about-main">
            <div className="about-aura"></div>
            
            <section className="about-container">
                <div className="profile-header">
                    <div className="profile-tag">USER_IDENTIFICATION_V4</div>
                    <h1 className="about-title">
                        WELCOME, <span className="user-name">{userr?.userData?.username || "GUEST"}</span>
                    </h1>
                </div>

                <div className="about-grid">
                    {/* Left Column: Story */}
                    <div className="about-card bio-card">
                        <div className="card-label">PROJECT_MEMO</div>
                        <h2>MISSION_STATEMENT</h2>
                        <p>
                            I am a Full-Stack Developer obsessed with the intersection of 
                            <strong> high-performance logic</strong> and <strong>bold aesthetics</strong>. 
                            I don't just build websites; I build digital identities that refuse to be ignored.
                        </p>
                        <p>
                            Based in the digital ether, I spend my time optimizing MERN stacks 
                            and pushing the boundaries of what "Modern UI" can feel like.
                        </p>
                    </div>

                    {/* Right Column: Technical Stats */}
                    <div className="about-card stats-card">
                        <div className="card-label">TECHNICAL_READOUT</div>
                        <div className="stat-item">
                            <span className="stat-label">EXPERIENCE</span>
                            <span className="stat-value">3+ YEARS</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">PROJECTS_DEPLOYED</span>
                            <span className="stat-value">40+</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">COFFEE_CONSUMED</span>
                            <span className="stat-value">∞_GALLONS</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">CORE_LANGUAGE</span>
                            <span className="stat-value">JAVASCRIPT</span>
                        </div>
                        <button className="download-btn">DOWNLOAD_CV.PDF</button>
                    </div>
                </div>
            </section>
        </main>
    );
};