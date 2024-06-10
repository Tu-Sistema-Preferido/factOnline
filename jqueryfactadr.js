document.addEventListener('DOMContentLoaded', () => {
    const invoiceForm = document.getElementById('invoice-form');
    const invoiceTableBody = document.querySelector('#invoice-table tbody');
    const invoiceTotalElement = document.getElementById('invoice-total');
    let totalAmount = 0;



    invoiceForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const establecimientoID = document.getElementById('establecimiento-id').value;
        const fechaID = document.getElementById('fecha-id').value;
        const clienteID = document.getElementById('cliente-id').value;
        const clienteName = document.getElementById('cliente-name').value;
        const telefonoName = document.getElementById('telefono-name').value;
        const productName = document.getElementById('product-name').value;
        const productPrice = parseFloat(document.getElementById('product-price').value);
        const productQuantity = parseInt(document.getElementById('product-quantity').value);

        const productTotal = productPrice * productQuantity;
        totalAmount += productTotal;


        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${establecimientoID}</td>
            <td>${fechaID}</td>
            <td>${clienteID}</td>
            <td>${clienteName}</td>
            <td>${telefonoName}</td>
            <td>${productName}</td>
            <td>$${productPrice.toFixed(2)}</td>
            <td>${productQuantity}</td>
            <td>$${productTotal.toFixed(2)}</td>


        `;

        invoiceTableBody.appendChild(row);

        invoiceTotalElement.textContent = totalAmount.toFixed(2);

        invoiceForm.reset()

    });
});