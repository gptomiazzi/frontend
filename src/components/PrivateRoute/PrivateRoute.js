import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const AuthenticateRoute = ({ children }) => {
  const { token } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push('/notauth');
    }
  }, [token, history]);

  return token ? <>{children}</> : null;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <AuthenticateRoute>
      <Route
        {...rest}
        render={(props) => token ? <Component {...props} /> : <Redirect to='/login' />}
        />
    </AuthenticateRoute>
  );
};

export default PrivateRoute;