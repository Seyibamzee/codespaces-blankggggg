let input = document.querySelector(".input");
let inputss = document.querySelector(".inputss");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");


function calculateShopping(){
  const age = parseInt(document.getElementById('age').value);
  const shopFrequency= parseInt(document.getElementById('shopFrequency').value);
  const lifeExpectancy=72;

  if (age <=0 || shopFrequency<0|| isNaN(age)|| isNaN(shopFrequency)){
    document.getElementById('result').textContent="Please enter valid numbers fo age and shopping shopFrequency.";
    return;
  }
  if (age>=lifeExpectancy){
    document.getElementById('result').textContent="You've already surpassed or reached the average ife expectancy. Enjoy your shopping.";
    return;
  }
  const totalShoppingRemaining=(lifeExpectancy-age)*52*shopFrequency;
  document.getElementById('result').textContent=`You have aproximately ${totalShoppingRemaining.toLocaleString()} more times to shop at Macy's.`
}



    








  


// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";

}