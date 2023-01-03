const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// HTML містить порожній список ul#ingredients.
// <ul id="ingredients"></ul>
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.

// Додасть елементу клас item.

// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredientsList = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  // console.log(item);
  return item;
});

console.log(ingredientsList);

const ulNode = document.querySelector("#ingredients");
ulNode.append(...ingredientsList);
