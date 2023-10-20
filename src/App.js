import React from 'react';
import Header from './components/header';
import './App.css'; 
import Footer from './components/footer';

import Courses from './components/courses';
import Detail from './components/detail';
// import ContactUs from './components/contactus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Combine imports

import Home from './pages/Home';
import Contactus from './pages/Contactus'; // Correct import path

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
