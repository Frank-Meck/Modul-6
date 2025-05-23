const input = document.querySelector(".calculator input");
const btn = document.querySelector(".calculator button");
const values = document.querySelectorAll(".ingredient .value");
let prevInputValue = input.value;

function formatNumber(num) {
  const truncated = Math.trunc(num * 100) / 100;
  return Number(truncated.toString());
}

function calculateIngredients() {
  for (const value of values ) {
    const ratio = input.value /  prevInputValue;
    const newValue = formatNumber(value.textContent.replace(",", ".") * ratio);
    value.textContent = newValue.toString().replace(".", ",");
    }

    prevInputValue = input.value;
}

btn.addEventListener("click", () => {
  if (!input.checkValidity()) return input.reportValidity();
  calculateIngredients();
});

input.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  if (!input.checkValidity()) return input.reportValidity();
  calculateIngredients();
});