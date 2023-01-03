// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

const valueNode = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

let counterValue = 0;

const handleClick = (event) => {
  if (event.target === decrementBtn) {
    counterValue -= 1;
  } else {
    counterValue += 1;
  }

  valueNode.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleClick);
incrementBtn.addEventListener("click", handleClick);
