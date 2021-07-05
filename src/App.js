import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Main/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
