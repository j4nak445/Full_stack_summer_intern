import React from 'react'
import Navbar from './components/Navbar';
import Dummy from './components/Dummy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dummy" element={<Dummy />} />
      </Routes>
    
    </Router>
  )
}

export default App