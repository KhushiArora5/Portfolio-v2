import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const HeadersSocials = () => {
  return (
    <div className="headers__socials">
        <a href="https://www.linkedin.com/in/khushi-arora-434b21244/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/KhushiArora5" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeadersSocials;