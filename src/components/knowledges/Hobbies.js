import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Jogging</span>
        </li>
        <li className="hobby">
          <i className="fas fa-tv"></i>
          <span>Cinéma</span>
        </li>
        <li className="hobby">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1em"
            height="1em"
            viewBox="0 0 21 21"
          >
            <path
              fill="#ff851b"
              d="m19.8 2l-8.2 6.7l-1.21-1.04L14 5.58L9.41 1L8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17L8 16l-2.03-3.5l.35-1.32L9.5 13l.5 9h2l.5-10L21 3.4L19.8 2M5 3a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2Z"
            ></path>
          </svg>
          <span>Nihon Taï-Jitsu</span>
        </li>
        <li className="hobby">
          <i className="fas fa-plane"></i>
          <span>Voyages</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
