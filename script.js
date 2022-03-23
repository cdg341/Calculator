const clear = document.getElementById("erase");
const label = document.getElementById("output");
const numberButtons = document.querySelectorAll(".numbers");
const equals = document.getElementById("equals");

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const num1 = e.target;

    if (label.textContent === "0") {
      label.textContent = num1.textContent;
    } else {
      label.textContent += num1.textContent;
    }
  });
});

clear.addEventListener("click", clearDisplay);
function clearDisplay() {
  label.textContent = 0;
}
/*
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
  if (label.textContent === "0") {
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



function numbersClicked(number) {
  //let label = label.textContent;
  switch (number) {
    case 1:
      return (label.textContent = 1);
    case 2:
      return (label.textContent = 2);
    case 3:
      return (label.textContent = 3);
  }
}
 */
