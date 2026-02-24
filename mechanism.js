document.getElementById('passwordSave').addEventListener('click', saveInput);
function saveInput() {
    let passwords = document.getElementById('password').value;
    document.getElementById('grade').innerText = `Password: ${passwords}`;
    if(/\s/.test(passwords)){
        document.getElementById('spaces').innerText = "There are spaces in the password ";
    else{
        document.getElementById('spaces').innerText = "There are no spaces in the password";
    }

}

