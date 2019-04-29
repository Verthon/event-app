import React from 'react';
import Navbar from './Navbar';
import {withFirebase} from './Firebase';
import {ACCOUNT, HOME} from '../constants/routes';

const Login = (props) => {

  const loginWithFacebook = () => {

    if(props.history === undefined){
      loginWithFacebook();
    }
    props.firebase.doSignInWithFacebook();
    window.setTimeout(() => props.history.push(ACCOUNT), 3000)
  }

  return (
    <React.Fragment>
      <Navbar/>
      <div className="login section">
        <h1 className="section__title">Login to your account</h1>
        <p>Please login with facebook to get access for creating new events</p>
        <button className="btn" onClick={loginWithFacebook}>Login with Facebook</button>
      </div>
    </React.Fragment>
  )
}

export default withFirebase(Login);