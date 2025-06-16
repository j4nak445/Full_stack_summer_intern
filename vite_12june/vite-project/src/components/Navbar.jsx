import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> {" "}
    <Link to="/apijson">Apijson</Link> {" "}
    <Link to="/details/1">DetailPage</Link> {" "}
    <Link to="/effect">Effect</Link> {" "}
    <Link to="/loginform">Login</Link> {" "}
    <Link to="/signup">Signup</Link>
  </nav>
);

export default Navbar;