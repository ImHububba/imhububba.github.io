// script.js

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate authentication
    if (username === 'user' && password === 'password') {
        document.getElementById('message').textContent = 'Logged in successfully.';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
}

function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Simulate user registration
    document.getElementById('message').textContent = 'User created successfully.';
}
