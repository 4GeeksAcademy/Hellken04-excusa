import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


function getRandomInt(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function randomArray (anyArray){
  let maxIndex = anyArray.length;
  return anyArray[getRandomInt(maxIndex)];
}

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let excuse = randomArray(who) +" "+ randomArray(action) + " " + randomArray(what)+" "+randomArray(when);
  document.getElementById("excuse").innerText = excuse;
}
