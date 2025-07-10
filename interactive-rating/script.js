const buttons = document.querySelectorAll('.nums');
const submit = document.querySelector('.submit');

let ratedValue = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("selected")); // remove from all
        ratedValue = button.textContent;
        button.classList.add("selected"); // add to clicked one
    });
});

submit.addEventListener("click", () => {
    document.querySelector(".ratings").style.display = "none";
    document.querySelector(".thanks").style.display = "block";
    document.querySelector("#outof").textContent = ratedValue;
});