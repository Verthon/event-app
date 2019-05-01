import React from 'react';
import EventItem from "./EventItem";
import Navbar from './Navbar';
import Search from './Search';
import { withFirebase } from './Firebase';

class Events extends React.Component {
  state ={
    events: false,
    query: '',
  }

  componentDidMount() {
    const {db} = this.props.firebase;
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
      let filteredEvents = this.state.events.filter(
        (event) => {
          return event.title.toLowerCase().indexOf(this.state.query) !== -1;
        }
      );
      eventContainer = (
        <div className="row">
          {filteredEvents.map((event, id) => {
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
                featuredImage={event.featuredImage}
              />
            );
          })}
        </div>
      );
    }


    return(
      <React.Fragment>
        <Navbar/>
        <section className="section section__events">
          <h1 className="section__title">Events list</h1>
          <Search query={this.state.query} changed={this.searchQueryHandler}/>
          {this.state.events ? eventContainer : <div className="loader__wrapper"><div className="loader"></div></div>}
        </section>   
      </React.Fragment>    
    )
  }
}

export default withFirebase(Events);