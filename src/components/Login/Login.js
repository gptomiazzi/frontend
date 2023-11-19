import React, { useState } from "react";
import axios from "../../api/axios";
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
import {
  LoginFormContainer,
  LoginTitle,
  LoginInput,
  LoginButton,
} from './LoginStyled';

const Login = () => {
  const history = useHistory();
  const { updateToken } = useAuth();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleLogin() {
    axios.post('/login', { username: username, password: password })
    .then(async (res) => {
      try {
        const serverData = await res.data;
        const token = serverData.accessToken;
        
        updateToken(token);
        history.push('/home');
        
        console.log(token);
      } catch (error) {
        console.log('Login failed', error);
        updateToken(null);
      }
    })
  };

  return (
    <LoginFormContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginInput
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <LoginInput
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleLogin}>Login</LoginButton>
    </LoginFormContainer>
  );
};

export default Login;