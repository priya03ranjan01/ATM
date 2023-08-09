import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import './App.css';
//import NoPage from './component/NoPage';

function App() {
  return (

<BrowserRouter>
      <Routes>
          <Route index element={<About />} >
          <Route path="contact" element={<Contact />} />
          
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
