// script.js

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        localStorage.setItem('token', data.token);
        document.getElementById('message').textContent = 'Logged in successfully.';
    } catch (error) {
        document.getElementById('message').textContent = 'Error logging in.';
    }
});

document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        document.getElementById('message').textContent = 'User created successfully.';
    } catch (error) {
        document.getElementById('message').textContent = 'Error creating user.';
    }
});
