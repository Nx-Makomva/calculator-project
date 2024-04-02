/*
The problem?
Build a calculator using HTML, SCSS and JS / TS

NOTES:
- Deployed website using github pages
- Public github repo
- Branches 
- 15+ commits for the different stages of development
- A README.md with short intro to project
- Be responsive and built mobile-first + must work for different screen widths 

Requirements:
1. Can accept inputs
2. Do some calculations and give correct output (returns stuff)
3. Inputs come from user clicks on buttons (use button elements)

What needs to happen?
- Will need to grab buttons from HTML
- Do the null exceptions 
- Will need event handlers to do something after button clicks
  - function needs to store current state 
   and check if math operators were pressed and then do math
- Will need event listeners to look out for button clicks
*/

////////////////////////// QUERY SELECTORS //////////////////////////////////////
const displayFieldPrevious =
  document.querySelector<HTMLDivElement>(".display-previous");
const displayFieldCurrent =
  document.querySelector<HTMLDivElement>(".display-current");
const numberButtons = 
  document.querySelectorAll<HTMLButtonElement>(".number");
const operatorButtons =
  document.querySelectorAll<HTMLButtonElement>(".operator");
const percentButton = 
  document.querySelector<HTMLButtonElement>(".percent");
const equalsButton = 
  document.querySelector<HTMLButtonElement>(".equals");
const allClearButton = 
  document.querySelector<HTMLButtonElement>(".all-clear");
const deleteButton = 
  document.querySelector<HTMLButtonElement>(".delete");

////////////////////////// NULL EXCEPTIONS //////////////////////////////////////
if (
  !numberButtons ||
  !operatorButtons ||
  !displayFieldCurrent ||
  !displayFieldPrevious ||
  !percentButton ||
  !equalsButton ||
  !allClearButton ||
  !deleteButton
) {
  throw new Error("Error with selectors");
}

////////////////////////// VARIABLES //////////////////////////////////////
let currentNumber: string = "";
let operatorPressed: string = "";
let previousNumber: string = "";

////////////////////////// EVENT HANDLER -> NUMBERS CLICKED //////////////////////////////////////

const handleNumberClicked = (event: MouseEvent) => {
  const numberText = (event.target as HTMLElement).innerText;

  if (
    numberText !== undefined &&
    numberText !== null &&
    displayFieldCurrent.innerText !== null &&
    displayFieldPrevious.innerText !== null
  ) {
    let userInput = displayFieldCurrent.innerHTML;
    displayFieldCurrent.innerHTML = numberText;
    // Concatenate the new number text with the current content
    userInput += numberText;
    // Update the inner HTML of displayField with the concatenated content
    displayFieldCurrent.innerHTML = userInput;

    currentNumber = userInput;
    console.log("i am " + currentNumber);
  }
};

const numberClick = () => {
  for (let i = 0; i < numberButtons.length; i++) {
    const numberEvent = numberButtons[i];
    numberEvent.addEventListener("click", handleNumberClicked);
  }
};
numberClick();

////////////////////////// EVENT HANDLER -> OPERATORS CLICKED //////////////////////////////////////

const handleOperatorClicked = (event: MouseEvent) => {
  const operatorText = (event.target as HTMLElement).innerText;
  if (operatorText !== undefined && operatorText !== null) {
    operatorPressed = operatorText;

    if (displayFieldPrevious.innerText !== null) {
      previousNumber = currentNumber;
      displayFieldPrevious.innerText = previousNumber + " " + operatorPressed;

      if (displayFieldCurrent.innerText !== null) {
        displayFieldCurrent.innerText = "";
        currentNumber = "";
      }
    }
    console.log(`I am the current number -> ` + currentNumber);
    console.log(`I am the previous number -> ` + previousNumber);
  }
};

const operatorClick = () => {
  for (let i = 0; i < operatorButtons.length; i++) {
    const operator = operatorButtons[i];
    operator.addEventListener("click", handleOperatorClicked);
  }
};

operatorClick();

