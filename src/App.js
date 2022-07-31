import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import About from './pages/About.js'
import Error from './pages/Error.js'
import Home from './pages/Home.js'
import SingleBeer from './pages/SingleBeer.js'

export default function App(props){
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='beer/:id' element={<SingleBeer />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      );
}
