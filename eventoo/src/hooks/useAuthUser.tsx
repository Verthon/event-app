import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login, logout, selectCurrentUser} from '../reducers/auth'
import { auth } from '../firebase/firebase'

export default () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  console.log('current User in useAuth hook', currentUser)
  useEffect(() => {
    const setUser = (user: any) => {
      if(user) {
        dispatch(login({ uid: user.uid, email: user.email }))
      } else {
        dispatch(logout())
      }
    }
    const unsubscribe = auth.onAuthStateChanged(setUser)

    return () => unsubscribe()
  }, [dispatch])

  return currentUser
}