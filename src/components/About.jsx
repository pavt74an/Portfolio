import Navbar from "./NavbarComponent";
import { NavLink } from "react-router-dom";
import "./css/aboutme.css";
import mepics from "../asset/me.jpg";
import SkillsComponent from "./SkillsComponent";

function AboutComponent() {
	const myFname = "Paweesuda";
	const myLname = "Thippayanasa";
	const about1 =
		"Hi, I'm a third-year Computer Science student at the College of Computing, Khon Kaen University. I'm passionate about technology and problem-solving.";
	const about2 =
		"This portfolio showcases my skills, projects, and journey in computer science. Feel free to explore and connect with me!";

	return (
		<>
			<div className="navbar-con">
				<Navbar />
			</div>

			<div className="content-About">
				<div className="sec-left">
					<h1 className="about-title">About</h1>
					<div className="name-container">
						<h1 className="myFname">{myFname}</h1>
						<h1 className="myLname">{myLname}</h1>
					</div>
					<div className="about-description">
						<p className="about-text">{about1}</p>
						<p className="about-text">{about2}</p>
					</div>
				</div>
				<div className="sec-right">
					<div className="profile-card">
						<div className="profile-image">
							<img src={mepics} alt="Profile" />
						</div>
						<div className="quick-stats">
							<div className="stat">
								<span className="stat-number">5+</span>
								<span className="stat-label">Projects</span>
							</div>
						</div>
						<div className="social-links">
							<div className="social-icons">
								<a
									href="https://github.com/pavt74an"
									target="_blank"
									rel="noopener noreferrer"
									className="icon"
								>
									<svg
										className="icon-svg-ab"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
									</svg>
									<p>Personal GitHub</p>
								</a>
								<a
									href="https://github.com/Paweesuda-Thippayanasa"
									target="_blank"
									rel="noopener noreferrer"
									className="icon"
								>
									<svg
										className="icon-svg-ab"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
									</svg>
									<p>GitHub for School</p>
								</a>
								<a
									href="https://mail.google.com/mail/?view=cm&fs=1&to=paweesudaj@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
									className="icon"
								>
									<svg
										className="icon-svg-ab"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
									</svg>

									<p>Email</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="skills-section">
				<SkillsComponent />
			</div>
		</>
	);
}

export default AboutComponent;
