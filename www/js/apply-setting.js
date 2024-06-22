function applySettings() {
    const language = localStorage.getItem('language');
    const theme = localStorage.getItem('theme');

    if (theme) {
        document.body.className = theme;
    }

    // Additional logic to apply the language setting can be added here
    // For example, changing text content based on the language
}

// Apply settings on page load
window.onload = applySettings;