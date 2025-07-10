const header = document.querySelector("header");
const submit = document.querySelector("#submit");
const form = document.querySelector(".form");
const ticket = document.querySelector(".ticket");
const fileInput = document.getElementById('avatar');
const uploadIcon = document.getElementById('uploadicon');
const uploadText = uploadIcon.nextElementSibling;
const avatarpreview = document.querySelector("#avatar-preview");

function handleAvatarUpload(event) {
    const file = event.target.files[0];

    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png'];
    const maxSize = 500 * 1024;

    if (!validTypes.includes(file.type)) {
        alert('Invalid file type! Only JPG and PNG are allowed.');
        fileInput.value = '';
        return false;
    }


    if (file.size > maxSize) {
        alert('File size exceeds 500KB!');
        fileInput.value = '';
        return false;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        uploadIcon.src = e.target.result;
        uploadIcon.alt = 'Uploaded avatar';

        if (uploadText && uploadText.tagName.toLowerCase() === 'p') {
            uploadText.textContent = 'Uploaded!';
        }
    };

    reader.readAsDataURL(file);

    avatarpreview.src = URL.createObjectURL(file);
    return true;
}


function handleFullNameInput(event) {
    const fullName = event.target.value;
    const fullNameDup = fullName;
    if (fullName.length == 0) {
        document.querySelector(".error-message-empty").classList.toggle("hidden");
        return false;
    }
    fullName.replace(" ", "");
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(fullName)) {
        document.querySelector(".error-message-notaname").classList.toggle("hidden");
        return false;
    }
    document.querySelectorAll(".full-name").forEach((element) => { 
        element.textContent = fullNameDup; 
    })
    return true;
}

function handleEmail(event) {
    const email = event.target.value;
    if (email.length == 0) {
        document.querySelector(".error-message-emptymail").classList.toggle("hidden");
        return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.com$/;
    if (!regex.test(email)) {
        document.querySelector(".error-message-notamail").classList.toggle("hidden");
        return false;
    }
    document.querySelector(".full-email").textContent = event.target.value;
    return true;
}

function handleGithub(event) {
    const githubname = event.target.value;
    if (githubname.length == 0) {
        document.querySelector(".error-message-emptygithub").classList.toggle("hidden");
        return;
    }
    document.querySelector(".githubname").textContent = event.target.value;
    return true;
}
fileInput.addEventListener('change', handleAvatarUpload);
document.querySelector("#name").addEventListener("change", handleFullNameInput);
document.querySelector("#email").addEventListener("change", handleEmail);
document.querySelector("#github").addEventListener("change", handleGithub);
submit.addEventListener("click", () => {
    fileInput.dispatchEvent(new Event('change'));
    document.querySelector("#name").dispatchEvent(new Event('change'));
    document.querySelector("#email").dispatchEvent(new Event('change'));
    document.querySelector("#github").dispatchEvent(new Event('change'));
    if (fileInput.value && document.querySelector("#name").value && document.querySelector("#email").value && document.querySelector("#github").value) {
        form.style.display = "none";
        ticket.style.display = "block";
        header.style.display = "none";
    }
})