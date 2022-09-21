import React from 'react';
import './Header.css';
import CTA from './CTA';
import me from '../../Assets/me.png';
import HeadersSocials from './HeadersSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Khushi Arora</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeadersSocials/>

        <div className="me">
          <img src={me} alt="profile pic" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;