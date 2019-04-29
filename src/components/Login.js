import React from 'react';
import Navbar from './Navbar';
import {withFirebase} from './Firebase';
import {ACCOUNT} from '../constants/routes';

const Login = (props) => {

  const loginWithSocial = (provider) => {
    props.firebase[`doSignInWith${provider}`]();
    props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? props.history.push(ACCOUNT)
          : null
      },
    );
  } 

  return (
    <React.Fragment>
      <Navbar/>
      <div className="login section">
        <h1 className="section__title">Login to your account</h1>
        <p>Please login with facebook to get access for creating new events</p>
        <button className="btn" onClick={() => loginWithSocial('Facebook')}>Login with Facebook</button>
        <button className="btn" onClick={() => loginWithSocial('Google')}>Login with Google</button>
      </div>
    </React.Fragment>
  )
}

export default withFirebase(Login);