import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./history";

import { AuthProvider } from "./Context/AuthContext";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Navigation from "./components/Navigation/Navigation";

export const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router history={history}>
        <Navigation />
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;