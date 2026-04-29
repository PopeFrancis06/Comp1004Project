//This is an event listener that waits for the submit button in the HTML to be clicked to then run the saveInput function
document.getElementById('passwordSave').addEventListener('click', saveInput);

//Save Input function
//This is the bulk of the JavaScript and is the brain behind the whole of the program
function saveInput() {

    //This saves the entered password from the HTML text box into the let variable
    let passwords = document.getElementById('password').value;

    //This sets the grade value to 0 so that the grade can be calculated accuratly each time
    let grades = 0;

    //These var variables are the way that the user will know if the parameters are met or not
    var correctEmoji = "✅";
    var wrongEmoji = "❎";
    
    //Checks for spaces

    //This let variable sets a base phrase so that the program can be run multiple times without being reset
    let spacesPhrase = "The password does not contain spaces";
    //If else statement that uses a test function to check if the password variable has spaces within it
    if(/\s/.test(passwords)){
        document.getElementById('spacesWord').innerText = spacesPhrase + wrongEmoji;
    }
    else{
        document.getElementById('spacesWord').innerText = spacesPhrase + correctEmoji;
        //Adds one to the grade variable
        grades++;
    }

    //Checks for digits

    //This let variable sets a base phrase so that the program can be run multiple times without being reset
    let digitsPhrase = "The password contains digits";
    //If else statement that uses a test function to check if the password variable has digits within it
    if(/\d/.test(passwords)){
        document.getElementById('digitsWord').innerText = digitsPhrase + correctEmoji;
        //Adds one to the grade variable
        grades++;
    }
    else{
        document.getElementById('digitsWord').innerText = digitsPhrase + wrongEmoji;
    }

    //Check for special characters

    //This let variable sets a base phrase so that the program can be run multiple times without being reset
    let scharPhrase = "The password contains special characters";
    //If else statement that uses a test function to check if the password variable has special characters within it
    if(/[^A-Za-z0-9\s]/.test(passwords)){
        document.getElementById('scharWord').innerText = scharPhrase + correctEmoji;
        //Adds one to the grade variable
        grades++;
    }
    else{
        document.getElementById('scharWord').innerText = scharPhrase + wrongEmoji;
    }

    //Check for upper case letters

    //This let variable sets a base phrase so that the program can be run multiple times without being reset
    let uppercharPhrase = "The password contains uppercase characters";
    //If else statement that uses a test function to check if the password variable has upper case characters within it
    if(/[A-Z]/.test(passwords)){
        document.getElementById('uppercharWord').innerText = uppercharPhrase + correctEmoji;
        //Adds one to the grade variable
        grades++;
    }
    else{
        document.getElementById('uppercharWord').innerText = uppercharPhrase + wrongEmoji;
    }

    //Check for only characters

    //This let variable sets a base phrase so that the program can be run multiple times without being reset
    let onlycharPhrase = "The password does not only contain lowercase characters";
    //If else statement that uses a test function to check if the password variable has only lower case characters within it
    if(/^[A-Za-z]+$/.test(passwords)){
        document.getElementById('onlycharWord').innerText = onlycharPhrase + wrongEmoji;
    }
    else{
        document.getElementById('onlycharWord').innerText = onlycharPhrase + correctEmoji;
        //Adds one to the grade variable
        grades++;
    }

    //List of commonly used words
    const commonWords = ["password", "123","admin", "pass", "p@ssw0rd", "qwerty", "321", "1q2w3e4r", "demo", "asd", "welcome", "guest", "test", "global", "secret", "user", "p@$$w0rd", "passw0rd", "zxc", "minecraft", "student", "qaz", "2468", "987", "changeme", "111", "222", "333", "444", "555", "666", "777", "888", "999", "000"];


    //Check to see if any of the commonly used words are within the password
    const lower = passwords.toLowerCase();

    //This let variable sets a base phrase so that the program can be run multiple times without being reset
    let substringPhrase = "The password does not contain commonly used phrases within";
    //If else statement that compairs the list of commonly used phrases and checks if there are any inside of the password variable
    if (commonWords.some(word => lower.includes(word))) {
        document.getElementById('substringWord').innerText = substringPhrase + wrongEmoji;
    } 
    else {
        document.getElementById('substringWord').innerText = substringPhrase + correctEmoji;
        //Adds one to the grade variable
        grades++;
    }

    //Length check
    let length = passwords.length;

    //This let variable sets a base phrase so that the program can be run multiple times without being reset
    let lenPhrase = "The password is within 12 - 16 characters long";
    //If else statement that checks if the length variable is within 12 and 16 characters long
    if (length<17 && length>11){
        document.getElementById('lenWord').innerText = lenPhrase + correctEmoji;
        //Adds one to the grade variable
        grades++;
    }
    else{
        document.getElementById('lenWord').innerText = lenPhrase + wrongEmoji;
    }

    //Grade outputer
    //Switch case that compairs the grade variable and gives an output based on the given output
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



