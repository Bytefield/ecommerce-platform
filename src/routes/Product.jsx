// src/routes/Product.jsx
// src/routes/Product.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();

    if (!id) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold">Product Not Found</h1>
                <p className="mt-4">The product you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <header>
                <h1 className="text-4xl font-bold">Product Details for Product {id}</h1>
            </header>
            <main>
                <p className="mt-4">This is where the product details will be displayed.</p>
            </main>
        </div>
    );
};

export default Product;
