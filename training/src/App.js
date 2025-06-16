import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Carousel from './Components/Carousel';
import Dummyjson from './Components/Dummyjson';
import Counter from './Components/Counter';
import Effect from './Components/Effect';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Cards />
            <Home />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dummy" element={<Dummyjson />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/effect" element={<Effect />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App