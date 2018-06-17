import React, {Component} from 'react';
import './EventContainer.css';
import Event from '../Event/Event';

class eventContainer extends Component {

  constructor(){
    super();
    this.showEvent = this.showEventHandler.bind(this);
    this.closePreview = this.closePreview.bind(this);
    this.state = {
      showEvent: false
    };
  }

  showEventHandler = () => {
    console.log(this.state.showEvent);
    this.setState = ({
      showEvent: !this.state.showEvent
    });
    console.log(this.state.showEvent);
  }

  closePreview = () => {
    console.log(this);
    this.setState = ({
      showEvent: false
    });
  }

  
  render(){
    return (
    <div className="event-container" onClick={this.showEventHandler}>
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
      {this.state.showEvent ? <Event onClick={this.closePreview}/> : null}
    </div>
    
    );
  }

}

export default eventContainer;