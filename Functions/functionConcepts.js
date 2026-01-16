// JavaScript function concepts and practice questions with examples

// Q1: What's the difference between function declaration and expression in terms of hoisting?
// ==========================================================
// Ans -> Function declarations are hoisted.
// While function expressions cannot be hoisted.
// ------function statement------
// abcd();
// function abcd() {
//     console.log("huihui")
// };
// ------function expression-----
// abcd();
// let abcd = function() {
//     console.log("huihui")
// };

// Q2: What will log?
// ==========================================================
// greet();
// function greet() {
//     console.log("Hello!");
// }
// Ans -> Output: "Hello!"
// It's function statement, hoisting.

// Q3: Convert function into arrow function.
// ==========================================================
// function multiply(a, b) {
//     return a * b;
// }
// -------------Ans--------------
// let multiply = (a, b) => {
//     return a * b;
// }

// Q4: Identify parameter and argument.
// ==========================================================
// function welcome(name) {
//     console.log(name);
// }
// welcome("Shubham");
// Ans -> parameter - name, argument = "Shubham"

// Q5: How many parameters this function have & how many args passed?
// ==========================================================
// function demo(a, b, c) {}
// demo(1, 2);
// Ans -> parameters - 3 , arguments - 2 , c is undefined

// Q6: Predict the output.
// ==========================================================
// function sayHi(name = "Guest") {
//     console.log("Hi", name);
// }
// sayHi();
// Ans -> Output: Hi Guest

// Q7: What does ... operator mean in parameters?
// ==========================================================
// function abcd(...val) {
//     console.log(val);
// }
// abcd(1, 2, 3, 4, 5, 6);
// Ans -> Rest operator

// Q8: Use rest parameter to accept any number of scores and return the total.
// ==========================================================
// function getScore(...scores) {
//     let total = 0;
//     scores.forEach(function(val) {
//         total = total + val;
//     });
//     return total;
// }
// console.log(getScore(10, 12, 14, 18));
// Output: 54

// Q9: Fix the function using early return.
// ==========================================================
// function checkAge(age) {
//     if (age < 18) {
//         console.log("Too young");
//     } else {
//         console.log("Allowed")
//     }
// }
// -------------Ans--------------
// function checkAge(age) {
//     if (age < 18) return "Yoo young";
//     return "Allowed";
// }
// console.log(checkAge(20));

// Q10: What's the return value of this function?
// ==========================================================
// function f() {
//     return;
// }
// console.log(f());
// Ans -> Output: undefined

// Q11: What does it mean when we say "functions are first-class citizens"?
// ==========================================================
// Ans -> Your functions can treat as values.
// You can save it (functions) in variables.
// You can pass it (functions) in functions.

// Q12: Can you assign a function to a variable and then call it? show how.
// ==========================================================
// Ans -> yes
// let a = function() {
// }
// a();

// Q13: Pass a function into another function and execute it inside.
// ==========================================================
// function abcd(val) {
//     val();
// }
// abcd(function () {
//     console.log("hey");
// })

// Q14: What is a higher-order function?
// ==========================================================
// Ans -> Such a function which can return one more function.
// Such a function that accepts one more function in parameters.
// function abcd() {
//     return function() {}
// }
// ------------------------------
// function abcd(val) {
// }
// abcd(function(){
// })

// Q15: Identify which is a high-order function?
// ==========================================================
// [1, 2, 3].map(function (x) {
//     return x * 2;
// });
// Ans -> map is a high-order function

// Q16: Pure vs impure function.
// ==========================================================
// let total = 0;
// function addToTotal(num) {
//     total += num;
// }
// Ans -> impure function

// Q17: Convert the above function into a pure function.
// ==========================================================
// let total = 0;
// function addToTotal(num) {
//     total += num;
// }
// -------------Ans--------------
// let total = 0;
// function addToTotal(num) {
//     let newTotal = total;
//     total += num;
// }

// Q18: What is a closure? When is it created?
// ==========================================================
// Ans - such a function which will return one more function, 
// and and inner function will use outer function value in any way.
// function abcd() {
//     let val = 0;
//     return function () {
//         console.log(val);
//     };
// }

// Q19: What will be Output??
// ==========================================================
// function outer() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     };
// }
// const counter = outer();
// counter();   // 1
// counter();   // 2

// Q20: Convert this normal function into an IIFE.
// ==========================================================
// function inti() {
//     console.log("Initialized");
// }
// -------------Ans--------------
// (function inti() {
//     console.log("Initialized");
// })();

// Q21: What is the use of IIFE? Name one real-world use case.
// ==========================================================
// let shery = (function () {
//     let score = 0;    // private variable
//     return {
//         getScore: function () {        // getter
//             console.log(score);
//         },
//         setScore: function (val) {     // setter
//             score = val;
//         },
//     };
// })();

// Q22: What will be the output here and why?
// ==========================================================
// greet();
// var greet = function () {    // function expression
//     console.log("Hi!");
// };
// Ans -> Output: greet is not a function
// because it is a function expression not a function statement.

// Q23: What will be the output here and why?
// ==========================================================
// greet();
// function greet() {           // function statement
//     console.log("Hi!");
// };
// Ans -> Output: Hi!
// because it is a function statement not a function expression.
