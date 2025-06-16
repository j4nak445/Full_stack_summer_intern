import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;