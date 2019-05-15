import React from 'react';
import Navbar from './Navbar';
import connected_world from '../assets/images/connected_world.svg';
import {Title} from './Title';
import {Section} from './Section';
 
const About = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Section>
        <Title>About us</Title>
        <p>Eventbrite is a global platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives. From music festivals, marathons, conferences, community rallies, and fundraisers, to gaming competitions and air guitar contests. Our mission is to bring the world together through live experiences.</p>
        <img src={connected_world} alt=""/>
      </Section>
    </React.Fragment>
  )
}

export default About;