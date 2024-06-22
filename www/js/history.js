 // Function to display conversion history
 function displayConversionHistory() {
    const currencyConversions = JSON.parse(localStorage.getItem('currencyConversions')) || [];
    const measurementConversions = JSON.parse(localStorage.getItem('measurementConversions')) || [];

    let historyHtml = '';

    // Add currency conversions to the history
    if (currencyConversions.length > 0) {
        historyHtml += '<h2>Currency Conversion History</h2>';
        currencyConversions.forEach((conversion) => {
            historyHtml += `<li>${conversion.amount} ${conversion.fromCurrency} = ${conversion.result} ${conversion.toCurrency} (${conversion.timestamp})</li>`;
        });
    }

    // Add measurement conversions to the history
    if (measurementConversions.length > 0) {
        historyHtml += '<h2>Measurement Conversion History</h2>';
        measurementConversions.forEach((conversion) => {
            historyHtml += `<li>${conversion.amount} ${conversion.fromUnit} = ${conversion.result} ${conversion.toUnit} (${conversion.timestamp})</li>`;
        });
    }

    if (historyHtml === '') {
        historyHtml = '<p>No conversion history found.</p>';
    }

    document.getElementById('history-list').innerHTML = historyHtml;
}

// Call the function to display history when the page loads
document.addEventListener('DOMContentLoaded', displayConversionHistory);