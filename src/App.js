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

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

        db
          .collection('user').doc(authUser.email)
          .set({
            id: authUser.uid,
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
  }, [])

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
