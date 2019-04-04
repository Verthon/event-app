import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducers';
import registerServiceWorker from './registerServiceWorker';
//import Firebase, {FirebaseContext} from './components/Firebase';

const store = createStore(reducer);

ReactDOM.render(
  // <FirebaseContext.Provider value={new Firebase()}>
  //   <Router/>
  // </FirebaseContext.Provider>,
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
