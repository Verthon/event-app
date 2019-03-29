import React from 'react';
import Navbar from './Navbar';

const Login = (props) => {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="login">
        <h1>Login to your account</h1>
        <p>Please login with facebook to get access to creating new events</p>
        <button className="btn" onClick={() => props.authenticate("Facebook")}>Login with Facebook</button>
      </div>
    </React.Fragment>
  )
}

export default Login;