import { createContext, useState } from "react";

import api from '../api/axios';

const Context = createContext();

function AuthProvider({ children }) {
  const [ authenticated, setAuthenticated ] = useState(false);
  const credentials = { username: "gabriel", password: "123"};

  async function handleLogin() {
    const { data } = await api.post('/login', credentials);

    console.log(data);
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };