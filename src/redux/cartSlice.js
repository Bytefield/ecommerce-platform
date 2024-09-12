// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            if (action.payload && action.payload.id) {
                state.items.push(action.payload);
            } else {
                console.error('Invalid payload for addItem:', action.payload);
            }
        },
        removeItem: (state, action) => {
            if (action.payload) {
                state.items = state.items.filter(item => item.id !== action.payload);
            } else {
                console.error('Invalid payload for removeItem:', action.payload);
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
