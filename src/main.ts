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





 const numberText = numberButton[i].innerText;
     number.push(numberText);
    }
let number = [];
number.addEventListener('click', (handleNumbersClicked) => {



  => {
    // update to the display should happen here without erasing previous number
  })  


   if (event) {
    number.push(numberText);
    number[i] = Number(number[i]);
  }



    if (operatorPressed === 'x') {
   return numberPressed * numberPressed;
  } else {
   return 0;
  }


  const multiplyNumbers = (operator: string): number => {
  const numbersPressed = 
  console.log(numbersPressed);
  
}

     // const numberAsString = Number(numberText);
      
    
      // handle the display of the numbers here. add checks to number function
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
      // grand total and running total. have display for operator
      
      // might want to return event.target so that the result from this function can be used as an argument 
    // to another function

let operatorPressed: string = '';

const handleOperatorClicked = (event: MouseEvent) => {
  const operatorText = (event.target as HTMLElement).innerText;
  operatorPressed = operatorText;
  //  console.log(operatorPressed);
  // handle the display of the operators here
  // grab class from event. 
  // read and write class of buttons. remove selected
  convertArrayToIntegers();
}


array is created from clicking of numbers. that list of numbers is held in display variable when an 
operator is clicked then inside the operator function you'll have another variable set to be equal to the display variable 
that variable is passed as an argument to the other calculate functions and in the meantime the operator function will 
clear the current display (bottom row of input display). When new numbers are pressed, this will repopulate the display
variable with new data and The calculate functions will then complete calculation by taking in last input variable and 
current display variable. add a counter in each function? so that each time the operator is pressed then the result is equal
to last result plus display variable.





*/

////////////////////////// QUERY SELECTORS //////////////////////////////////////
const displayFieldPrevious =
  document.querySelector<HTMLDivElement>(".display-previous");
const displayFieldCurrent =
  document.querySelector<HTMLDivElement>(".display-current");
const numberButtons = document.querySelectorAll<HTMLButtonElement>(".number");
const operatorButtons =
  document.querySelectorAll<HTMLButtonElement>(".operator");
const divideButton = document.querySelector<HTMLButtonElement>(".divide");
const multiplyButton = document.querySelector<HTMLButtonElement>(".multiply");
const addButton = document.querySelector<HTMLButtonElement>(".add");
const subtractButton = document.querySelector<HTMLButtonElement>(".subtract");
const equalsButton = document.querySelector<HTMLButtonElement>(".equals");
const allClearButton = document.querySelector<HTMLButtonElement>(".all-clear");
const deleteButton = document.querySelector<HTMLButtonElement>(".delete");

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
  !equalsButton ||
  !allClearButton ||
  !deleteButton
) {
  throw new Error("Error with selectors");
}

