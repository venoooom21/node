const generatePassword = require('generate-password');

function RandomPassword() {
    const password = generatePassword.generate({
        length: 8,
        lowercase: true,
        uppercase: true,
        symbols: true,
        numbers: true
    });
    console.log(password);
}

RandomPassword();