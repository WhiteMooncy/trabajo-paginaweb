document.getElementById('contact-link').addEventListener('click', function (event) {
    event.preventDefault();
    const dropdown = document.getElementById('contact-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});