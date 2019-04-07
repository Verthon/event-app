import React, {Fragment} from 'react';
import Navbar from './Navbar';

const NotFound = () => {
  return (
    <Fragment>
      <Navbar/>
      <div className="not-found">
        <h1>Not Found</h1>
        <svg src="./images/server_down.svg" alt=""/>
      </div>
    </Fragment>
  );
}

export default NotFound;