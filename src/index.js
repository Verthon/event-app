import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';
//import Firebase, {FirebaseContext} from './components/Firebase';

ReactDOM.render(
  // <FirebaseContext.Provider value={new Firebase()}>
  //   <Router/>
  // </FirebaseContext.Provider>,
  <Router/>,
  document.getElementById('root')
);
registerServiceWorker();
