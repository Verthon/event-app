import * as types from './actions';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.SEND_EVENT_DATA:
      return {
        ...state, event: action.payload
      }
    case types.ADD_EVENT_DATA:
      return{
        ...state, events: action.payload
      }  
    default:
      return state  
  }
}

export default reducer;