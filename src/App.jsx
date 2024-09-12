import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Product from './routes/Product';
import Cart from './routes/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>);
}

const NotFound = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold">404 - Not Found</h1>
    <p className="mt-4">The page you are looking for does not exist.</p>
  </div>
);

export default App;
