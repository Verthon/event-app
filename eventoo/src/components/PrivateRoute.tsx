import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthProvider } from './Auth' 
import { SIGN_IN } from '../constants/routes'

const PrivateRoute = (RouteComponent: any, ...rest: any) => {
  //const {currentUser} = null
  console.log('component from app', RouteComponent)
  console.log('rest of the props', ...rest)
  // return (
  //   <Route
  //     {...rest}
  //     render={(routeProps: any) => 
  //       !!currentUser ? (
  //         <RouteComponent {...routeProps} />
  //       ) : (
  //         <Redirect to={SIGN_IN}/>
  //       )
        
  //       }
  //   />
  // );
};

export default PrivateRoute;