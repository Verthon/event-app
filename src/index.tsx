import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import { createMemoryHistory } from 'history'

import App from './App'
import store from './store'
import * as serviceWorker from './serviceWorker'
import './theme.css'
defineCustomElements(window)
const history = createMemoryHistory()

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,

  document.getElementById('root')
)
serviceWorker.unregister()
