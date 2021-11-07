const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelectorAll("[data-equals]");
const deleteButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const prevOperanadTextElement = document.querySelectorAll(
  "[data-prev-operanad]"
);
const currOperanadTextElement = document.querySelectorAll(
  "[data-curr-operanad]"
);

class Calculator {
  constructor(prevOperanadTextElement, currOperanadTextElement) {
    this.prevOperanadTextElement = prevOperanadTextElement;
    this.currOperanadTextElement = currOperanadTextElement;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currOperanadTextElement.innerText = this.currentOperand;
  }
}

const calc = new Calculator(prevOperanadTextElement, currOperanadTextElement);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
    calc.appendNumber(button.innerText);
    calc.updateDisplay();
  });
});
