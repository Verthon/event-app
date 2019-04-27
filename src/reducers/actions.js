export const SEND_EVENT_DATA = "SEND_EVENT_DATA";
export const ADD_EVENT_DATA = "ADD_EVENT_DATA";

export const send = event => ({type: SEND_EVENT_DATA, payload: event});
export const add = events => ({type: ADD_EVENT_DATA, payload: events});