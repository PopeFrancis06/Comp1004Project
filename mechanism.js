document.getElementById('passwordSave').addEventListener('click', saveInput);
function saveInput() {
    let passwords = document.getElementById('password').value;
    document.getElementById('grade').innerText = `Password: ${passwords}`;
}
