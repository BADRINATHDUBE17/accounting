document.getElementById('sales-invoice-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const customerName = document.getElementById('customer-name').value;
    const invoiceDate = document.getElementById('invoice-date').value;
    const items = [];

    // Collect item details
    document.querySelectorAll('.item-row').forEach(row => {
        const itemName = row.children[0].value;
        const quantity = row.children[1].value;
        const price = row.children[2].value;
        if (itemName && quantity && price) {
            items.push({
                itemName,
                quantity: parseFloat(quantity),
                price: parseFloat(price)
            });
        }
    });

    // Send data to backend API
    fetch('http://localhost:5000/api/invoice/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customerName, invoiceDate, items })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Invoice saved successfully! Invoice ID: ${data.invoiceId}`);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to save invoice');
    });
});