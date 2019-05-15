import React from 'react';
import Navbar from './Navbar';
import {Section} from './Section';
import {Title} from './Title';

const Contact = () => {
  return(
    <React.Fragment>
      <Navbar/>
      <Section>
        <Title>Contact</Title>
      </Section>
    </React.Fragment>
  );
}

export default Contact;