const clear = document.getElementById("erase");
const display = document.getElementById("output");
const numberButtons = document.querySelector(".numpad").children;
const allSymbols = ["+", "-", "x", "÷", "="];

let firstValue = "";
let secondValue = "";
let symbol = "";
let result = "";

//Functions for the operator equations
function add(firstValue, secondValue) {
  return firstValue + secondValue;
}

function subtract(firstValue, secondValue) {
  return firstValue - secondValue;
}

function multiply(firstValue, secondValue) {
  return firstValue * secondValue;
}

function divide(firstValue, secondValue) {
  return firstValue / secondValue;
}

//Function to calculate equation
const calculate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  switch (symbol) {
    case "+":
      result = add(firstValue, secondValue);
      break;
    case "-":
      result = subtract(firstValue, secondValue);
      break;
    case "x":
      result = multiply(firstValue, secondValue);
      break;
    case "÷":
      result = divide(firstValue, secondValue);
  }
  display.textContent = result;
  firstValue = result;
  secondValue = "";
};

//Loop through the buttons clicked and assign values
for (let button of numberButtons) {
  button.addEventListener("click", () => {
    const btnValue = button.textContent;
    const btnValueIsSymbol = allSymbols.includes(btnValue);

    if (!secondValue && btnValue === "=") display.textContent = "Error";

    if (firstValue && btnValueIsSymbol) {
      secondValue && calculate();
      symbol = btnValue;
    }

    // if there's no symbol, that means the user is still inputting first value
    else if (!symbol) {
      display.textContent = firstValue;
      firstValue += btnValue;
    }
    // if there's a symbol, that means the user is done with the first value, so add to second
    else if (symbol) {
      secondValue += btnValue;
    }
    // don't add the equal-sign to the display
    if (btnValue !== "=") {
      display.textContent += btnValue;
    }
  });
}

//Clear the display and show zero
clear.addEventListener("click", clearDisplay);
function clearDisplay() {
  display.textContent = 0;
  firstValue = "";
  secondValue = "";
  result = "";
  symbol = "";
}

// ===========PREVIOUS CODE BEFORE REFACTORING===============

/* const clear = document.getElementById("erase");
const display = document.getElementById("output");
const numberButtons = document.querySelectorAll(".numbers");
const equals = document.getElementById("equals");
const operatorButtons = document.querySelectorAll(".operator");
let firstValue = "";
let secondValue = "";
let symbol = "";
let a = "";
let b = "";

//Click event for all the number keys

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const num1 = e.target.textContent;

    if (display.textContent === "0") {
      display.textContent = num1;
      firstValue = display.textContent;
      console.log(firstValue);
    } else {
      display.textContent += num1;
      firstValue = display.textContent;
      console.log(firstValue);
    }

    if (display.textContent && "+") {
      secondValue = display.textContent;
      console.log("This is second " + secondValue);
    }

    /* if (display.textContent === "0") {
      display.textContent = num1;
      firstValue = display.textContent;
      console.log(firstValue);
    } else {
      display.textContent += num1;
      firstValue = display.textContent;
      console.log(firstValue);
    } 
  });
});

//Click event for the operator keys

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const operatorValue = e.target.textContent;

    if (display.textContent === "0") {
      display.textContent = "Null";
      return;
    } else {
      display.textContent += operatorValue;
    }
  });
});

//Clear the display and show zero

clear.addEventListener("click", clearDisplay);
function clearDisplay() {
  display.textContent = 0;
}

//Functions for the operator equations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function appendNumber(number) {
  if (display.textContent === "0") {
    clearDisplay();
  }
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}
 operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
    if ((button.clicked = true)) {
        a = display.textContent;
    }
    if ((button.clicked = false)) {
        b = display.textContent;
    }
    console.log("A is " + a);
    console.log("B is " + b);
});
});

    equals.addEventListener("click", equalsButton);

function equalsButton() {
display.textContent = add(a, b);
} */
