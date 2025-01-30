// Navbar.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./css/navbar.css";
import ContactCom from "./ContactCom";
import logo from "../asset/74an.png";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="menu">
			<NavLink className="logo" to="/">
				<img src={logo} alt="" />
			</ NavLink>

			<div className="hamburger" onClick={toggleMenu}>
				<span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
				<span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
				<span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
			</div>

			<div className={`nav-container ${isMenuOpen ? "active" : ""}`}>
				<ul className="nav-links">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "active" : "")}
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/portfolio"
							className={({ isActive }) => (isActive ? "active" : "")}
							onClick={() => setIsMenuOpen(false)}
						>
							Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) => (isActive ? "active" : "")}
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</NavLink>
					</li>
				</ul>

				<div className="contact-btn-nav">
					<ContactCom />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
