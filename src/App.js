import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home';
import TourDetail from './components/TourDetails/Tourdetails.js';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/header/header.js'

function App() {
  return (
    
      <div className="App">
      {/* <Header/> */}
      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="city/:id" element={<TourDetail />} /> */}
    <Home/>
    
          </Routes>
          </BrowserRouter>

      </div>
    
    
  );
}

export default App;
