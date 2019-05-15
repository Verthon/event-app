import React from 'react';
import {Link} from 'react-router-dom';
import {formatLink, toggleNav} from '../helpers';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors, media} from './styles/variables';

const Navbar = (props) => {  

  const Navigation = styled.nav`
    display: flex;
    width: 100%;
    background-color: ${colors.White};
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
    border-bottom: 1px solid ${colors.Unbleached};
    ${media.tablet}{
      padding: 1.5rem 5rem;
    }
  `;

  const Hamburger = styled.button`
    padding: 0;
    width: 1.5em;
    height: 1.1em;
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
    height: 0.2rem;
    background-color: ${colors.Blackout};
  `;

  const Logo = styled.p`
    font-size: 1.25em;
    font-weight: 600;
    margin: 0;
  `;

  const NavItem = styled.li`
    padding: 1em;
    border-bottom: 1px solid ${colors.Unbleached};
  `;

  const NavLink = styled(Link)`
    font-size: 1.2em;
  `

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
            <NavItem key={id}>
              <NavLink to={"/" + formatLink(link)} key={id} className="nav__link">{link}</NavLink>
            </NavItem>
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