import React, { useEffect } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Canvas from './Components/Canvas/Canvas';
import Widgets from './Components/Widgets/Widgets';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useStateValue } from './Components/Provider/StateProvider';
import { auth, db } from './firebase';
const crypto = require('crypto');

function App() {
  const [{}, dispatch] = useStateValue();

  const digestHash = (message) => {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    return hash;
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const userHash = digestHash(authUser.email);
        console.log(userHash);

        dispatch({
          type: 'SET_USER',
          user: authUser,
          email: authUser.email,
          userHash: userHash,
          isOnline: true
        })

        db
          .collection('user').doc(userHash)
          .set({
            displayName: authUser.displayName,
            isOnline: true
          })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        <>
          <div className="app__body">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/canvas/:userName/:canvasId">
                <Sidebar />
                <Canvas />
                <Widgets />
              </Route>
              <Route path="/">
                <Sidebar />
                <Canvas />
                <Widgets />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
