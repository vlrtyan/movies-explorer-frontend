import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthorizedRoute = ({ loggedIn, children, ...props }) => {
  return (
    <Route  {...props}>
      {loggedIn ? <Redirect to='/' /> : children}
    </Route>
  )
}

export default AuthorizedRoute;