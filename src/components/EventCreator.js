import React, { Component } from "react";
import Navbar from "./Navbar";
import {withFirebase} from "./Firebase"
import {SIGN_IN, EVENTS} from '../constants/routes';
import {formatDay} from '../helpers';
import {SectionEvents} from '../components/Section';
import {Title} from '../components/Title';
import {Button} from '../components/Button';
import {Input, Label, Select, Textarea, DatePicker} from '../components/Inputs';
import {CreatorModal} from './styles/components';

class EventCreator extends Component {
  constructor(props) {
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
    this.state = {
      title: "",
      host: "",
      localization: "",
      description: "",
      categories: ["Sport", "Music", "Education", "Business", "Food&Drink"],
      category: "Sport",
      imageUrl: "",
      day: new Date(),
      hour: "13:00",
    };
  }

  componentDidMount() {
    if(this.props.firebase.auth.currentUser === null){
      this.props.history.push(SIGN_IN);
    };
  }

  submitEvent = (e) => {
    e.preventDefault();
    const eventRef = this.props.firebase.db.collection("events").doc();
    eventRef.set({
      title: this.state.title,
      host: this.state.host,
      localization: this.state.localization,
      description: this.state.description,
      category: this.state.category,
      day: this.state.day,
      hour: this.state.hour,
      featuredImage: this.state.imageUrl,
      uid: this.props.firebase.auth.currentUser.uid
    });
    const cityRef = this.props.firebase.db.collection("cities").doc();
    
    const userRef = this.props.firebase.db.collection("users").doc();
    userRef.set({
      user: this.state.host,
      uid: this.props.firebase.auth.currentUser.uid
    });
    //After sending data to database redirect to /events
    this.props.history.push(EVENTS);
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  dayPickerHandler = date => {
    date = formatDay(date);
    this.setState({
      day: date
    })
  }

  render() {
    
    const {title, host, localization, description, category, categories, day, hour, imageUrl} = this.state;
    return (
          <React.Fragment>  
            <Navbar/>
            <SectionEvents>         
              <Title>Create your event</Title>
              <CreatorModal>
                <form action="" onSubmit={e => this.submitEvent(e)}>
      
                  <Label htmlFor="title">
                    event name
                  </Label>
                  <Input
                    placeholder="eg. Football Event"
                    type="text"
                    name="title"
                    required
                    value={title}
                    onChange={e => this.changeHandler(e)}
                  />
    
                  <Label htmlFor="host">
                    event host
                  </Label>
                  <Input
                    className="input"
                    placeholder="eg. Company"
                    type="text"
                    name="host"
                    required
                    value={host}
                    onChange={e => this.changeHandler(e)}
                  />
    
                  <Label htmlFor="localization">
                    event localization
                  </Label>
                  <Input
                    placeholder="eg. Bielsko-Biała, Poland"
                    type="text"
                    name="localization"
                    required
                    value={localization}
                    onChange={e => this.changeHandler(e)}
                  />
    
                  <Label htmlFor="category">categories</Label>
                  <Select name="category" id="" value={category} 
                  onChange={e => this.changeHandler(e)} required>
                    {
                    categories.map((cat, id) => {
                      return (
                        <option key={id} value={cat}>{cat}</option>
                      )
                    })
                    }
                  </Select>
    
                  <Label htmlFor="image-url">
                    image URL
                  </Label>
                  <Input type="text" name="imageUrl" 
                  placeholder="eg. https://source.unsplash.com/weekly?water" 
                  value={imageUrl} 
                  onChange={e => this.changeHandler(e)} 
                  />
    
                  <Label htmlFor="day">Date</Label>
                  <DatePicker 
                  name="day"
                  placeholder="DD/MM/YYYY" format="DD/MM/YYYY" 
                  value={day}
                  onDayChange={day => this.dayPickerHandler(day)}
                  inputProps={
                    { required: true }
                  } 
                  onChange={e => this.changeHandler(e)}
                  required
                  />
    
                  <Label htmlFor="hour">hour</Label>
                  <Input type="time" name="hour" 
                  value={hour} 
                  required
                  onChange={e => this.changeHandler(e)}
                  />
    
                  <Label htmlFor="description">
                    event description
                  </Label>
                  <Textarea
                    className="input input--textarea"
                    name="description"
                    placeholder="Event Description"
                    id=""
                    cols="20"
                    rows="10"
                    required
                    value={description}
                    onChange={e => this.changeHandler(e)}
                  />
    
                  <Button type="submit">
                    Submit event
                  </Button>
                </form>
              </CreatorModal>
            </SectionEvents>
          </React.Fragment>
          )
        }
  }

export default withFirebase(EventCreator);