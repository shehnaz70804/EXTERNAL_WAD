// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import CSS file

const Home = () => {
  return (
    <div className="home-content">
      <h2>Home Page</h2>
      <p>Welcome to our e-commerce website!</p>
      <h6>See our products <Link to="/catalogue">Catalogue</Link></h6>
    </div>
  );
};

export default Home;
