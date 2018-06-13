import React from 'react';
import './Header.css';
const header = (props) => {
  return(
    <header className="app-header">
      {props.children}
    </header>
  );
};

export default header;