import React from 'react';
import './Navbar.css';
import { Link} from 'react-router-dom';

const navbar = () => {
  return(
    <nav className="app-navigation">
      <h1 className="logo">Event app</h1>
      <ul >
        <li className="app-navigation__item"><Link to="/">Home</Link></li>
        <li className="app-navigation__item"><Link to="events">Events</Link></li>
        <li className="app-navigation__item"><Link to="about">About</Link></li>
        <li className="app-navigation__item"><Link to="contact">Contact</Link></li>
      </ul>
    </nav>
  );
  
};

export default navbar;