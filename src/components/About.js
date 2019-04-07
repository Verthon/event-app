import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <article className="section">
        <h1 className="section__title">About us</h1>
        <img src="./images/connected_world.svg" alt=""/>
      </article>
    </React.Fragment>
  )
}

export default About;