import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import About from "./Components/Pages/About/About"
import Home from "./Components/Pages/Home/Home"
import Checkout from "./Components/Pages/Checkout/Checkout"
import Landing from "./Components/Pages/Landing/Landing"
import Profile from "./Components/Pages/Profile/Profile"
import Store from "./Components/Pages/Store/Store"
import Header from "./Components/Header/Header"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/store" element={<Store />} />
        {/* Redirect all other paths to Landing or a 404 Not Found component */}
      </Routes>
   
    </Router>
  );
}

export default App
