import React, { useState, useEffect } from "react";
import Navbar from "./NavbarComponent";
import { ExternalLink, Calendar, Github } from "lucide-react";
import "./css/port.css";
import LoadingSpinner from "./LoadingSpinner";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch(
					"https://portfolio-bn-3hu5.onrender.com/port/getAllProjects"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch projects");
				}
				const data = await response.json();
				setProjects(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		});
	};

	const getLinkIcon = (linkType) => {
		switch (linkType) {
			case "GitHub_frontend":
			case "GitHub_Backend":
				return <Github className="link-icon" color="#ffffff" />; 
			case "website":
				return <ExternalLink className="link-icon" color="#ffffff" />; 
			default:
				return <ExternalLink className="link-icon" color="#ffffff" />; 
		}
	};

	const getLinkText = (linkType) => {
		switch (linkType) {
			case "GitHub_frontend":
				return "Frontend";
			case "GitHub_Backend":
				return "Backend";
			case "website":
				return "Live Demo";
			default:
				return "View Project";
		}
	};
	if (loading) {
		return (
		  <div className="portfolio-container min-h-screen">
			<div className="navbar-con">
			  <Navbar />
			</div>
			<div className="flex-1">
			  <LoadingSpinner />
			</div>
		  </div>
		);
	  }
	  if (error) {
		return (
		  <div className="portfolio-container">
			<div className="navbar-con">
			  <Navbar />
			</div>
			<div className="error-container">
			  <p className="error-message">Error: {error}</p>
			</div>
		  </div>
		);
	  }

	return (

		<div className="portfolio-container">
			<div className="navbar-con">
				<Navbar />
			</div>

			<div className="portfolio-content">
				<div className="portfolio-header">
					<h1>My Projects</h1>
					<p>
						This is only a sample of my work. To learn more about my work and
						experiences, please visit my GitHub page via the contact link.
					</p>
				</div>

				<div className="projects-grid">
					{projects.map((project) => (
						<div key={project.project_Id} className="project-card">
							<div className="project-header">
								<h2 className="project-title">
									{project.project_detail.project_name}
								</h2>
								<span
									className={`project-status ${project.project_status.status_name}`}
								>
									{project.project_status.status_name.replace("_", " ")}
								</span>
							</div>

							<div className="project-date">
								<Calendar className="date-icon" color="#6e6e6e" />
								<span>
									{formatDate(project.project_detail.project_start_date)} -
									{project.project_detail.project_end_date
										? formatDate(project.project_detail.project_end_date)
										: "Present"}
								</span>
							</div>

							<p className="project-description">
								{project.project_detail.project_description}
							</p>

							<div className="tools-section">
								<h3>Technologies Used:</h3>
								<div className="tools-container">
									{project.project_detail.project_tools.map((tool, index) => (
										<span key={index} className="tool-tag">
											{tool}
										</span>
									))}
								</div>
							</div>

							<div className="project-links">
								{project.links
									.sort((a, b) => a.type_id - b.type_id)
									.map((link) => (
										<a
											key={link._id}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`project-link ${link.link_type.toLowerCase()}`}
										>
											{getLinkIcon(link.link_type)}
											<span className="text-link">
												{getLinkText(link.link_type)}
											</span>
										</a>
									))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
