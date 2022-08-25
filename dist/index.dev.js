"use strict";

// get all game squares
var pathwaySquares = document.querySelectorAll(".game__path");
console.log(pathwaySquares);
var thornSquares = document.querySelectorAll(".game__thorns");
console.log(thornSquares);
var bombSquares = document.querySelectorAll(".game__bomb");
console.log(bombSquares);
var gatewaySquares = document.querySelectorAll(".game__gate");
console.log(gatewaySquares); // get start button

var startButton = document.getElementById("game-start");
console.log(startButton); // get gateway, finish and trap buttons

var gateway = document.querySelector("g2");
console.log(gateway);
var finish = document.getElementById("g1");
console.log(finish);
var trap = document.getElementById("g3");
console.log(trap); // get movement buttons

var characterMovement = document.querySelectorAll(".movement__buttons");
console.log(characterMovement); // Collate collections into arrays

var pathways = Array.from(pathwaySquares);
console.log(pathways); // const movements = Array.from(characterMovement)
// console.log(movements);

var bombs = Array.from(bombSquares);
console.log(bombs);
var thorns = Array.from(thornSquares);
console.log(thorns);
var gateways = Array.from(gatewaySquares);
console.log(gateways); // event testing
// game functions
// Handle Start function

var handleStartGame = function handleStartGame() {
  console.log("game has started"); // new player appears at gateway
}; // handle Character movement


var handlePlayerMovement = function handlePlayerMovement(e) {
  console.log(e);

  switch (e.target.value) {
    case "up":
      console.log("player moved up");
      break;

    case "left":
      console.log("player moved left");
      break;

    case "right":
      console.log("player moved right");
      break;

    case "down":
      console.log("player moved down");
      break;

    default:
      console.log("no movement");
      break;
  }
}; // handle bomb Square
// const handleBomb = () => {
//     // if (player.target === bombs) {
//     //     alert("You have blown up");
//     // }
// bombs.forEach((bomb) => {
//     bomb.addEventListener("mouseover", () => console.log("BOOOOOM"));
// });
// };
// handle hp loss


var handleHealth = function handleHealth() {
  thorns.forEach(function (thorn) {
    thorn.addEventListener("mouseover", function () {
      return console.log("ouch -2hp");
    });
  });
  bombs.forEach(function (bomb) {
    bomb.addEventListener("mouseover", function () {
      return console.log("BOOOOOM -20hp");
    });
  });
}; // Handle gateway and warping


var handleTrap = function handleTrap(e) {
  // if (payer.target = trap) {
  //     console.log("Genjutsu trap")
  // }
  trap.addEventListener("mouseover", function (e) {
    console.log("Caught in a Genjutsu trap");
  });
}; // Handle winning


var handleWin = function handleWin() {
  // if (payer.target = finish) {
  //     console.log("Congratulation you WON!")
  // }
  finish.addEventListener("mouseover", function () {
    console.log("Congratulation you WON!");
  });
}; // initiate Start


startButton.addEventListener("click", handleStartGame); // character movement

characterMovement.forEach(function (movement) {
  movement.addEventListener("click", function (e) {
    handlePlayerMovement(e); // handleBomb ();

    handleHealth();
    handleWin();
    handleTrap();
  });
}); // thorn interaction
// Function test
// handleBomb ()

handleHealth();
handleTrap();
handleWin();