import React from 'react';
import './Navbar.css';

const navbar = () => {
  return(
    <nav className="app-navigation">
      <ul>
        <li className="app-navigation__item"><a href="#">Home</a></li>
        <li className="app-navigation__item"><a href="#events">Events</a></li>
        <li className="app-navigation__item"><a href="#events">About</a></li>
        <li className="app-navigation__item"><a href="#events">Contact</a></li>
      </ul>
    </nav>
  );
  
};

export default navbar;