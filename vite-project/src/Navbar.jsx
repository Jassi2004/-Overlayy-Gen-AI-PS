import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">HackinTech</div>
            <div className="navbar-links">
                <a href="#resources">Resources</a>
                <a href="#overview">Overview</a>
                <a href="#team">Team</a>
                <a href="#contact">Contact Us</a>
            </div>
            <div className="navbar-login">
                <button>Login/Signup</button>
            </div>
        </nav>
    );
};

export default Navbar;
