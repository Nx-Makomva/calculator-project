
////////////////////////// QUERY SELECTORS //////////////////////////////////////
const displayFieldPrevious =
  document.querySelector<HTMLDivElement>(".display--previous");
const displayFieldCurrent =
  document.querySelector<HTMLDivElement>(".display--current");
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
const divideButton = 
  document.querySelector<HTMLButtonElement>(".divide");
const multiplyButton = 
  document.querySelector<HTMLButtonElement>(".multiply");
const addButton = 
  document.querySelector<HTMLButtonElement>(".add");
const subtractButton = 
  document.querySelector<HTMLButtonElement>(".subtract");

////////////////////////// NULL EXCEPTIONS //////////////////////////////////////
if (
  !numberButtons ||
  !operatorButtons ||
  !displayFieldCurrent ||
  !displayFieldPrevious ||
  !divideButton ||
  !multiplyButton ||
  !addButton ||
  !subtractButton ||
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
let additionCounter: number = 0;
let subtractionCounter: number = 0;
let divisionCounter: number = 1;
let multiplyCounter: number = 1;
let resultAsString: string = "";


////////////////////////// EVENT HANDLER -> NUMBERS CLICKED //////////////////////////////////////

const handleNumberClicked = (event: MouseEvent) => {
  const numberText = (event.target as HTMLElement).innerText;

  if (
    numberText !== undefined &&
    numberText !== null &&
    displayFieldCurrent.innerHTML !== null &&
    displayFieldPrevious.innerHTML !== null
  ) {
    let userInput = displayFieldCurrent.innerHTML;
    displayFieldCurrent.innerHTML = numberText;
    // Concatenate the new number text with the current content
    userInput += numberText;
    // Update the inner HTML of displayField with the concatenated content
    displayFieldCurrent.innerHTML = userInput;

    currentNumber = userInput;
  } else {
    console.error("Unable to process number input")
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

    if (displayFieldPrevious.innerHTML !== null) {
      previousNumber = currentNumber;
      displayFieldPrevious.innerHTML = previousNumber + " " + operatorPressed;

      if (displayFieldCurrent.innerHTML !== null) {
        displayFieldCurrent.innerHTML = "";
        currentNumber = "";
      }
    }
  } else {
    console.error("Operator button click failed. Check operator button text is valid and the display fields are properly initialized.")
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
    displayFieldPrevious.innerHTML !== null &&
    displayFieldCurrent.innerHTML !== null
  ) {
    const currentNumberAsText = currentNumber;
    const currentNumberAsInteger = parseFloat(currentNumberAsText);

    const previousNumberAsText = resultAsString; 
    const previousNumberAsInteger = parseFloat(previousNumberAsText);

    if (displayFieldCurrent.innerHTML === '' && displayFieldPrevious.innerHTML === '') {
      handleAllClearClick();

    } if (operatorPressed === "÷") {
        if (previousNumberAsInteger !== 0) {
          const result = previousNumberAsInteger / currentNumberAsInteger;
           resultAsString = result.toString();
          displayFieldCurrent.innerHTML = resultAsString;
            }
          } else if (operatorPressed === "x") {
              const result = previousNumberAsInteger * currentNumberAsInteger;
               resultAsString = result.toString();
              displayFieldCurrent.innerHTML = resultAsString;
          } else if (operatorPressed === "+") {
              const result = previousNumberAsInteger + currentNumberAsInteger;
               resultAsString = result.toString();
              displayFieldCurrent.innerHTML = resultAsString;
          } else if (operatorPressed === "-") {
              const result = previousNumberAsInteger - currentNumberAsInteger;
               resultAsString = result.toString();
              displayFieldCurrent.innerHTML = resultAsString;
          } else {
            console.error("Equals button click failed")
          }
        }
      };

equalsButton.addEventListener("click", handleEqualsClick);

////////////////////////// EVENT HANDLER -> AC CLICKED //////////////////////////////////////
const handleAllClearClick = () => {
  if (
    displayFieldPrevious.innerHTML !== null &&
    displayFieldCurrent.innerHTML !== null
  ) {
    currentNumber = "";
    operatorPressed = "";
    previousNumber = "";
    additionCounter = 0;
    subtractionCounter = 0;
    divisionCounter = 1;
    multiplyCounter = 1;
    displayFieldCurrent.innerHTML = "";
    displayFieldPrevious.innerHTML = "";
  }
};

allClearButton.addEventListener("click", handleAllClearClick);

////////////////////////// EVENT HANDLER -> DEL CLICKED //////////////////////////////////////
const handleDeleteClick = () => {
  if (displayFieldCurrent.innerHTML !== null) {
    currentNumber = displayFieldCurrent.innerHTML;
    let currentNumberBeingEdited = currentNumber.substring(
      0,
      currentNumber.length - 1
    );
    displayFieldCurrent.innerHTML = currentNumberBeingEdited;

  } else {
    console.error("Delete button click failed");
    
  }
};

deleteButton.addEventListener("click", handleDeleteClick);

////////////////////////// EVENT HANDLER -> PERCENT CLICKED //////////////////////////////////////
const handlePercentClick = () => {
  const currentNumberAsText = currentNumber;
  const currentNumberAsInteger = parseFloat(currentNumberAsText);

  const previousNumberAsText = previousNumber;
  const previousNumberAsInteger = parseFloat(previousNumberAsText);


if (operatorPressed === "-") {
    const result = (previousNumberAsInteger * currentNumberAsInteger) / 100;
     resultAsString = result.toString();
    displayFieldCurrent.innerHTML = resultAsString;

  } else if (operatorPressed === "+") {
      const percentage = previousNumberAsInteger * 0.01 * currentNumberAsInteger;
      const result = previousNumberAsInteger + percentage;
       resultAsString = result.toString();
      displayFieldCurrent.innerHTML = resultAsString;
  } else {
      console.error("Error with Percent Button");
     }
}

percentButton.addEventListener('click', handlePercentClick);


////////////////////////// EVENT HANDLER -> DIVIDE BUTTON CLICKED //////////////////////////////////////

const handleDivideButtonClick = () => {
  if (displayFieldPrevious !== null) {
    const turnToInteger = parseFloat(previousNumber);

    if (turnToInteger !== 0) {

      divisionCounter = divisionCounter / turnToInteger;
      const result = divisionCounter;
       resultAsString = result.toString();
      displayFieldPrevious.innerHTML = resultAsString;

    } else {
      console.error('Error with Divide by 0');
      
      }
    } else {
      console.error("Error with Divide Button");
    }
  }
divideButton.addEventListener('click', handleDivideButtonClick)


////////////////////////// EVENT HANDLER -> MULTIPLY BUTTON CLICKED //////////////////////////////////////

const handleMultiplyButtonClick = () => {
  if (displayFieldPrevious !== null) {
    const turnToInteger = parseFloat(previousNumber);

    multiplyCounter *= turnToInteger;
    const result = multiplyCounter;
     resultAsString = result.toString();
    displayFieldPrevious.innerHTML = resultAsString;

  } else {
      console.error("Error with Multiply Button");
  }
}
multiplyButton.addEventListener('click', handleMultiplyButtonClick)

////////////////////////// EVENT HANDLER -> ADDITION BUTTON CLICKED //////////////////////////////////////

const handleAddButtonClick = () => {
  if (displayFieldPrevious !== null) {
    const turnToInteger = parseFloat(previousNumber);

    additionCounter += turnToInteger;
    const result = additionCounter;
     resultAsString = result.toString();
    displayFieldPrevious.innerHTML = resultAsString;
  } else {
    console.error("Error with Add Button");
  }
}
addButton.addEventListener('click', handleAddButtonClick)

////////////////////////// EVENT HANDLER -> SUBTRACT BUTTON CLICKED //////////////////////////////////////

const handleSubtractButtonClick = () => {
  if (displayFieldPrevious !== null) {
     const turnToInteger = parseFloat(previousNumber);

     if (subtractionCounter === 0) {
      subtractionCounter = turnToInteger;
      } else { 
        subtractionCounter -= turnToInteger;
      }

      const result = subtractionCounter;
      resultAsString = result.toString();
      displayFieldPrevious.innerHTML = resultAsString;

    } else {
      console.error("Error with Subtract Button");
    }
  }

subtractButton.addEventListener('click', handleSubtractButtonClick)
