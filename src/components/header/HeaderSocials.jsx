import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/rushikesh-deshmukh/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/rushikesh-codes" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/who_rushikesh" target="_blank" rel="noreferrer" ><BsTwitter /></a>
      <a href="https://wa.me/8668567036" target="_blank" rel="noreferrer" ><BsWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials