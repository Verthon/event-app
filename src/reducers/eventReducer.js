import * as types from './actions';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.SEND_EVENT_DATA:
      console.log('reducer', action)
      return {
        ...state, event: action.payload
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