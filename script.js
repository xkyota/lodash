//! Calculator using Lodash
// function calculate(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return _.add(a, b);
//         case '-':
//             return _.subtract(a, b);
//         case '*':
//             return _.multiply(a, b);
//         case '/':
//             return _.divide(a, b);
//         default:
//             return 'Invalid operator';
//     }
// }

// console.log(calculate(10, 5, '+'));
// console.log(calculate(10, 5, '-'));
// console.log(calculate(10, 5, '*'));
// console.log(calculate(10, 5, '/'));

//! Throttle (Kinda Timeout)
// const balance = document.querySelector(".show-balance");
// const button = document.querySelector(".add-balance");

// let count = 0;

// button.addEventListener('click', _.throttle((event) => {
//     event.preventDefault();
//     count++;
//     balance.textContent = count;
// }, 500))

//! Debounce (Better than Throttle, they are similar)

// const balance = document.querySelector(".show-balance");
// const button = document.querySelector(".add-balance");

// let count = 0;

// button.addEventListener('click', _.debounce((event) => {
//     event.preventDefault();
//     count++;
//     balance.textContent = count;
// }, 500))

//! =========================== Tasks ===========================

// ! Variables for tasks
const myInput = document.querySelector(".myInput");

// ! Functions (Uncomment to test) 
// myInput.addEventListener('input', _.throttle(throttle, 500));
// myInput.addEventListener('input', _.debounce(debounce, 500));
// document.addEventListener('mousemove', _.debounce(debounceMouse, 500)); 


// * 1. Затримати виконання функції при введенні тексту в поле input, щоб не перевантажувати сервер.
// ? Використовуйте _.throttle з lodash. Час затримки: 500мс. Передайте функцію, яку потрібно виконати при введенні тексту.

function throttle(event) {
    console.log('Input value:', event.target.value);
}

// * 2. Викликати функцію при завершенні введення тексту в поле input.
// ? Використовуйте _.debounce з lodash. Час затримки: 500мс. Передайте функцію, яку потрібно викликати при завершенні введення тексту.

function debounce(event) { 
	console.log('Input value:', event.target.value);
}

// * 3. Викликати функцію при завершенні переміщення мишкою.
// ? Використовуйте _.debounce з lodash. Час затримки: 100мс. Передайте функцію, яку потрібно викликати при завершенні переміщення мишкою.

function debounceMouse()  { 
    alert("You stopped move your mouse"); 
}

// * 4. Викликати функцію при введенні тексту в поле input з певною затримкою.
// ? Використовуйте _.throttle з lodash. Час затримки: 500мс. Передайте функцію, яку потрібно викликати при введенні тексту.

function throttle(event) {
    console.log('Input value:', event.target.value);
}
