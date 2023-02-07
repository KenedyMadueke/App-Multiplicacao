const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question")

const inputEl = document.getElementById("input")

questionEl.innerText = `Quanto é ${num1} multiplicado por ${num2}`;

const correctAns = num1 * num2;