import React, { useState, useEffect, useContext, createContext } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth'

const AuthContext = React.createContext(null)

// Provider component that wraps your app and makes auth object ...

// ... available to any child component that calls useAuth().

export function AuthProvider({ children }: any) {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
const useAuth = () => useContext(AuthContext)

function useProvideAuth() {
  const [user, setUser] = useState(null)

  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const facebookProvider = new firebase.auth.FacebookAuthProvider()

  const loginWithGoogle = () => {
    return firebase.auth().signInWithPopup(googleProvider)
  }

  const loginWithFacebook = () => {
    return firebase.auth().signInWithPopup(facebookProvider)
  }

  const signout = async () => {
    await firebase.auth().signOut()
    setUser(false)
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })
    return () => unsubscribe()
  }, [])

  return {
    user,
    loginWithFacebook,
    loginWithGoogle,
    signout,
  }
}
export default useAuth
