import React from 'react';
import './Nav.css';
import {FaHome} from 'react-icons/fa';
import {BiUserCircle} from 'react-icons/bi';
import {BiBookBookmark} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {MdWork} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
import { useState } from 'react';


const Nav = () => {

  const[activeNav, setActiveNav] = useState('');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <BiUserCircle/></a>
      <a href="#exp" onClick={() => setActiveNav('#exp')} className={activeNav === '#exp' ? 'active' : ''}>
        <BiBookBookmark/></a>
      <a href="#port" onClick={() => setActiveNav('#port')} className={activeNav === '#port' ? 'active' : ''}>
        <MdWork/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav;