// EXAMPLE 1 - Change getMinutes() to two-digit format in JavaScript

const date = new Date('October 15, 2025 05:04:00');

const minutes = String(date.getMinutes()).padStart(2, '0');
console.log(minutes); // 👉️ 04

// ------------------------------------------------------------------

// // EXAMPLE 2 - Change getMinutes() to a two-digit format by comparing to 10

// const date = new Date('October 15, 2025 05:04:00');

// let minutes = date.getMinutes();
// minutes = minutes <= 9 ? '0' + minutes : minutes;
// console.log(minutes); // 👉️ 04

// ------------------------------------------------------------------

// // EXAMPLE 3 - Change getMinutes() to a two-digit format by using `slice()`

// function getMinutes2Digits(date) {
//   const minutes = ('0' + date.getMinutes()).slice(-2);

//   return minutes;
// }

// const date = new Date('October 15, 2025 05:04:00');

// console.log(getMinutes2Digits(date)); // 👉️ 04

// ------------------------------------------------------------------

// // EXAMPLE 4 - Change getHours() to 2-digit format in JavaScript

// const date = new Date('September 24, 2025 05:24:00');

// const hours = String(date.getHours()).padStart(2, '0');
// console.log(hours); // 👉️ 05

// ------------------------------------------------------------------

// // EXAMPLE 5 - Change getSeconds() to 2-digit format in JavaScript

// const date = new Date('March 14, 2025 05:24:07');

// const seconds = String(date.getSeconds()).padStart(2, '0');
// console.log(seconds); // 👉️ 07
