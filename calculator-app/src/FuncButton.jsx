export default function FuncButton({ value, className = "" }) {
  const keyPress = () => {
    if (value == "RESET") {
      document.getElementById("result").textContent = "";
    } else if (value == "DEL") {
      document.getElementById("result").textContent = document
        .getElementById("result")
        .textContent.slice(0, -1);
    } else if (value == "=") {
      try {
  const expression = document
    .getElementById("result")
    .textContent.replace(/x/g, "*");

  const res = eval(expression);

  if (isNaN(res)) {
    alert("Please enter an expression.");
  } else {
    document.getElementById("result").textContent = res.toFixed(4);
  }
} catch (error) {
  alert("Invalid input. Please check your expression.");
}
    }
  };
  return (
    <button
      onClick={keyPress}
      type="button"
      className={`cursor-pointer lg:shadow-[0px_5px_0px_1px_var(--color-key-primary-shadow)] p-5 rounded-lg text-darkfunc ${className}`}
    >
      {value}
    </button>
  );
}
