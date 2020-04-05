import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from './LoginForm/LoginForm';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={LoginForm}/>
      </div>
    </Router>
  );
}

export default App;
