import React from "react";
import Navigation from "../components/Navigation";
import cv from "../media/SamirRached_CV_2023.pdf"

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h2>Développeur Web Junior</h2>
          <div className="pdf">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
