import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const signIn = e => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      if (auth) {
        history.push(`/canvas/${auth.user.displayName}/`)
      }
    })
    .catch(error => alert(error.message))
  }

  const goToRegister = e => {
    e.preventDefault();
    history.push('/register');
  }

  return (
    <div className="login">
      <div className="login__container">
        <form action="submit">
          <h2>Sign In</h2>
          <h3>E-mail</h3>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="input E-mail address" />
          
          <h3>Password</h3>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="input your password" />
          <button onClick={signIn} className="login__signInButton">Sign In</button>
        </form>

        <button onClick={goToRegister} className="login__signUpButton">Sign Up</button>
      </div>
    </div>
  )
}

export default Login;
