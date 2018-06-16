import React, {Component} from 'react';
import './EventContainer.css';
import Event from '../Event/Event';

class eventContainer extends Component {

  constructor(){
    super();
    this.showEvent = this.showEvent.bind(this);
    this.state = {
      showEvent: false
    };
  }

  showEvent = () =>{
    console.log(this);
    this.setState = ({
      showEvent: !this.state.showEvent
    });
  }

  
  render(){
    return (
    <div className="event-container" onClick={this.showEvent}>
      <img className="event-container__image" src={this.props.img} alt="default"/>
      <div className="event-container__date">
        <time className="time-container">{this.props.date}</time>
        <time className="time-container">{this.props.time}</time>
      </div>
      <h2 className="event-container__title">{this.props.title}</h2>
      <div className="event-container__meta"> 
        <p>{this.props.host}</p>
        <strong>{this.props.localization}</strong>
      </div>
      <span className="event-container__category"> {this.props.category}</span>
      {this.state.showEvent ? <Event/> : null}
    </div>
    
    );
  }

}

export default eventContainer;