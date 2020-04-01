import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { SIGN_IN } from '../constants/routes'
import useAuth from '../hooks/useAuth'

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  restrictedPath: string;
  authenticationPath: string;
}

export const ProtectedRoute = ({ children, ...rest }: any) => {
  const auth = useAuth()
  console.log('auth in ProtectedRoute', auth)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: SIGN_IN,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute
