// Get all the buttons
const buttons = document.querySelectorAll("button");

let input = document.getElementById("input");
let num1 = 0;
let num2 = 0;
let operator = null;

// For each button get the value when the button is pressed.
buttons.forEach((button) => {
  button.addEventListener("click", handleClick, false);
});

// This is the function that gets the value from the button press
function handleClick() {
  console.log(this.value);
  input.value += this.value;
}

function operation(op) {
  console.log(op);
  if (operator == null) {
    console.log("Operator Null");
    num1 = parseFloat(input.value);
    operator = op;
    input.value = "";
  } else {
    console.log("Operator Not Null");
    num2 = parseFloat(input.value);
    let result = calculate();
    num2 = result;
    operator = op;
    input.value = "";
    // num2 = null;
  }
}

// This is the function to calculate the sum.
function calculate(num1, num2, operator) {
  console.log(num1, num2, operator);
  let result = 0;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else {
    result = num1;
  }
  return result;
}

function equals() {
  console.log(num1, num2, operator);
  num2 = parseFloat(input.value);
  let result = calculate(num1, num2, operator);
  input.value = result;
  num1 = result;
  operator = null;
}

function clearInput() {
  input.value = "";
  num1 = 0;
  num2 = null;
  operator = null;
}
