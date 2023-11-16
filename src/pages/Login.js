import React, { useContext, useState } from "react";
//import { Context } from "../Context/AuthContext";
import axios from "../api/axios";

export default function Login() {
  //const { authenticated, handleLogin } = useContext(Context);
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleLogin() {
    const { data } = await axios.post('/login', { username: username, password: password })

    console.log(data);
    return data;
  }

  return (
    <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <section className="formArea">
        <form className="box" onSubmit={ async (e) => {
          e.preventDefault();
          
          handleLogin();
        }}>

          <p>Insira o seu usuário!</p>
          <input
          placeholder="Usuário"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={username} />

          <p>Insira a sua senha!</p>
          <input
          placeholder="Senha"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password} />

          <button type="submit"> Login </button>
        </form>
      </section>
    </main>
  );
};