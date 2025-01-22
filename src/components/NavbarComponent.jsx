import { NavLink } from "react-router-dom";
import "./css/navbar.css";

function Navbar() {
	return (
		<>
			<nav className="menu">
				<li>
					<img src="" alt="" />
					logo
				</li>

				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/portfolio">Portfolio</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
				<li className="contact-btn">
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</nav>
		</>
	);
}

export default Navbar;
