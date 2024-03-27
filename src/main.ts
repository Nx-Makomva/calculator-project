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
- Will need event listeners to look out for button clicks


*/

const clearButton = document.querySelector<HTMLButtonElement>('.clear');
const plusMinusButton = document.querySelector<HTMLButtonElement>('.plus-minus');
const percentButton = document.querySelector<HTMLButtonElement>('.percent');
const divideButton = document.querySelector<HTMLButtonElement>('.divide');
const sevenButton = document.querySelector<HTMLButtonElement>('.seven');
const eightButton = document.querySelector<HTMLButtonElement>('.eight');
const nineButton = document.querySelector<HTMLButtonElement>('.nine');
const multiplyButton = document.querySelector<HTMLButtonElement>('.multiply');
const fourButton = document.querySelector<HTMLButtonElement>('.four');
const fiveButton = document.querySelector<HTMLButtonElement>('.five');
const sixButton = document.querySelector<HTMLButtonElement>('.six');
const subtractButton = document.querySelector<HTMLButtonElement>('.subtract');
const oneButton = document.querySelector<HTMLButtonElement>('.one');
const twoButton = document.querySelector<HTMLButtonElement>('.two');
const threeButton = document.querySelector<HTMLButtonElement>('.three');
const addButton = document.querySelector<HTMLButtonElement>('.add');
const dotButton = document.querySelector<HTMLButtonElement>('.dot');
const zeroButton = document.querySelector<HTMLButtonElement>('.zero');
const deleteButton = document.querySelector<HTMLButtonElement>('.delete');
const equalsButton = document.querySelector<HTMLButtonElement>('.equals');

if (!clearButton || !plusMinusButton || !percentButton || !divideButton || !sevenButton || !eightButton ||
    !nineButton || !multiplyButton || !fourButton || !fiveButton || !sixButton || !subtractButton ||
    !oneButton || !twoButton || !threeButton || !addButton || !dotButton || !zeroButton || !deleteButton ||
    !equalsButton) {
    
    throw new Error('Error with selectors');
    }


const handleOneClick = (event: Event) => {
  console.log(event);
  
}


oneButton.addEventListener('click', handleOneClick);