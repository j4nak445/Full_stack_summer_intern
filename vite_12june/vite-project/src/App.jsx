import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Apijson from './Components/Apijson';
import DetailPage from './Components/DetailPage';
import Effect from './Components/Effect';
import Loginform from './Loginform';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apijson" element={<Apijson />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/loginform" element={<Loginform />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;