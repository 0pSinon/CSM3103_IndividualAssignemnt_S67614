function saveSettings() {
    const language = document.getElementById('language').value;
    const theme = document.getElementById('theme').value;

    localStorage.setItem('language', language);
    localStorage.setItem('theme', theme);

    alert('Settings saved!');
}

// Function to apply settings from localStorage
function applySettings() {
    const language = localStorage.getItem('language');
    const theme = localStorage.getItem('theme');

    if (language) {
        document.getElementById('language').value = language;
    }
    if (theme) {
        document.getElementById('theme').value = theme;
        document.body.className = theme;
    }
}

// Apply settings on page load
window.onload = applySettings;