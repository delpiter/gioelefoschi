import React from "react";
import { Instagram, GitHub, LinkedIn, X } from "@mui/icons-material";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/delpiter" target="_blank" rel="noreferrer"><GitHub /></a>
        <a href="https://www.linkedin.com/in/gioele-foschi/" target="_blank" rel="noreferrer"><LinkedIn /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;