let myRandomNum1 = Math.floor(Math.random()*(7-1))+1;
let myRandomNum2 = Math.floor(Math.random()*(7-1))+1;

document.querySelectorAll("img")[0].setAttribute("src","images/dice" + myRandomNum1.toString() + ".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice" + myRandomNum2.toString() + ".png");

let myDisplay = document.querySelector("h1");

if(myRandomNum1 > myRandomNum2) myDisplay.innerHTML = "👇Player 1 Won!";
else if(myRandomNum1 < myRandomNum2) myDisplay.innerHTML = "Player 2 Won!👇";
else myDisplay.innerHTML = "🎉DRAW!🎉";

