import React from 'react';
import {Link} from 'react-router-dom';
import {formatLink, toggleNav} from '../helpers';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  
  const listRef = React.createRef();
  
  return(
    <nav className="main-nav">
      <button className="nav-btn" onClick={() => toggleNav(listRef)}>
        <span className="nav-btn__line"></span>
        <span className="nav-btn__line nav-btn__line--small"></span>
        <span className="nav-btn__line"></span>
      </button>
      <p className="nav-logo"><Link to="/">{props.name}</Link></p>
      <Link to="#">Account</Link>
      <ul className="nav-list" ref={listRef}>
        {
        props.links.map((link, id) => {
          return (
            <li key={id} className="nav__item">
              <Link to={"/" + formatLink(link)} key={id} className="nav__link">{link}</Link>
            </li>
          );
        })
        }
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  name: "Eventoo",
  links: [ "events", "about", "contact" ]
}

Navbar.propTypes = {
  name: PropTypes.string,
  links: PropTypes.array
}

export default Navbar;