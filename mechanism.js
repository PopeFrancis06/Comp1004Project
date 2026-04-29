document.getElementById('passwordSave').addEventListener('click', saveInput);
function saveInput() {
    let passwords = document.getElementById('password').value;

    let grades = 0;

    var correctEmoji = "✅";
    var wrongEmoji = "❎";
    
    //Checks for spaces
    let spacesPhrase = "The password does not contain spaces";
    if(/\s/.test(passwords)){
        document.getElementById('spacesWord').innerText = spacesPhrase + wrongEmoji;
    }
    else{
        document.getElementById('spacesWord').innerText = spacesPhrase + correctEmoji;
        grades++;
    }

    //Checks for digits
    let digitsPhrase = "The password contains digits";
    if(/\d/.test(passwords)){
        document.getElementById('digitsWord').innerText = digitsPhrase + correctEmoji;
        grades++;
    }
    else{
        document.getElementById('digitsWord').innerText = digitsPhrase + wrongEmoji;
    }

    //Check for special characters
    let scharPhrase = "The password contains special characters";
    if(/[^A-Za-z0-9\s]/.test(passwords)){
        document.getElementById('scharWord').innerText = scharPhrase + correctEmoji;
        grades++;
    }
    else{
        document.getElementById('scharWord').innerText = scharPhrase + wrongEmoji;
    }

    //Check for upper case letters
    let uppercahrPhrase = "The password contains uppercase characters";
    if(/[A-Z]/.test(passwords)){
        document.getElementById('uppercharWord').innerText = uppercharPhrase + correctEmoji;
        grades++;
    }
    else{
        document.getElementById('uppercharWord').innerText = uppercharPhrase + wrongEmoji;
    }

    //Check for only characters
    let onlycharPhrase = "The password does not only contain lowercase characters";
    if(/^[A-Za-z]+$/.test(passwords)){
        document.getElementById('onlycharWord').innerText = onlycharPhrase + wrongEmoji;
    }
    else{
        document.getElementById('onlycharWord').innerText = onlycharPhrase + correctEmoji;
        grades++;
    }

    //List of commonly used words
    const commonWords = ["password", "123","admin", "pass", "p@ssw0rd", "qwerty", "321", "1q2w3e4r", "demo", "asd", "welcome", "guest", "test", "global", "secret", "user", "p@$$w0rd", "passw0rd", "zxc", "minecraft", "student", "qaz", "2468", "987", "changeme", "111", "222", "333", "444", "555", "666", "777", "888", "999", "000"];


    //Check to see if any of the commonly used words are within the password
    const lower = passwords.toLowerCase();

    let substringPhrase = "The password does not contain commonly used phrases within";
    if (commonWords.some(word => lower.includes(word))) {
        document.getElementById('substringWord').innerText = substringPhrase + wrongEmoji;
    } 
    else {
        document.getElementById('substringWord').innerText = substringPhrase + correctEmoji;
        grades++;
    }

    //Length check
    let length = passwords.length;
    let lenPhrase = "The password is within 12 - 16 characters long";
    if (length<17 && length>11){
        document.getElementById('lenWord').innerText = lenPhrase + correctEmoji;
        grades++;
    }
    else{
        document.getElementById('lenWord').innerText = lenPhrase + wrongEmoji;
    }

    //Grade outputer
    switch(grades){
        case 1:
            document.getElementById('grade').innerText = "F";
            break;
        case 2:
            document.getElementById('grade').innerText = "E";
            break;
        case 3:
            document.getElementById('grade').innerText = "D";
            break;
        case 4:
            document.getElementById('grade').innerText = "C";
            break;
        case 5:
            document.getElementById('grade').innerText = "B";
            break;
        case 6:
            document.getElementById('grade').innerText = "A";
            break;
        case 7:
            document.getElementById('grade').innerText = "A*";
            break;
    }
}



