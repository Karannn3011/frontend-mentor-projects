async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    const totalAmount = data.reduce((total, item) => total + item.amount, 0);
    const amtArray = [];
    data.forEach((elem) => {
        amtArray.push(elem.amount);
    })
    const maxAmount = Math.max(...amtArray)
    data.forEach((elem) => {
        document.getElementById(`${elem.day}-amount`).textContent = `$${elem.amount}`;
        let barHeight;
        if (elem.amount == maxAmount) {
            barHeight = 100;
            const currentEl = document.getElementById(elem.day);
            // Use inline styles instead of dynamic Tailwind classes
            currentEl.classList.add('bg-blue-300');
            currentEl.style.height = `${barHeight}%`;
        } else {
            barHeight = Math.ceil((elem.amount / maxAmount) * 100);
            const currentEl = document.getElementById(elem.day);
            currentEl.classList.add('bg-red-500');
            currentEl.style.height = `${barHeight}%`;
        }
        const bars = document.querySelectorAll(".bars");

bars.forEach((bar) => {
    let originalClass = "";

    bar.addEventListener("mouseover", () => {
        const child = bar.querySelector(":scope > .child");
        child.classList.remove("hidden");
        child.classList.add("flex")
        bar.classList.add("cursor-pointer")
        if (bar.classList.contains("bg-red-500")) {
            originalClass = "bg-red-500";
            bar.classList.remove("bg-red-500");
            bar.classList.add("bg-red-300");
        } else if (bar.classList.contains("bg-blue-300")) {
            originalClass = "bg-blue-300";
            bar.classList.remove("bg-blue-300");
            bar.classList.add("bg-blue-200");
        }
    });

    bar.addEventListener("mouseout", () => {
        const child = bar.querySelector(":scope > .child");
        child.classList.remove("flex");
        child.classList.add("hidden")
        if (originalClass === "bg-red-500") {
            bar.classList.remove("bg-red-300");
            bar.classList.add("bg-red-500");
        } else if (originalClass === "bg-blue-300") {
            bar.classList.remove("bg-blue-200");
            bar.classList.add("bg-blue-300");
        }
    });
});

    });
}
fetchData();