const express = require('express');
const db = require('../db');
const router = express.Router();

// Save invoice data
router.post('/save', (req, res) => {
    const { customerName, invoiceDate, items } = req.body;

    // Insert invoice into database
    const invoiceQuery = 'INSERT INTO invoices (customer_name, invoice_date) VALUES (?, ?)';
    db.query(invoiceQuery, [customerName, invoiceDate], (err, result) => {
        if (err) throw err;

        const invoiceId = result.insertId;

        // Insert items into database
        const itemsQuery = 'INSERT INTO invoice_items (invoice_id, item_name, quantity, price) VALUES ?';
        const itemsData = items.map(item => [invoiceId, item.itemName, item.quantity, item.price]);

        db.query(itemsQuery, [itemsData], (err, result) => {
            if (err) throw err;
            res.status(200).json({ message: 'Invoice saved successfully', invoiceId });
        });
    });
});

module.exports = router;
