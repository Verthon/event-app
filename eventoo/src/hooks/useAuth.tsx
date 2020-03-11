import React from 'react'
import {base} from '../firebase/firebase'

const useAuth = () => {

  const checkIfAuth = () => {
    const user = base.auth().currentUser 
    return { initializing: !user, user, } 
  }
  const [state, setAuthUser] = React.useState(checkIfAuth())
  const onChange = (user: any) => {
    setAuthUser({ initializing: false, user })
  }

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = base.auth().onAuthStateChanged(onChange)
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  return state
}

export default useAuth;