import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Firebase, { FirebaseContext } from './firebase'
import { AuthProvider } from './components/Auth'
import * as serviceWorker from './serviceWorker'
import './theme.css'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </FirebaseContext.Provider>,

  document.getElementById('root')
)
serviceWorker.unregister()
