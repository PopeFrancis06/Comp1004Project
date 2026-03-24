document.getElementById('passwordSave').addEventListener('click', saveInput);
function saveInput() {
    let passwords = document.getElementById('password').value;
    document.getElementById('grade').innerText = `Password: ${passwords}`;

    var correctEmoji = "✅";
    var wrongEmoji = "❎";
    
    //Checks for spaces
    if(/\s/.test(passwords)){
        document.getElementById('spaces').innerText = wrongEmoji;
    }
    else{
        document.getElementById('spaces').innerText = correctEmoji;
    }

    //Checks for digits
    if(/\d/.test(passwords)){
        document.getElementById('digits').innerText = correctEmoji;
    }
    else{
        document.getElementById('digits').innerText = wrongEmoji;
    }

    //Check for special characters
    if(/[^A-Za-z0-9\s]/.test(passwords)){
        document.getElementById('schar').innerText = correctEmoji;
    }
    else{
        document.getElementById('schar').innerText = wrongEmoji;
    }

    //Check for upper case letters
    if(/[A-Z]/.test(passwords)){
        document.getElementById('upperchar').innerText = correctEmoji;
    }
    else{
        document.getElementById('upperchar').innerText = wrongEmoji;
    }

    //Check for only characters
    if(/^[A-Za-z]+$/.test(passwords)){
        document.getElementById('onlychar').innerText = wrongEmoji;
    }
    else{
        document.getElementById('onlychar').innerText = correctEmoji;
    }

    //List of commonly used words
    const commonWords = ["password", "123","admin", "pass", "p@ssw0rd", "qwerty", "321", "1q2w3e4r", "demo", "asd", "welcome", "guest", "test", "global", "secret", "user", "p@$$w0rd", "passw0rd", "zxc", "minecraft", "student", "qaz", "2468", "987", "changeme", "111", "222", "333", "444", "555", "666", "777", "888", "999", "000"];


    //Check to see if any of the commonly used words are within the password
    const lower = passwords.toLowerCase();

    if (commonWords.some(word => lower.includes(word))) {
        document.getElementById('substring').innerText = wrongEmoji;
    } 
    else {
        document.getElementById('substring').innerText = correctEmoji;
    }

    //Length check
    let length = passwords.length;
    document.getElementById('len').innerText ="Length: "+ length;
}



