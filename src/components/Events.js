import React from 'react';
import EventItem from "./EventItem";
import Navbar from './Navbar';
import Search from './Search';
import {db} from "./Firebase";

class Events extends React.Component {
  state ={
    events: false,
    query: '',
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

  searchQueryHandler = e => {
    this.setState({
      query: e.target.value
    });
  };

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
          <h1 className="section__title">Events list</h1>
          <Search query={this.state.query} changed={this.searchQueryHandler}/>
          {this.state.events ? eventContainer : <div className="loader__wrapper"><div className="loader"></div></div>}
        </section>   
      </React.Fragment>    
    )
  }
}

export default Events;