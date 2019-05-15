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
        <p>Eventoo is a platform, that allows anyone to create, share, find and attend events. From music festivals, conferences and community meetups, to sport events. Our mission is to connect people with passion.</p>
        <img src={connected_world} alt=""/>
      </Section>
    </React.Fragment>
  )
}

export default About;