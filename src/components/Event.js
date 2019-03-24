import React from 'react';
import {AppContext} from '../CentralStore'

const Event = () => {
  return (
      <div className="event">
         <AppContext.Consumer>
          {(context) => (
            
            console.log(context)
          )}
        </AppContext.Consumer> */}
      </div>
  );
}

export default Event;