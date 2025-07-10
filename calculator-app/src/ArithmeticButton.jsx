
const operation = []
export default function ArithmeticButton({ value }) {
  const keyPress = () => {
    const resultEl = document.getElementById("result");
    resultEl.textContent += value;
    
  };

  return (
    <button
      onClick={keyPress}
      type="button"
      className="cursor-pointer hover:bg-key-secondary-shadow text-2xl p-3 rounded-lg bg-key-secondary shadow-[0px_5px_0px_1px_var(--color-key-secondary-shadow)] text-keycolor"
    >
      {value}
    </button>
  );
}
