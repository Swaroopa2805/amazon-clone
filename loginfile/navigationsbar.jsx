import React, { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>{`
        /* General Reset */
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        /* Navbar Styles */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #232f3e; /* Amazon's navbar color */
          padding: 10px 20px;
          position: relative;
        }

        .navbar .logo img {
          height: 40px; /* Adjust logo size */
        }

        .navbar .menu {
          display: flex;
          gap: 20px;
        }

        .navbar .menu a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          padding: 8px 12px;
          transition: background-color 0.3s;
        }

        .navbar .menu a:hover {
          background-color: #37475a;
          border-radius: 5px;
        }

        /* Hamburger Menu Icon */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger div {
          width: 25px;
          height: 3px;
          background-color: white;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .menu {
            display: none;
            flex-direction: column;
            gap: 15px;
            background-color: #232f3e;
            position: absolute;
            top: 50px;
            right: 20px;
            width: 200px;
            border-radius: 5px;
            padding: 10px;
          }

          .menu.active {
            display: flex;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          {/* Amazon Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
          />
        </div>
        <div className={`menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
}

export default App;