////////////////////////// EVENT HANDLER -> EQUALS CLICKED //////////////////////////////////////

const handleEqualsClick = () => {
  if (
    displayFieldPrevious.innerText !== null &&
    displayFieldCurrent.innerText !== null
  ) {
    const currentNumberAsText = currentNumber;
    const currentNumberAsInteger = parseFloat(currentNumberAsText);

    const previousNumberAsText = previousNumber;
    const previousNumberAsInteger = parseFloat(previousNumberAsText);

    if (displayFieldCurrent.innerText === '' && displayFieldPrevious.innerText === '') {
      handleAllClearButton();

    } else if (operatorPressed === "÷") {
      if (currentNumberAsInteger !== 0) {
        const result = previousNumberAsInteger / currentNumberAsInteger;
        const resultAsString = result.toString();
        displayFieldCurrent.innerText = resultAsString;
        console.log(`I am the result of division ->` + result);
        console.log(`inside the current display field is` + displayFieldCurrent.innerText);
      }
    } else if (operatorPressed === "x") {
      const result = previousNumberAsInteger * currentNumberAsInteger;
      const resultAsString = result.toString();
      displayFieldCurrent.innerText = resultAsString;
      console.log(`I am the result of multiplication ->` + result);
    } else if (operatorPressed === "+") {
      const result = previousNumberAsInteger + currentNumberAsInteger;
      const resultAsString = result.toString();
      displayFieldCurrent.innerText = resultAsString;
      console.log(`I am the result of addition ->` + result);
    } else if (operatorPressed === "-") {
      const result = previousNumberAsInteger - currentNumberAsInteger;
      const resultAsString = result.toString();
      displayFieldCurrent.innerText = resultAsString;
      console.log(`I am the result of subtraction ->` + result);

      // } else if (operatorPressed === "%") {
      //   const result = (previousDisplayTextAsInteger - currentDisplayTextAsInteger);
      //   console.log(`I am the result of subtraction ->` + result);
      // //
    }
  }
};

equalsButton.addEventListener("click", handleEqualsClick);

////////////////////////// EVENT HANDLER -> AC CLICKED //////////////////////////////////////
const handleAllClearButton = () => {
  if (
    displayFieldPrevious.innerText !== null &&
    displayFieldCurrent.innerText !== null
  ) {
    displayFieldCurrent.innerText = "";
    displayFieldPrevious.innerText = "";
  }
};

allClearButton.addEventListener("click", handleAllClearButton);

////////////////////////// EVENT HANDLER -> DEL CLICKED //////////////////////////////////////
const handleDeleteButton = () => {
  if (displayFieldCurrent.innerText !== null) {
    currentNumber = displayFieldCurrent.innerText;
    let currentNumberBeingEdited = currentNumber.substring(
      0,
      currentNumber.length - 1
    );
    displayFieldCurrent.innerText = currentNumberBeingEdited;
    console.log(currentNumberBeingEdited);
  }
};

deleteButton.addEventListener("click", handleDeleteButton);

////////////////////////// EVENT HANDLER -> PERCENT CLICKED //////////////////////////////////////
const handlePercentClick = () => {
  const currentNumberAsText = currentNumber;
  const currentNumberAsInteger = parseFloat(currentNumberAsText);

  const previousNumberAsText = previousNumber;
  const previousNumberAsInteger = parseFloat(previousNumberAsText);


if (operatorPressed === "-") {
    const result = (previousNumberAsInteger * currentNumberAsInteger) / 100;
    const resultAsString = result.toString();
    displayFieldCurrent.innerText = resultAsString;
    console.log(`I am the result of subtraction ->` + result);

  } else if (operatorPressed === "+") {
      const percentage = previousNumberAsInteger * 0.01 * currentNumberAsInteger;
      const result = previousNumberAsInteger + percentage;
      const resultAsString = result.toString();
      displayFieldCurrent.innerText = resultAsString;
      console.log(`I am the result of addition ->` + result);
     } 
}

percentButton.addEventListener('click', handlePercentClick);
