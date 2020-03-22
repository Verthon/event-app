import React, { useContext } from 'react'
import { Redirect, Route, RouteProps, useLocation } from 'react-router'
import { SIGN_IN } from '../constants/routes'

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  restrictedPath: string;
  authenticationPath: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = props => {
  let redirectPath = '';
  if (!props.isAuthenticated) {
    redirectPath = props.authenticationPath;
  }
  if (props.isAuthenticated) {
    redirectPath = props.restrictedPath;
  }

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export default ProtectedRoute
