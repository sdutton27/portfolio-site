import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </div>
  );
}

