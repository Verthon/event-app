import React, {Fragment} from 'react';
import Navbar from './Navbar';
import server_down from '../assets/images/server_down.svg';

const NotFound = () => {
  return (
    <Fragment>
      <Navbar/>
      <div className="not-found">
        <h1>Oops!</h1>
        <p>Sorry! We can't find the page you are looking for...</p>
        <img src={server_down} alt=""/>
      </div>
    </Fragment>
  );
}

export default NotFound;