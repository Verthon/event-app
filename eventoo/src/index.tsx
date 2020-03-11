import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import App from './App'
import store from './store'
import Firebase, { FirebaseContext } from './firebase'
import { AuthProvider } from './components/Auth'
import * as serviceWorker from './serviceWorker'
import './theme.css'
defineCustomElements(window);
ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </FirebaseContext.Provider>
  </Provider>,

  document.getElementById('root')
)
serviceWorker.unregister()
