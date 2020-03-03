import React, { useEffect, useState } from 'react';
import { withFirebase } from '../firebase'
import { base } from '../firebase/firebase'

export const AuthContext = React.createContext(null)

export const AuthProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    base.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
  <AuthContext.Provider value={currentUser}>{props.children}</AuthContext.Provider>
  )
}

const Auth = () => {
  return (
    <div>

    </div>
  );
};

export default withFirebase(Auth);