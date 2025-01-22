import Navbar from "./NavbarComponent";
import { NavLink } from "react-router-dom";
import "./css/aboutme.css";

function AboutComponent() {
	const myFname = "Paweesuda";
	const myLname = "Thippayanasa";
	const about1 =
		"Hi, I’m a third-year Computer Science student at the College of Computing, Khon Kaen University. I’m passionate about technology and problem-solving.";
	const about2 =
		"This portfolio showcases my skills, projects, and journey in computer science. Feel free to explore and connect with me!";
	return (
		<>
			{/* navbar part */}
			<div className="navnar-con">
				<Navbar />
			</div>

			{/* content-About */}
			<div className="content-About">
				<div className="sec-left">
					<h1>About</h1>
					<h1 className="myFname">{myFname}</h1>
					<h1 className="myLname">{myLname}</h1>
					<p className="about-text">{about1}</p>
					<p className="about-text">{about2}</p>
				</div>
				<div className="sec-right"></div>
			</div>
		</>
	);
}

export default AboutComponent;
