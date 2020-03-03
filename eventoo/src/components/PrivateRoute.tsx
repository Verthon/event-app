import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './Auth' 
import { SIGN_IN } from '../constants/routes'

const PrivateRoute = (RouteComponent: any, ...rest: any) => {
  const {currentUser} = useContext(AuthContext)
  console.log('component from app', RouteComponent)
  console.log('rest of the props', ...rest)
  return (
    <Route
      {...rest}
      render={(routeProps: any) => 
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={SIGN_IN}/>
        )
        
        }
    />
  );
};

export default PrivateRoute;