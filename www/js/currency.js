const conversionRates = {
    USD: {
        EUR: 0.85,
        GBP: 0.75,
    },
    EUR: {
        USD: 1.18,
        GBP: 0.88,
    },
    GBP: {
        USD: 1.33,
        EUR: 1.14,
    }
};

// Function to convert currency and save history
function convertCurrency() {
    const amount = parseFloat(document.getElementById('currency-amount').value);
    const fromCurrency = document.getElementById('currency-from').value;
    const toCurrency = document.getElementById('currency-to').value;

    if (isNaN(amount)) {
        alert('Please enter a valid number');
        return;
    }

    let result;
    if (fromCurrency === toCurrency) {
        result = amount;
    } else {
        const rate = conversionRates[fromCurrency][toCurrency];
        result = amount * rate;
    }

    const convertedData = {
        amount: amount,
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
        result: result.toFixed(2),
        timestamp: new Date().toLocaleString()  // Add timestamp for history
    };

    // Save conversion to localStorage
    saveConversionToHistory(convertedData);

    // Update UI with result
    document.getElementById('currency-result').value = convertedData.result;
}

// Function to save conversion data to localStorage
function saveConversionToHistory(data) {
    let conversions = JSON.parse(localStorage.getItem('currencyConversions')) || [];
    conversions.push(data);
    localStorage.setItem('currencyConversions', JSON.stringify(conversions));
}

// Function to redirect to history page
function redirectToHistory() {
    window.location.href = 'history.html';
}

// Event listener for view history button
document.getElementById('view-history-btn').addEventListener('click', redirectToHistory);
