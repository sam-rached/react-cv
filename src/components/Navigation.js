import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/sam.png" alt="photo_de_Sam" title="photo_de_Sam" />
          <h3>Samir Rached</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/competences" activeclassname="active">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeclassname="active">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://linkedin.com/in/samir-rached"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sam-rached"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://samirached.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-paper-plane"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Sam featuring From Scratch ©2023</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
