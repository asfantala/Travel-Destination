
import './App.css';
import Home from './components/home/Home';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tourdetails from './components/TourDetails/Tourdetails';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="city/:id" element={<Tourdetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
