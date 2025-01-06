import React from "react";
import githubIcon from "/src/assets/github-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer>
      <a href="http://github.com/copstud3" className="footer-text">
      <div className="foot">
        <p>
          Made by:{" "}
          @copstud3
        </p>
        <img src={githubIcon} alt="github-logo" className="footer-img" />
        </div>
      </a>
    </footer>
  );
}
