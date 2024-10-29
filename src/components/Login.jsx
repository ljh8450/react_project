import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ loginHandler, setUserInfo }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const loginRequestHandler = () => {
    axios
      .post(
        'http://localhost:3000/users/login',
        {
          userId: username,
          password: password,
        },
        { 'Content-Type': 'application/json', withCredentials: true }
      )
      .then((res) => {
        loginHandler(true);
        return axios.get('http://localhost:3000/users/userinfo', {
          withCredentials: true,
        });
      })
      .then((res) => {
        const { userId, email } = res.data.data;
        setUserInfo({ userId, email });
      })
      .catch((err) => alert(err));
  };

  return (
    <div className='loginContainer'>
      <div className='inputField'>
        <div>Username</div>
        <input
          name='username'
          onChange={inputHandler}
          value={username}
          type='text'
        />
      </div>
      <div className='inputField'>
        <div>Password</div>
        <input
          name='password'
          onChange={inputHandler}
          value={password}
          type='password'
        />
      </div>
      <div className='passwordField'>
        <button onClick={loginRequestHandler} className='loginBtn'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;