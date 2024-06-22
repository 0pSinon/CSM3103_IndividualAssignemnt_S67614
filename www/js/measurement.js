// Mock conversion rates
const conversionRatesToMeters = {
    meters: 1,
    kilometers: 1000,
    miles: 1609.34
};

const conversionRatesFromMeters = {
    meters: 1,
    kilometers: 1 / 1000,
    miles: 1 / 1609.34
};

function convertMeasurement() {
    const amount = parseFloat(document.getElementById('measurement-amount').value);
    const fromUnit = document.getElementById('measurement-from').value;
    const toUnit = document.getElementById('measurement-to').value;
    let result;

    if (isNaN(amount)) {
        alert('Please enter a valid number');
        return;
    }

    // Convert the input amount to meters
    const amountInMeters = amount * conversionRatesToMeters[fromUnit];

    // Convert from meters to the target unit
    result = amountInMeters * conversionRatesFromMeters[toUnit];

    document.getElementById('measurement-result').value = result.toFixed(2);

    // Save the conversion to localStorage
    saveMeasurementConversion(amount, fromUnit, result.toFixed(2), toUnit);
}

function saveMeasurementConversion(amount, fromUnit, result, toUnit) {
    const conversion = {
        amount,
        fromUnit,
        result,
        toUnit,
        timestamp: new Date().toLocaleString()
    };

    let conversions = JSON.parse(localStorage.getItem('measurementConversions')) || [];
    conversions.push(conversion);
    localStorage.setItem('measurementConversions', JSON.stringify(conversions));
}

// Function to display conversion history (for testing purposes)
function displayMeasurementHistory() {
    const conversions = JSON.parse(localStorage.getItem('measurementConversions')) || [];

    if (conversions.length === 0) {
        alert('No conversion history found.');
        return;
    }

    let historyHtml = '';
    conversions.forEach((conversion) => {
        historyHtml += `<li>${conversion.amount} ${conversion.fromUnit} = ${conversion.result} ${conversion.toUnit} (${conversion.timestamp})</li>`;
    });

    document.getElementById('history-list').innerHTML = historyHtml;
}
