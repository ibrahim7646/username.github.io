function updatePrices() {
    const exchangeRate = document.getElementById('exchangeRate').value;
    const prices = document.querySelectorAll('.price');

    prices.forEach(price => {
        const usd = price.getAttribute('data-usd');
        const lbp = (usd * exchangeRate).toLocaleString(); // Convert to LBP and format
        price.querySelector('.lbp').textContent = lbp; // Update LBP price in the table
    });
}

// Initialize prices on page load
document.addEventListener('DOMContentLoaded', updatePrices);