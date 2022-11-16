import React from 'react';
import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Khushi Arora</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Experience</a></li>
        <li><a href="#port">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/khushi-arora-434b21244/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/KhushiArora5" target="_blank"><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Khushi Arora. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;