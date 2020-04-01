import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { createLocation, createMemoryHistory } from 'history';
import { match as routerMatch } from 'react-router';

import App from './App'
import store from './store'
import { AuthProvider } from './hooks/useAuth'
import * as serviceWorker from './serviceWorker'
import './theme.css'
defineCustomElements(window);
const history = createMemoryHistory()

ReactDOM.render(
  <Provider store={store}>
      <AuthProvider>
        <App history={history} />
      </AuthProvider>
  </Provider>,

  document.getElementById('root')
)
serviceWorker.unregister()
