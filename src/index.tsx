import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import { createMemoryHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/Theme'

import App from './App'
import store from './store'
import * as serviceWorker from './serviceWorker'
import './theme.css'
defineCustomElements(window)
const history = createMemoryHistory()


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App history={history} location={null} match={null} />
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
)
serviceWorker.unregister()
