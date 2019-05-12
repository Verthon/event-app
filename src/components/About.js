import React from 'react';
import Navbar from './Navbar';
import connected_world from '../assets/images/connected_world.svg';

const About = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <article className="section">
        <h1 className="section__title">About us</h1>
        <img src={connected_world} alt=""/>
      </article>
    </React.Fragment>
  )
}

export default About;