// signup.js
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user object
    const user = {
        fullname: fullname,
        email: email,
        password: password,
    };

    // Store user data in sessionStorage
    sessionStorage.setItem('user', JSON.stringify(user));

    // Redirect to home page after successful signup
    window.location.href = 'home.html';
});
let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.style.display = i === index ? 'block' : 'none';
    });
}

function nextBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    showBanner(currentBanner);
}

document.addEventListener('DOMContentLoaded', () => {
    showBanner(currentBanner);
    setInterval(nextBanner, 3000); // Change banner every 3 seconds
});
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
