// components/Catalogue.js
import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Catalogue = () => {
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [notification, setNotification] = useState('');

  const handleAddToCart = (product) => {
    if (isLoggedIn()) {
      addToCart(product);
      setNotification(`${product.name} has been added to the cart.`);
      setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    } else {
      alert(`You need to login before adding items to the cart. Click OK to go to the login page.`);
      navigate('/login');
    }
  };

  const products = [
    { id: 1, name: 'Product 1', imageUrl: 'https://m.media-amazon.com/images/I/71LO5NgRi7L._AC_UF1000,1000_QL80_.jpg', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', imageUrl: 'https://m.media-amazon.com/images/I/41b-QhlNe1L._AC_UF894,1000_QL80_.jpg', description: 'Description 2', price: 20 },
    { id: 3, name: 'Product 3', imageUrl: 'https://nerdarena.in/cdn/shop/files/3_4aa06562-e5b8-42c3-a269-f6ed1c5296f2.jpg?v=1696429302', description: 'Description 3', price: 30 },
    { id: 4, name: 'Product 4', imageUrl: 'https://kpopmerch.com/cdn/shop/files/enhypen-album-enhypen-romance-untold-engene-ver-37918932828341.jpg?v=1718605737', description: 'Description 4', price: 40 },
    { id: 5, name: 'Product 5', imageUrl: 'https://images-cdn.ubuy.co.in/6606d3ce86e1a407ba75c736-enhypen-dark-blood-album-full-half-new.jpg', description: 'Description 5', price: 50 },
    { id: 6, name: 'Product 6', imageUrl: 'https://img.joomcdn.net/676d902a87a0f3b35ab4284e187da8451ffb3127_original.jpeg', description: 'Description 6', price: 60 },
    // Add more products as needed
  ];

  return (
    <div className="container mt-5">
      {notification && <div className="alert alert-success">{notification}</div>}
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button onClick={() => handleAddToCart(product)} className="btn btn-dark">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
