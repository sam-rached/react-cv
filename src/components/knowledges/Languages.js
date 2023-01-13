import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "HTML", xp: 1.8 },
      { id: 2, value: "CSS", xp: 1.5 },
      { id: 3, value: "Javascript", xp: 1.5 },
      { id: 4, value: "Python", xp: 1.0 },
      { id: 5, value: "PHP", xp: 0.3 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.8 },
      { id: 2, value: "Bootstrap", xp: 0.2 },
      { id: 3, value: "Sass", xp: 0.1 },
      { id: 4, value: "React Native", xp: 0.1 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibiothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
