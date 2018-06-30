import React from 'react';
import './Contact.css';
import Map from '../Map/Map';

const contact = () => {
  return(
    <section className="section section__contact">
      <h2 id="contact" className="section__title">Contact us</h2>
      <Map/>
    </section>
  );
}

export default contact;