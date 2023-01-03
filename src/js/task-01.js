// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// const categories = document.querySelector("#categories");
// const categoriesItem = categories.children;
const categoriesItem = document.querySelectorAll(".item");
// console.log(categoriesItem);

const categoriesNumber = categoriesItem.length;
console.log("Number of categories:", categoriesNumber);

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const headersItem = categoriesItem.forEach((item) => {
  const headers = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;
  console.log(`Category: ${headers}`);
  console.log(`Elements: ${elements}`);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
