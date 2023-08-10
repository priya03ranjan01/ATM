import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import Login from './component/Login.js'
import Card from './component/Card.js'

class App extends Component {
  render() {
      return (
      <Router>
          <div className="App">
              <ul className="App-header">
              <li>
                  <Link to="/">Login</Link>
              </li>
              <li>
                  <Link to="/dashboard">Dashboard</Link>
              </li>
              </ul>
          <Routes>
                  <Route exact path='/' element={< Login />}></Route>
                  <Route exact path='/dashboard' element={< Card />}></Route>
          </Routes>
          </div>
      </Router>
  );
  }
  }
    
export default App;
