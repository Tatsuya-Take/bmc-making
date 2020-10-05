import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../firebase';
import './Register.css';
const crypto = require('crypto');

function Register() {
  const history = useHistory();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const digestHash = (message) => {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    return hash;
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {

        if (auth) {
          auth.user.updateProfile({
            displayName: displayName
          })
          
          const userHash = digestHash(email);

          db.collection('user').doc(userHash)
          .set({
            displayName: displayName,
            email: email,
            userHash: userHash,
            isOnline: true
          })

          history.push(`/canvas/${displayName}/`)
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="register">
      <div className="register__container">
        <form action="submit">
          <h2>Sign Up</h2>
          <h3>User name</h3>
          <input type="text" onChange={(e) => setDisplayName(e.target.value)} placeholder="input user name displayed in this app" />
          <h3>E-mail</h3>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="input E-mail address"/>
          <h3>Password</h3>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="input your password"/>

          <button onClick={register} className="register__signUpButton">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Register;
