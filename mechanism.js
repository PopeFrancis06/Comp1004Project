document.getElementById('passwordSave').addEventListener('click', saveInput);
function saveInput() {
    let passwords = document.getElementById('password').value;
    document.getElementById('grade').innerText = `Password: ${passwords}`;
    spaceCheck();

}

function spaceCheck(){
    if(/\s/.test(passwords)){
        document.getElementById('spaces').innerText = "The password has spaces";
    }
    else{
        document.getElementById('spaces').innerText = "The password has no spaces";
    }
}