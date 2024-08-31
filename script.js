// Select the checkbox input element
const check = document.getElementById('check');

// Add an event listener to toggle the navigation menu
check.addEventListener('change', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.querySelector('.navbar');
    
    // Toggle visibility of menu and close icons based on checkbox state
    if (check.checked) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        navbar.style.height = '17.5rem';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        navbar.style.height = '0';
    }
});