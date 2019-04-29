import React from 'react';
import Navbar from './Navbar';
import {withFirebase} from './Firebase';
import {SIGN_IN, HOME} from '../constants/routes';
import {Link} from 'react-router-dom';

class Account extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      authUser: null
    }
  }

  componentDidMount(){
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.props.history.push(SIGN_IN);
      },
    );
  }

  SignOut = () => {
    this.props.firebase.doSignOut();
    this.props.history.push(HOME);
  }

  componentWillUnmount() {
    this.listener();
  }

  render(){
    console.log(this.state.authUser);
    return (   
      <React.Fragment>
        <Navbar/>
        <div className="account">
          <h1 className="title">Account</h1>
          <img className="account__image" src={this.state.authUser ? this.state.authUser.photoURL : <div className="loader__wrapper"><div className="loader"></div></div>} alt=""/>
          <h2 className="account__name">Hey, {this.state.authUser ? this.state.authUser.displayName : <div className="loader__wrapper"><div className="loader"></div></div>}</h2>
          <p className="account__text">{this.state.authUser ? this.state.authUser.email : null}</p>
          <p className="account__text">You can manage your account here.</p>
          <Link to="/create-event">
            <button className="btn btn--hero">Add event</button>
          </Link>
          <button className="btn" onClick={this.SignOut}>Sign out</button>
          
        </div>
      </React.Fragment>
    )
  } 
}

export default withFirebase(Account);