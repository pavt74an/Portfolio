// HomePortfolio.jsx
import React from "react";
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
      <div className="navbar-con">
        <Navbar />
      </div>

      <div className="content-home">
        <div className="hero-section">
          <div className="name-container">
            <h1 className="myFname">{myFname}</h1>
            <h1 className="myLname">{myLname}</h1>
          </div>
          
          <p className="describe">{describe}</p>
          
          <NavLink to="/portfolio" className="btn-to-portfolio">
            Let's Explore
          </NavLink>

          <div className="social-links">
            <a href="#" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePortfolio;
