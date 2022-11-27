import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Developedbyrd</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/rushikesh-deshmukh/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/rushikesh-codes" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/who_rushikesh" target="_blank" rel="noreferrer" ><BsTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; IN 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer