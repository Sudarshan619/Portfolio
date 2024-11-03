import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './component/navbar';
import Projects from './component/projects';
import Skills from './component/skills';
import Certification from './component/certification';
import Home from './component/home';

import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Router>
        <header className="nav-bar">
          <div className="logo">
            
            <Navbar />
          </div>
          
          <div className='content'>
          
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/certification" element={<Certification />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />

            </Routes>
          </div>
          </header> 
         </Router>
         
    </div>
  );
}

export default App;
