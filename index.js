const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number-button");
const add = document.getElementsByName("add");
const subtract = document.getElementsByName("subtract");
const multiply = document.getElementsByName("multiply");
const divide = document.getElementsByName("divide");
const equals = document.getElementsByName("equals");
const correct = document.getElementsByName("correct");
const dot = document.getElementsByName("dot");

let operation = [];
let input = "";

function updateDisplay() {
	display.innerText = input;
}

function getNumberInput(e) {
	input += this.innerText.toString();
	updateDisplay();
}

function calculate() {
	for (i = 0; i < operation.length / 2; i++) {
		let counter = 0;
		oppos = operation.findIndex(
			(element) => (element == "+") | (element == "-")
		);
		if (oppos != -1) {
			counter = oppos - 1;
		}

		oppos = operation.findIndex(
			(element) => (element == "*") | (element == "/")
		);
		if (oppos != -1) {
			counter = oppos - 1;
		}

		switch (operation[counter + 1]) {
			case "+":
				operation[counter] =
					parseFloat(operation[counter]) + parseFloat(operation[counter + 2]);
				break;
			case "-":
				operation[counter] =
					parseFloat(operation[counter]) - parseFloat(operation[counter + 2]);
				break;
			case "*":
				operation[counter] =
					parseFloat(operation[counter]) * parseFloat(operation[counter + 2]);
				break;
			case "/":
				operation[counter] =
					parseFloat(operation[counter]) / parseFloat(operation[counter + 2]);
				break;
		}
		console.log(operation);
		operation.splice(counter + 1, 2);
		console.log(operation);
	}
	input = operation[0];
	updateDisplay();
	operation = [];
}

numberButtons.forEach((button) => {
	button.addEventListener("click", getNumberInput);
});
add[0].addEventListener("click", () => {
	input += " + ";
	updateDisplay();
});
subtract[0].addEventListener("click", () => {
	input += " - ";
	updateDisplay();
});
multiply[0].addEventListener("click", () => {
	input += " * ";
	updateDisplay();
});
divide[0].addEventListener("click", () => {
	input += " / ";

	updateDisplay();
});

equals[0].addEventListener("click", () => {
	input.split(" ").forEach((element) => {
		operation.push(element);
	});
	console.log(operation);
	calculate();
});

correct[0].addEventListener("click", () => {
	if (parseInt(input.slice(-2, -1)).toString() == "NaN") {
		input = input.slice(0, -2);
	} else {
		input = input.slice(0, -1);
	}

	updateDisplay();
});

dot[0].addEventListener("click", () => {
	console.log(input.split(" "));
	console.log(input.split(" ")[input.split(" ").length - 1]);
	if (
		parseInt(input.split(" ")[input.split(" ").length - 1]).toString() == "NaN"
	) {
		input += "0.";
	} else if (input.split(" ")[input.split(" ").length - 1].includes(".")) {
	} else {
		input += ".";
	}
	updateDisplay();
});
