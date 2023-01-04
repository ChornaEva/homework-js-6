// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputNode = document.querySelector("#validation-input");

const getTextLength = (event) => {
  if (event.target.value.length === 6) {
    inputNode.classList.add("valid");
    inputNode.classList.remove("invalid");
  } else {
    inputNode.classList.remove("valid");
    inputNode.classList.add("invalid");
  }
};
inputNode.addEventListener("blur", getTextLength);
