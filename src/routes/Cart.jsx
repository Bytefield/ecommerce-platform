// src/routes/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Your Cart</h1>
            <ul className="mt-4">
                {cartItems.length === 0 ? (
                    <li>Your cart is empty.</li>
                ) : (
                    cartItems.map((item) => (
                        <li key={item.id} className="mt-2">
                            {item.name}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Cart;
