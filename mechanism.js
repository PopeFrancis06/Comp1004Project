document.getElementById('passwordSave').addEventListener('click', saveInput);
function saveInput() {
    let passwords = document.getElementById('password').value;
    document.getElementById('grade').innerText = `Password: ${passwords}`;
    
    //Checks for spaces
    if(/\s/.test(passwords)){
        document.getElementById('spaces').innerText = "There are spaces in the password ";
    }
    else{
        document.getElementById('spaces').innerText = "There are no spaces in the password";
    }

    //Checks for digits
    if(/\d/.test(passwords)){
        document.getElementById('digits').innerText = "There are digits in the password";
    }
    else{
        document.getElementById('digits').innerText = "There are no digits in the password";
    }

    //Check for special characters
    if(/[^A-Za-z0-9\s]/.test(passwords)){
        document.getElementById('schar').innerText = "There are special characters in the password";
    }
    else{
        document.getElementById('schar').innerText = "There are no special characters in the password";
    }

    //Check for upper case letters
    if(/[A-Z]/.test(passwords)){
        document.getElementById('upperchar').innerText = "There are upper case characters in the password";
    }
    else{
        document.getElementById('upperchar').innerText = "There are no upper case characters in the password";
    }

    //Check for only characters
    if(/^[A-Za-z]+$/.test(passwords)){
        document.getElementById('onlychar').innerText = "There are only characters in the password";
    }
    else{
        document.getElementById('onlychar').innerText = "There are not only characters in the password";
    }

    //List of commonly used words
    const commonWords = ["password", "123","admin", "pass", "p@ssw0rd", "qwerty", "321", "1q2w3e4r", "demo", "asd", "welcome", "guest", "test", "global", "secret", "user", "p@$$w0rd", "passw0rd", "zxc", "minecraft", "student", "qaz", "2468", "987", "changeme", "111", "222", "333", "444", "555", "666", "777", "888", "999", "000"];


    //Check to see if any of the commonly used words are within the password
    if(passwords.toLowerCase().includes(commonWords.toLowerCase())){
        document.getElementById('substring').innerText = "There is a commonly used phrase in the password";
    }
    else{
        document.getElementById('substring').innerText = "There are no commonly used phrases in the password";
    }
}

