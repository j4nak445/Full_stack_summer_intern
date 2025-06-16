import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <span>Copyright {new Date().getFullYear()} MyBrand. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;