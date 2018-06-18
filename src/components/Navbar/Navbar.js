import React from 'react';
import './Navbar.css';

const navbar = () => {
  return(
    <nav className="app-navigation">
      <h1 className="logo">Event app</h1>
      <ul >
        <li className="app-navigation__item"><a href="">Home</a></li>
        <li className="app-navigation__item"><a href="#events">Events</a></li>
        <li className="app-navigation__item"><a href="#about">About</a></li>
        <li className="app-navigation__item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
  
};

export default navbar;