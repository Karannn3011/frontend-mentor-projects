const nameinput = document.getElementById("name");
const number = document.getElementById("number");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const nameoncard = document.getElementById("nameoncard");
const numoncard = document.getElementById("numoncard");
const dateoncard = document.getElementById("dateoncard")
const cvc = document.getElementById("cvc");
const cvconcard = document.getElementById("cvconcard")
const submit = document.getElementById("submitbtn")
const nameerror = document.querySelector(".nameerror");
const numerror = document.querySelector(".numbererror");
const dateerror = document.querySelector(".dateerror");
const cvcerror = document.querySelector(".cvcerror");
const form = document.querySelector(".form")
const completed = document.querySelector(".completed")

nameinput.addEventListener("input", () => {
    if (nameinput.value != "") {
        nameoncard.textContent = nameinput.value;
    } else {
        nameoncard.textContent = "Jane Appleseed"
    }
});

number.addEventListener("input", () => {
    if (number.value != null) {
        if (number.value.length > 16) {
            number.value = number.value.slice(0, 16);
        }
        const numarray = Array(16).fill("0");
        const numstring = number.value.split("");
        for (let i = 0; i < numstring.length; i++) {
            numarray[i] = numstring[i];
        }
        numoncard.innerHTML = `<span>${numarray[0] + numarray[1] + numarray[2] + numarray[3]}</span><span>${numarray[4] + numarray[5] + numarray[6] + numarray[7]}</span><span>${numarray[8] + numarray[9] + numarray[10] + numarray[11]}</span><span>${numarray[12] + numarray[13] + numarray[14] + numarray[15]}</span>`
    } else {
        number.innerHTML = "<span>0000</span><span>0000</span><span>0000</span><span>0000</span>";
    }
})

month.addEventListener("input", () => {
    if (month.value != null) {
        if (month.value.length > 2) {
            month.value = month.value.slice(0, 2);
        }
        dateoncard.textContent = `${month.value || "00"}/${year.value || "00"}`;
    } else {
        dateoncard.textContent = "00/00";
    }
})
year.addEventListener("input", () => {
    if (year.value != null) {
        if (year.value.length > 2) {
            year.value = year.value.slice(0, 2);
        }
        dateoncard.textContent = `${month.value || "00"}/${year.value || "00"}`;
    } else {
        dateoncard.textContent = "00/00";
    }
})
cvc.addEventListener("input", () => {
    if (cvc.value != null) {
        if (cvc.value > 3) {
            cvc.value = cvc.value.slice(0, 3);
        }
        cvconcard.textContent = cvc.value;
    } else {
        cvconcard.textContent = "000";
    }

})

function nameCheck(value) {
    const trimmedValue = value.trim();
    const namePattern = /^[A-Za-z\s'-]+$/;

    if (namePattern.test(trimmedValue)) {
        nameerror.style.display = "none"
        nameinput.style.border = "1px solid black";
        return true;

    } else {
        nameerror.style.display = "block";
        nameinput.style.border = "1px solid red";
        return false;
    }
}
function numCheck(value) {
    if (/^\d+$/.test(value) && value.length == 16) {
        numerror.style.display = "none";
        number.style.border = "1px solid black";
        return true;
    } else {
        numerror.style.display = "block";
        number.style.border = "1px solid red";
        return false;
    }
}

function monthCheck(value) {
    if ((value <= 12) && value > 0) {
        month.style.border = "1px solid black";
        dateerror.style.display = "none";
        return true;
    } else {
        dateerror.style.display = "block";
        month.style.border = "1px solid red";
        return false;
    }
}

function cvcCheck(value) {
    if (Number.isInteger(Number(value)) && value > 0 && value.length == 3) {
        cvc.style.border = "1px solid black"
        cvcerror.style.display = "none"
        return true;
    } else {
        cvc.style.border = "1px solid red"
        cvcerror.style.display = "block"
        return false;
    }
}

submit.addEventListener("click", () => {
    nameCheck(nameinput.value);
    numCheck(number.value);
    monthCheck(month.value);
    cvcCheck(cvc.value);

    if (nameCheck(nameinput.value) &&
        numCheck(number.value) &&
        monthCheck(month.value) &&
        cvcCheck(cvc.value)) {
            form.style.display = "none";
            completed.style.display = "flex";
        }
})
