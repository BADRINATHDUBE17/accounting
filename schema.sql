CREATE DATABASE accounting_db;

USE accounting_db;

CREATE TABLE sales_invoices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    invoice_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL
);

-- Add other tables for purchase orders, inventory, etc.