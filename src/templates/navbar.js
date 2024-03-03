import React from 'react'
import { useState, useEffect } from 'react';

import "../styles/navbar.css"

import Logo from "../images/logo.png"

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0)
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); 
    } else {
      setShow(true);  
    }
    setLastScrollY(window.scrollY); 
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  
  return (
    <div className={`navBar ${!show ? "hidden" : ""}`}>
      <nav>
        <ul>
          <li><img src={Logo} alt="Logo" className='Logo'/></li>
          <li><a href="/">Home</a></li>
          <li><a href="/noi">Chi siamo</a></li>
          <li><a href="/attività">Attività</a></li>
          <li><a href="/associati">Associati</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar