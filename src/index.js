import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import eventReducer from './reducers/eventReducer';
import registerServiceWorker from './registerServiceWorker';
import Firebase, {FirebaseContext} from './components/Firebase';
import GlobalStyles from './assets/styles/GlobalStyles';

const store = createStore(eventReducer);

ReactDOM.render(
  
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
    <GlobalStyles/>
     <Router/>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
  
);
registerServiceWorker();
