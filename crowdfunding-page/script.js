const menuicon = document.getElementById("hamburger")
const ddmenu = document.getElementById("menu")
const overlay = document.getElementById("overlay")
const backbtn = document.getElementById("backbtn")
const modal = document.getElementById("modal")
const closemodal = document.getElementById("close-modal")
const pledgebox = document.getElementById("pledgebox")
const bamboobox = document.getElementById("bamboobox")
const blackbox = document.getElementById("blackbox")
const pledgeoption = document.getElementById("pledge")
const bamboooption = document.getElementById("bamboo")
const blackoption = document.getElementById("black")
const radios = document.querySelectorAll('input[name="backing"]');
const bambooinput = document.querySelector("bambooinput")
const blackinput = document.querySelector("blackinput")
const totalBacked = document.getElementById("totalbacked")
const totalBackers = document.getElementById("totalbackers")
const progressBar = document.getElementById("progress-bar")
const bookmarkicon = document.getElementById("bookmark")
const bookmarktext = document.getElementById("bookmarktext")


const formatter = new Intl.NumberFormat()
let totalBackedAmount = 69696;
let progressBarWidth = Math.floor((totalBackedAmount / 100000) * 100)
progressBar.classList.add(`w-[${progressBarWidth}%]`)
let totalBackersAmount = 1288;
totalBacked.textContent = '$' + formatter.format(totalBackedAmount);
let latestBacked = 0;

bookmarkicon.addEventListener("click", () => {
    bookmarkicon.classList.add("border-green-500", "border-2", "rounded-full")
    bookmarktext.style.border = "1px solid green"
    bookmarktext.style.borderLeft = "none"
    bookmarktext.style.color = "green"
})

let leftBamboo = 101;
let leftBlack = 64;

menuicon.addEventListener("click", () => {
    console.log("CLICKED")
    if (ddmenu.classList.contains("hidden")) {
        ddmenu.classList.remove("hidden")
        ddmenu.classList.add("absolute");
        menuicon.src = "/images/icon-close-menu.svg"
        overlay.classList.remove("hidden")
        overlay.animate([
            { opacity: 0 },
            { opacity: 0.5 }
        ],
            {
                duration: 300,
                fill: "forwards"
            }
        )
    } else {
        ddmenu.classList.remove('absolute');
        ddmenu.classList.add("hidden");
        menuicon.src = "/images/icon-hamburger.svg"

        overlay.animate([
            { opacity: 0.5 },
            { opacity: 0 }
        ],
            {
                duration: 300,
                fill: "forwards"
            }
        )
        setTimeout(() => {
            overlay.classList.add("hidden")
        }, 300)
    }

})

backbtn.addEventListener("click", () => {
    if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden");
        modal.animate([
            { opacity: 0 },
            { opacity: 1 }
        ],
            {
                duration: 400,
                fill: "forwards"
            })
        overlay.classList.remove("hidden")
        overlay.animate([
            { opacity: 0 },
            { opacity: 0.5 }
        ],
            {
                duration: 300,
                fill: "forwards"
            }
        )
    }
})

closemodal.addEventListener("click", () => {
    modal.animate([
        { opacity: 1 },
        { opacity: 0 }
    ],
        {
            duration: 300,
            fill: "forwards"
        })
    setTimeout(() => {
        overlay.classList.add("hidden")
        modal.classList.add("hidden")
    }, 300)
})

radios.forEach(radio => {
    radio.addEventListener("change", (ev) => {
        const value = ev.target.value;

        pledgebox.classList.remove("border-green-500");
        bamboobox.classList.remove("border-green-500");
        blackbox.classList.remove("border-green-500");

        pledgebox.querySelector(".content").innerHTML = "";
        bamboobox.querySelector(".content").innerHTML = "";
        blackbox.querySelector(".content").innerHTML = "";

        let selectedBox = null;
        let inputId = "";
        let minValue = 1;

        if (value === "pledge") {
            inputId = "pledgeInput";
            selectedBox = pledgebox;
            minValue = 0;
        } else if (value === "bamboo") {
            inputId = "bambooInput";
            selectedBox = bamboobox;
            minValue = 25;
        } else if (value === "black") {
            inputId = "blackInput";
            selectedBox = blackbox;
            minValue = 75;
        }

        selectedBox.classList.add("border-green-500");

        selectedBox.querySelector(".content").innerHTML = `
            <hr class="my-4">
            <p class="text-center text-gray-500 mb-3">Enter your pledge</p>
            <div class="flex flex-row justify-between items-center gap-2">
                <div class="border border-gray-500 w-[50%] rounded-full p-3 flex flex-row gap-x-3 items-center">
                    <span>$</span>
                    <input type="number" id="${inputId}" min="${minValue}" class="w-[75%] focus:outline-none bg-transparent">
                </div>
                <button type="button" class="py-3 px-4 bg-green-500 text-white font-bold rounded-full">Continue</button>
            </div>
        `;


        selectedBox.querySelector("button").addEventListener("click", () => {
            const inputVal = parseInt(document.getElementById(inputId).value);

            if (isNaN(inputVal) || inputVal < minValue) {
                alert(`Please enter a valid pledge of at least $${minValue}`);
                return;
            }
            const inpid = inputId.replace("Input", "");
            const leftElements = document.querySelectorAll(`.${inpid}left`);

            leftElements.forEach(el => {
                const current = parseInt(el.textContent);
                el.textContent = current - 1;
            });
            latestBacked = inputVal;
            console.log("Latest pledge:", latestBacked);


            totalBackedAmount += latestBacked;
            totalBacked.textContent = '$' + formatter.format(totalBackedAmount);

            totalBackersAmount++;
            totalBackers.textContent = formatter.format(totalBackersAmount);

            modal.classList.add("hidden");

            progressBarWidth = Math.floor((totalBackedAmount / 100000) * 100)
            progressBar.classList.add(`w-[${progressBarWidth}%]`)

            const completedModal = document.getElementById("modalcompleted");
            completedModal.classList.remove("hidden");

            overlay.classList.remove("hidden");
            overlay.style.opacity = "0.5";

        });
        const completedModal = document.getElementById("modalcompleted");
        document.getElementById("gotit").addEventListener("click", () => {
            console.log("GOT IT DAWG")
                completedModal.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], {
                    duration: 300,
                    fill: "forwards"
                });

                overlay.animate([
                    { opacity: 0.5 },
                    { opacity: 0 }
                ], {
                    duration: 300,
                    fill: "forwards"
                });

                setTimeout(() => {
                    completedModal.classList.add("hidden");
                    overlay.classList.add("hidden");
                }, 300);
            });
    });
});

