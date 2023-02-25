import React from 'react';
import { useState } from 'react';
import './Login.css';





const LoginForm = () => {

  const [show, setShow] = useState(0);
  const [input, setInput] = useState('');
  const pass = '1234';
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleLogin = (e) => {
    e.preventDefault();
    input === pass ?  setShow(1) : setShow(2);
  }

  return (
    <div className="container">
      <div className='box'>
        <form  onSubmit={handleLogin} className='form'>
        <h2>Sign in</h2>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>Username</span>
          <i></i>
        </div>

        <div className="inputBox">
          <input value={input} onChange={handleChange} type="password" id='pass' required="required" /> 
          <span>Password</span> <br/>
          {show === 2 && <span id='errorPass'>*Incorrect Password</span>}
          <i></i>
        </div>
        <br />
        <div className='links'>
          <a href="">Forgot Password</a>
          <a href="">Sign up</a>
        </div>
        <input type="submit"/>
        </form>
      </div>

    </div>

  )
}

export default LoginForm
