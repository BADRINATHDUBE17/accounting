const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const invoiceRoutes = require('./routes/invoice');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/invoice', invoiceRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});