let input = document.querySelector(".input");
let inputss = document.querySelector(".inputss");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");


// 1. Convert to an arrow function.
const calculateDoggieAge=(humanAge)=> {
  const doggieAge=humanAge*7;
  return doggieAge;
};

const showDoggieAge = (age)=> {
  result.innerHTML=`Your have ${age} years old in human years!`;
};
const humanYears=0;
const dogYears= calculateDoggieAge(humanYears);
showDoggieAge(dogYears);



    




equalsButton.addEventListener("click", () => {
  const userInput=Number(input.value);
  const doggieAge= calculateDoggieAge(userInput);
  showDoggieAge(doggieAge);
  });













  


// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";

}