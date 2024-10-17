// login.js
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from sessionStorage
    const user = JSON.parse(sessionStorage.getItem('user'));

    // Check if user exists and credentials match
    if (user && user.email === email && user.password === password) {
        // Redirect to home page after successful login
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
