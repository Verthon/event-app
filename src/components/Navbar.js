import React from 'react';
import {Link} from 'react-router-dom';
import {formatLink, toggleNav} from '../helpers';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors} from './styles/variables';

const Navbar = (props) => {  

  const Navigation = styled.nav`
    display: flex;
    width: 100%;
    background-color: ${colors.White};
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid ${colors.Unbleached};
  `;

  const Hamburger = styled.button`
    width: 20px;
    height: 15px;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.White};
    cursor: pointer;
    outline: 0;
  `;

  const Line = styled.span`
    width: ${props => props.small ? "75%" : "20px"};
    border-radius: 2px;
    display: flex;
    height: 2px;
    background-color: ${colors.Blackout};
  `;

  const Logo = styled.p`
    font-size: 1.25rem;
    font-weight: 600;
  `;


  const listRef = React.createRef();
  return(
    <Navigation>
      <Hamburger onClick={() => toggleNav(listRef)}>
        <Line/>
        <Line small/>
        <Line/>
      </Hamburger>
      <Logo><Link to="/">{props.name}</Link></Logo>
      <Link to="/account">Account</Link>
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
    </Navigation>
  )
}

Navbar.defaultProps = {
  name: "Eventoo",
  links: [ "events", "about", "contact", "create event" ]
}

Navbar.propTypes = {
  name: PropTypes.string,
  links: PropTypes.array
}

export default Navbar;