const hamburger = document.querySelector(".hamburger");
const menumobile = document.querySelector(".menumobile");

let isVisible = hamburger.style.display == "none" ? true: false;

hamburger.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!isVisible) {
    menumobile.style.display = "block";
    menumobile.animate(
      [
        { opacity: 0 },
        { opacity: 1 }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    );
  } else {
    menumobile.animate(
      [
        { opacity: 1 },
        { opacity: 0 }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    ).onfinish = () => {
      menumobile.style.display = "none";
    };
  }

  isVisible = !isVisible;
});

document.addEventListener("click", (event) => {
  if (isVisible && !menumobile.contains(event.target) && event.target !== hamburger) {
    menumobile.animate(
      [
        { opacity: 1 },
        { opacity: 0 }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    ).onfinish = () => {
      menumobile.style.display = "none";
    };
    isVisible = false;
  }
});
