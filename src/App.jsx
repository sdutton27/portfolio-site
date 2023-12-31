import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Projects from './views/Projects/Projects';
import Color from './views/Color/Color';
import Contact from './views/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { animateScroll } from 'react-scroll';
import { useLocation } from 'react-router-dom/dist';


export default function App() {
  const location = useLocation()
    useEffect(() => {
      animateScroll.scrollToTop({
        duration: 0
      });
  }, [location.pathname]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/color' element={<Color/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

