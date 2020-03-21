import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthProvider } from '../hooks/Auth'
import { SIGN_IN } from '../constants/routes'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const auth = false
  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: SIGN_IN
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
