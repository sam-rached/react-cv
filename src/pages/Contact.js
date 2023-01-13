import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span className="clickInput">Argenteuil</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0699107813">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 99 10 78 13
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="srached@hotmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  srached@hotmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://linkedin.com/in/samir-rached"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/sam-rached"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://samirached.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>samirached</h4>
              <i className="fa fa-paper-plane"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
