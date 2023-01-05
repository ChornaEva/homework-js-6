// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const allElements = document.querySelector("#controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxesNode = document.querySelector("#boxes");

let amount = 0;

const onInputChange = (event) => {
  amount = event.currentTarget.value;
  console.log(amount);
  // return amount;
};

const createBoxes = (amount) => {
  const divCollection = [];
  const initSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement("div");
    divElement.style.width = `${initSize + 10 * i}px`;
    0;
    divElement.style.height = `${initSize + 10 * i}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    divCollection.push(divElement);
  }

  divBoxesNode.append(...divCollection);
};
// createBoxes(5);

const destroyBoxes = () => {
  divBoxesNode.innerHTML = "";
};

input.addEventListener("input", onInputChange);
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
