import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".number").innerHTML = generateRandomNumber();
  generateRandomIcon1();
};
let AllIcons = document.querySelectorAll(".icon");

function generateRandomNumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let nNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[nNumbers];
}
let icon = ["♦", "♠", "♥", "♣"];
const generateRandomIcon1 = () => {
  let nIcon = icon[Math.floor(Math.random() * icon.length)];
  for (let icons = 0; icons < AllIcons.length; icons++) {
    AllIcons[icons].innerHTML = nIcon;
    if (nIcon == "♦" || nIcon == "♥") {
      AllIcons[icons].style.color = "red";
    }
  }
};
