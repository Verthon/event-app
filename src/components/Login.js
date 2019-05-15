import React from 'react';
import Navbar from './Navbar';
import {withFirebase} from './Firebase';
import {ACCOUNT} from '../constants/routes';
import {Title} from './Title';
import {Section} from './Section';
import {Button} from './Button';

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
      <Section>
        <Title>Login to your account</Title>
        <p>Please login with facebook to get access for creating new events</p>
        <Button onClick={() => loginWithSocial('Facebook')}>Login with Facebook</Button>
        <br/><br/>
        <Button onClick={() => loginWithSocial('Google')}>Login with Google</Button>
      </Section>
    </React.Fragment>
  )
}

export default withFirebase(Login);