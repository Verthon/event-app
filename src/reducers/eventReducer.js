import * as types from './actions';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.SEND_EVENT_DATA:
      return{
        event: state.event
      }
    case types.ADD_EVENT_DATA:
      return{
        events: state.events
      }  
    default:
      return state  
  }
}

export default reducer;