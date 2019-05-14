import React from "react";
import Navbar from "./Navbar";
import { withFirebase } from "./Firebase";
import { SIGN_IN, HOME } from "../constants/routes";
import { Link } from "react-router-dom";
import EventItem from "../components/EventItem";
import Modal from '../components/Modal';
import {Title} from '../components/Title';
import {Row} from '../components/styles/components';
import {Button} from '../components/Button';
import {SectionEvents} from '../components/Section';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      events: false,
      show: false,
      currentEvent: false,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.setState({ authUser }, authUser => {
          if (authUser !== null) {
            const { db } = this.props.firebase;
            db.collection("events")
              .where("uid", "==", this.props.firebase.auth.currentUser.uid)
              .get()
              .then(querySnapshot => {
                const events = [];
                querySnapshot.docs.forEach(doc => {
                  events.push(doc.data());
                });
                //Check if array is empty
                if(events.length !== 0){
                  this.setState({
                    events: events
                  })
                }else{
                  this.setState({
                    events: false
                  });
                }
                
              });
          }
        });
      } else {
        this.props.history.push(SIGN_IN);
      }
    });
  }

  SignOut = () => {
    this.props.firebase.doSignOut();
    this.props.history.push(HOME);
  };

  removeEvent = (event) => {
    this.setState(state => ({
      show: !state.show,
      currentEvent: event
    }));  
  }

  removePermanently = (image) => {
    this.setState({events: this.state.events.filter( person => person.featuredImage !== image)});
    const { db } = this.props.firebase;
    db.collection("events")
      .where("featuredImage", "==", this.state.events.featuredImage)
      .get()
      .then(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
          db.collection("events").doc(doc.id).delete()
          });
        })
      .catch(error => console.log(error))
  }

  updateEvent = () => {
    
  }

  closeModal = () => {
    this.setState({show: false});
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    let eventContainer = null;
    if (this.state.events) {
      eventContainer = (
        <Row>
          {this.state.events.map((event, id) => {
            return (
              <React.Fragment key={id}>
                <EventItem
                  key={id}
                  title={event.title}
                  localization={event.localization}
                  host={event.host}
                  day={event.day}
                  hour={event.hour}
                  description={event.description}
                  category={event.category}
                  featuredImage={event.featuredImage}
                />
                <footer className="row event-item__footer">
                  <Button onClick={() => this.removeEvent(event, id)}>Remove event</Button>
                  {/* <button className="btn" onClick={this.updateEvent}>Edit event</button> */}
                </footer>
             </React.Fragment>
            );
          })}
        </Row>
      );
    }
    return (
      <React.Fragment>
        <Navbar />
        <Modal show={this.state.show} 
          close={this.closeModal} 
          title="Are you sure ?"
          description="Do you really want to delete this event? This process cannot be undone.">
            <Button onClick={this.closeModal}>Cancel</Button>
            <Button onClick={() => this.removePermanently(this.state.currentEvent.featuredImage)}>Remove</Button>
          </Modal>
        <SectionEvents>
          <Title>Account</Title>
          <img
            className="account__image"
            src={
              this.state.authUser ? (
                this.state.authUser.photoURL
              ) : (
                <div className="loader__wrapper">
                  <div className="loader" />
                </div>
              )
            }
            alt=""
          />
          <h2 className="account__name">
            Hey,{" "}
            {this.state.authUser ? (
              this.state.authUser.displayName
            ) : (
              <div className="loader__wrapper">
                <div className="loader" />
              </div>
            )}
          </h2>
          <p className="account__text">
            {this.state.authUser ? this.state.authUser.email : null}
          </p>
          <p className="account__text">You can manage your account here. </p>
          <Button onClick={this.SignOut}>
            Sign out
          </Button>
          <Title>Your events</Title>
          {this.state.events ? (
            eventContainer
          ) : (
            <React.Fragment>
              <p>You currently don't have any events. Don't hestitate, add one, using button below!</p>
              <Link to="/create-event">
              <Button>Add event</Button>
              </Link>
            </React.Fragment>
          )}
        </SectionEvents>
      </React.Fragment>
    );
  }
}

export default withFirebase(Account);
