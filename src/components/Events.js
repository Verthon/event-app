import React from 'react';
import EventItem from "./EventItem";
import Navbar from './Navbar';
import {db} from "./Firebase";

class Events extends React.Component {
  state ={
    events: false,
  }

  componentDidMount() {
    db
    .collection("events")
    .get()      
    .then( querySnapshot => {
      const events = [];
      querySnapshot.docs.forEach(doc => {
        events.push(doc.data());
      });
      this.setState({
        events: events
      });
    });
  }

  render(){
    let eventContainer = null;
    if (this.state.events) {
      eventContainer = (
        <div className="row">
          {this.state.events.map((event, id) => {
            return (
              <EventItem
                key={id}
                title={event.title}
                localization={event.localization}
                host={event.host}
                day={event.day}
                hour={event.hour}
                description={event.description}
                category={event.category}
              />
            );
          })}
        </div>
      );
    }


    return(
      <React.Fragment>
        <Navbar/>
        <section className="section">
          <h1 className="section__title">Events</h1>
          {this.state.events ? eventContainer : <p>Loading...</p>}
        </section>   
      </React.Fragment>    
    )
  }
}

export default Events;