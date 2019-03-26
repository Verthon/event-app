import React from "react";
import Navbar from './Navbar';
import {AppContext} from '../CentralStore';
import {EventContext} from './EventItem';

const Event = () => {
  return (
    <React.Fragment>
      <EventContext.Consumer>
        {
          (context) => (console.log(context))
        }
      </EventContext.Consumer>
      <AppContext.Consumer>
        {(context) => (console.log(context))

        }    
      </AppContext.Consumer>
    </React.Fragment>
  );
};

export default Event;
