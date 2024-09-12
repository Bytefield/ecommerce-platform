import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://localhost:27017/api/products');
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Welcome to Our E-Commerce Platform</h1>
            <p className="mt-4">Browse our products and enjoy shopping!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {products.map((product) => (
                    <div key={product._id} className="border p-4 rounded">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                        <h2 className="text-2xl font-bold mt-2">{product.name}</h2>
                        <p className="mt-2">{product.description}</p>
                        <p className="mt-2 font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;