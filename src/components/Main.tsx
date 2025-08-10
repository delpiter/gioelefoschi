import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '../assets/images/Avatar.jpg'
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="about-card">
          <div className="image-wrapper">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a href="https://github.com/delpiter" target="_blank" rel="noreferrer"><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/gioele-foschi/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            </div>
            <h1>Gioele Foschi</h1>
            <p><i>Aspiring</i> Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;