import React from 'react';
import './Header.css';
const header = (props) => {
  return(
    <header className="app-header">
      <h1 className="app-header__title">Welcome to event-app</h1>
      {props.children}
    </header>
  );
};

export default header;