<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Process data (e.g., save to database)
    $customerName = $data['customerName'];
    $invoiceDate = $data['invoiceDate'];
    $amount = $data['amount'];

    // Example: Save to database (MySQL)
    $conn = new mysqli('localhost', 'username', 'password', 'accounting_db');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO sales_invoices (customer_name, invoice_date, amount) VALUES (?, ?, ?)");
    $stmt->bind_param("ssd", $customerName, $invoiceDate, $amount);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Invoice saved successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to save invoice']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
