let input = document.querySelector('input');
let searchForm = document.querySelector('form');
let inStock = 
[
  'apples', 
  'eggs', 
  'milk', 
  'cookies',
  'cheese', 
  'bread', 
  'lettuce', 
  'broccoli', 
  'pizza', 
  'potato', 
  'crackers', 
  'onion', 
  'tofu', 
  'frozen dinner', 
  'cucumber',
  'meat',
  'Prawns',
  'rice',
  'Pasta',
  'Soups',
  'Canned Beans',
  'Cereals'
];
let inputValue;
let inputValueInLowerCase;

// Prints Message to HTML

let search;
const pTag = document.querySelector('p');

function print(message) {
  pTag.innerHTML = `${message}.`
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  inputValue = input.value.toString();
  inputValueInLowerCase= inputValue.toLowerCase();
  console.log(inputValueInLowerCase)

    if (inputValueInLowerCase === 'quit') {
    alert('Please close the tab');
  } else if (inputValueInLowerCase === 'list') {
    print(` We have ${inStock.join(', ')}`)
  } else {
    if (inStock.indexOf(inputValueInLowerCase) >= 0) {
      print(`Yes, we have ${inputValueInLowerCase} in stock`);
    } else {
      print(`We do not have ${inputValueInLowerCase} in stock`)
    }
  }
})


