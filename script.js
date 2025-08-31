// Part 1: Basics

let name = prompt("Trinity:");
let age = parseInt(prompt("21:"));

if (age >= 18) {
  document.getElementById("part1-output").textContent = 
    `Hello ${name}, you are ${age} and eligible to vote.`;
} else {
  document.getElementById("part1-output").textContent = 
    `Sorry ${name}, you are ${age} and not eligible to vote yet.`;
}


// Part 2: Functions

function calculateTotal(price, qty) {
  return price * qty;
}

let total = calculateTotal(500, 3);
document.getElementById("part2-output").textContent = 
  `Total price (500 x 3): ${total}`;


// Part 3: Loops

let numbers = [1, 2, 3, 4, 5];
let loopResult = "";

for (let i = 0; i < numbers.length; i++) {
  loopResult += numbers[i] + " ";
}

document.getElementById("part3-output").textContent = 
  "Numbers: " + loopResult;


// Part 4: DOM (Document Object Model) Manipulation

const btn = document.getElementById("toggle-btn");
const part4Output = document.getElementById("part4-output");
let visible = false;

btn.addEventListener("click", () => {
  visible = !visible;
  part4Output.textContent = visible ? "Hello, I am now visible!" : "";
});