let profileEl = document.getElementById('profile-img');
let inputFileEl = document.getElementById('input-file');

inputFileEl.onchange = function() {
    profileEl.src = URL.createObjectURL(inputFileEl.files[0]);
}