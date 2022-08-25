"use strict";

// get all game squares
var pathwaySquares = document.getElementsByClassName("game__path");
console.log(pathwaySquares);
var thornSquares = document.getElementsByClassName("game__thorns");
console.log(thornSquares);
var bombSquares = document.getElementsByClassName("game__bomb");
console.log(bombSquares);
var gatewaySquares = document.getElementsByClassName("game__gate");
console.log(gatewaySquares); // get start button

var startButton = document.getElementById("game-start");
console.log(startButton); // get movement buttons

var characterMovement = document.getElementsByClassName("movement__buttons");
console.log(characterMovement); // Collate collections into arrays

var pathways = Array.from(pathwaySquares);
console.log(pathways);
var movements = Array.from(characterMovement);
console.log(movements);
var bombs = Array.from(bombSquares);
console.log(bombs);
var thorns = Array.from(thornSquares);
console.log(thorns);
var gateways = Array.from(gatewaySquares);
console.log(gateways); // event testing
// game functions
// Handle Start function

var handleStartGame = function handleStartGame() {
  console.log("game has started");
}; // handle Character movement


var handlePlayerMovement = function handlePlayerMovement() {
  switch (movements) {
    case [0]:
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


var handleGateway = function handleGateway() {
  // if (payer.target == gateways[0]) {
  //     console.log("Congratulations");
  // } else if (payer.target == gateways[2]) {
  //     console.log("Genjutsu trap")
  // }
  gateways.forEach(function (gateway) {
    gateway.addEventListener("mouseover", function () {
      if (gateway[0]) {
        console.log("Congratulations");
      } else if (gateway[2]) {
        condition;
      }

      console.log("Genjutsu trap");
    });
  });
}; // initiate Start


startButton.addEventListener("click", handleStartGame); // character movement

movements.forEach(function (movement) {
  movement.addEventListener("click", function () {
    handlePlayerMovement(); // handleBomb ();

    handleHealth();
  });
}); // thorn interaction
// Function test
// handleBomb ()

handleHealth();
handleGateway();