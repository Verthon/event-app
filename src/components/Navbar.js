import React from 'react';
import {Link} from 'react-router-dom';
import {formatLink} from '../helpers';

const Navbar = (props) => {

  const listRef = React.createRef();
  const test = () => {
    listRef.current.classList.toggle("nav-list--active");
  }

  return(
    <nav className="main-nav">
      <p className="nav-logo">{props.name}</p>
      <button className="nav-btn" onClick={test}>
        <span className="nav-btn__line"></span>
        <span className="nav-btn__line"></span>
        <span className="nav-btn__line"></span>
      </button>
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

export default Navbar;