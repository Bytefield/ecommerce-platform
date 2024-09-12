const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Routes
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Allow cross-origin requests

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI
    .replace('<db_username>', process.env.DB_USER_NAME)
    .replace('<db_password>', process.env.DB_PASSWORD)
    .replace('<db_name>', process.env.DB_NAME);
mongoose.connect(MONGO_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

// Basic route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Use product routes
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.DB_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});