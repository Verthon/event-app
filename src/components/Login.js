import React from 'react';
import Navbar from './Navbar';
import {withFirebase} from './Firebase';

const Login = (props) => {
  console.log(props.firebase);
  return (
    <React.Fragment>
      <Navbar/>
      <div className="login section">
        <h1 className="section__title">Login to your account</h1>
        <p>Please login with facebook to get access to creating new events</p>
        <button className="btn" onClick={props.firebase.doSignInWithFacebook}>Login with Facebook</button>
        <button className="btn" onClick={props.firebase.doSignOut}>Sign out</button>
      </div>
    </React.Fragment>
  )
}

export default withFirebase(Login);