import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { loggedIn } = useAuth();

    return (
        <header className="portfolio-nav">
            <div className="nav-inner">
                <div className="nav-logo">
                    <NavLink to="/">KSHITIJ<span>.</span>DEV</NavLink>
                </div>

                <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-label="Open navigation menu" />
                <label className="nav-toggle-label" htmlFor="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <div className="nav-menu">
                    <nav>
                        <ul className="nav-links">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/service">Project</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>

                    <div className="nav-actions">
                        {!loggedIn ? (
                            <>
                                <NavLink to="/register" className="btn-nb secondary">Register</NavLink>
                                <NavLink to="/login" className="btn-nb primary">Login</NavLink>
                            </>
                        ) : (
                            <NavLink to="/logout" className="btn-nb logout">Logout</NavLink>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};