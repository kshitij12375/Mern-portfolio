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
        </header>
    );
};