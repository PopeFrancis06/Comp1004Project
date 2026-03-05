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
    let cheese = "password";
    //Check to see if "password" is within the password
    if(passwords.toLowerCase().includes(cheese.toLowerCase())){
        document.getElementById('substring').innerText = "There is a commonly used phrase in the password";
    }
    else{
        document.getElementById('substring').innerText = "There are no commonly used phrases in the password";
    }
}

