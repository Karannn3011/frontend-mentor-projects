const menu = document.querySelector(".menuicon");
const lightbox = document.querySelector(".lightbox");
const sidebar = document.querySelector(".sidebar");
const closemenu = document.querySelector(".closemenu")
const features = document.getElementById("features");
const featuresarrow = document.querySelector("#features > img")
const featureslist = document.querySelector("#features ul");
const companylist = document.querySelector("#company ul");
const company = document.getElementById("company");
const companyarrow = document.querySelector("#company > img")
const featuredesktop = document.querySelector(".menudesktop ul li:nth-child(1)")
const featuredesktopicon = document.querySelector(".menudesktop ul li:nth-child(1) img")
const companyLiicon = document.querySelector(".menudesktop ul > li:nth-child(2) img")
const companyLi = document.querySelector('.menudesktop > ul > li:nth-of-type(2)');
const companydd = companyLi.querySelector('.companydd');
const featuresdd = document.querySelector(".featuresdd")
const navbar = document.getElementsByTagName("nav")

menu.addEventListener("click", () => {
    sidebar.animate([
        { transform: "translateX(100%)" },
        { transform: "translateX(0)" }
    ],
        {
            duration: 300,
            fill: "forwards"
        });
    lightbox.style.display = "block";
    lightbox.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 300,
        fill: "forwards"
    });
})
function closingmenu() {
    sidebar.animate([
        { transform: "translateX(0%)" },
        { transform: "translateX(100%)" }
    ],
        {
            duration: 300,
            fill: "forwards"
        });
    lightbox.animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: 300,
        fill: "forwards"
    });
    setTimeout(() => {
        lightbox.style.display = "none";
    }, 300)
}
closemenu.addEventListener("click", closingmenu)
lightbox.addEventListener("click", (ev) => {
    if (ev.target == lightbox) {
        closingmenu();
    }
})

features.addEventListener("click", () => {
    if (featureslist.style.display == "block") {
        featuresarrow.src = "images/icon-arrow-down.svg";
        featureslist.style.display = "none";
    } else {
        featureslist.style.display = "block";
        featuresarrow.src = "images/icon-arrow-up.svg";
    }
})

company.addEventListener("click", () => {
    if (companylist.style.display == "block") {
        companyLiicon.src = "images/icon-arrow-down.svg";
       companylist.style.display = "none";
    } else {
        companylist.style.display = "block";
        companyLiicon.src = "images/icon-arrow-up.svg";
    }
})

let featuresHideTimeout;
let companyHideTimeout;

featuredesktop.addEventListener("mouseover", () => {
    clearTimeout(featuresHideTimeout);
    featuredesktopicon.src = "images/icon-arrow-up.svg";
    featuresdd.style.display = "block";
});

featuredesktop.addEventListener("mouseleave", () => {
    featuresHideTimeout = setTimeout(() => {
        const isHovering = featuredesktop.matches(":hover") || featuresdd.matches(":hover");
        if (!isHovering) {
            featuredesktopicon.src = "images/icon-arrow-down.svg";
            featuresdd.style.display = "none";
        }
    }, 1000);
});

featuresdd.addEventListener("mouseover", () => {
    clearTimeout(featuresHideTimeout);
    featuredesktopicon.src = "images/icon-arrow-up.svg";
    featuresdd.style.display = "block";
});

featuresdd.addEventListener("mouseleave", () => {
    featuresHideTimeout = setTimeout(() => {
        const isHovering = featuredesktop.matches(":hover") || featuresdd.matches(":hover");
        if (!isHovering) {
            featuredesktopicon.src = "images/icon-arrow-down.svg";
            featuresdd.style.display = "none";
        }
    }, 2000);
});



companyLi.addEventListener("mouseover", () => {
    clearTimeout(companyHideTimeout);
    console.log("TEST");
    companyLiicon.src = "images/icon-arrow-up.svg";
    companydd.style.display = "block";
});

companyLi.addEventListener("mouseleave", () => {
    companyHideTimeout = setTimeout(() => {
        const isHovering = companyLi.matches(":hover") || companydd.matches(":hover");
        if (!isHovering) {
            companyLi.style.color = "";
            companyLiicon.src = "images/icon-arrow-down.svg";
            companydd.style.display = "none";
        }
    }, 1000);
});

companydd.addEventListener("mouseover", () => {
    clearTimeout(companyHideTimeout);
    companyLiicon.src = "images/icon-arrow-up.svg";
    companydd.style.display = "block";
});

companydd.addEventListener("mouseleave", () => {
    companyHideTimeout = setTimeout(() => {
        const isHovering = companyLi.matches(":hover") || companydd.matches(":hover");
        if (!isHovering) {
            companyLi.style.color = "";
            companyLiicon.src = "images/icon-arrow-down.svg";
            companydd.style.display = "none";
        }
    }, 2000);
});
