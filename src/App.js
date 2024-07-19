// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/Register';
import Catalogue from './components/Catalogue';
import Cart from './components/Cart';
import Contact from './components/Contact';
import About from './components/About';
import './components/style.css'; // Import the common styles
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext'; // Import UserProvider

function App() {
  return (
    <UserProvider> {/* Wrap with UserProvider */}
      <CartProvider>
        <Router>
          <div className="app-container">
            <Header />
            <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
