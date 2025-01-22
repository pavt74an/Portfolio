import Navbar from "./NavbarComponent";
import { NavLink } from "react-router-dom";
import "./css/home.css";

function HomePortfolio() {
	const myFname = "Paweesuda";
	const myLname = "Thippayanasa";
	const describe =
		"Hi there! I'm a third-year computer science student, and this is my portfolio—a space where you can get to know me, my skills, and the projects I'm passionate about. Welcome!";

	return (
		<div className="layout-container-home">
			{/* navbar part */}
			<div className="navnar-con">
				<Navbar />
			</div>

			{/*content  */}
			<div className="content-home ">
				<div className="sec1">
					<h1 className="myFname">{myFname}</h1>
					<h1 className="myLname">{myLname}</h1>
					<p className="little describe">{describe}</p>
					<NavLink to="/portfolio" className="btn-to-portfolio">
						Let's Explore
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default HomePortfolio;
