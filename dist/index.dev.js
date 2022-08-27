"use strict";

// get player
var player = document.querySelector(".game__player");
console.log(player); // get all game squares

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
console.log(characterMovement); // HP and Coutdown

var characterHP = document.querySelector(".game__hitPoints");
console.log(characterHP);
var countdownTimer = document.querySelector(".game__countdown");
console.log(countdownTimer); // Collate collections into arrays

var pathways = Array.from(pathwaySquares);
console.log(pathways); // const movements = Array.from(characterMovement)
// console.log(movements);

var bombs = Array.from(bombSquares);
console.log(bombs);
var thorns = Array.from(thornSquares);
console.log(thorns);
var gateways = Array.from(gatewaySquares);
console.log(gateways);
var timeUp = false;
var timeLimit = 50000;
var HP = 500;
var countdown;
var moveRight = [{
  transform: 'translateX(0px)'
}, {
  transform: 'translateX(65px)'
}];
var moveUp = [{
  transform: 'translateY(-65px)'
}];
var moveDown = [{
  transform: "translateY(65px)"
}];
var moveLeft = [{
  transform: "translateX(-65px)"
}];
var frames = {
  duration: 3000,
  fill: 'both'
}; // event testing
// let currentPosX = player.offsetLeft
// console.log(currentPosX);
// let currentPosY = player.offsetTop
// console.log(currentPosY);
// let value = player.style.left
// console.log(value);

var position = function position() {
  var currentX = player.offsetLeft;
  console.log(currentX);
  player = currentX;
  return player;
}; // this.player = {x: 596, y: 180, color: "red"};
// return this.player
// let NewTile = this.gamePlayer.X + this.gamePlayer.Y; 
// console.log(NewTile);
// game functions
// Handle Start function


var handleStartGame = function handleStartGame() {
  console.log("game has started");
  countdown = timeLimit / 1000;
  characterHP.textContent = 500; // characterHP.style.display = "block";

  countdownTimer.textContent = countdown;
  timeUp = false;
  HP = 500;
  setTimeout = (function () {
    timeUp = true;
  }, timeLimit);
  var startCountdown = setInterval(function () {
    countdown -= 1;
    countdownTimer.textContent = countdown;

    if (countdown < 0) {
      countdown = 0;
      clearInterval(startCountdown);
      countdownTimer.textContent = "Time is UPP!!";
    }
  }, 1000); // new player appears at gateway
}; // handle Character movement


var handlePlayerMovement = function handlePlayerMovement(e) {
  console.log(e);

  switch (e.target.value) {
    case "up":
      player.animate(moveUp, frames);
      console.log(player);
      console.log("player moved up");
      break;

    case "left":
      player.animate(moveLeft, frames);
      console.log("player moved left");
      break;

    case "right":
      player.animate(moveRight, frames);
      console.log("player moved right");
      break;

    case "down":
      player.animate(moveDown, frames);
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
      HP -= 10;
      characterHP.textContent = HP;
      console.log("ouch -20hp");
    });
  });
  bombs.forEach(function (bomb) {
    bomb.addEventListener("mouseover", function () {
      HP -= 50;
      characterHP.textContent = HP;
      console.log("BOOOOOM -50hp"); // this.style.background = `url(./image/y8lb_c1ux_201215.jpg)`;
      // this.style.backgroundImage = `url(./image/y8lb_c1ux_201215.jpg)`
      // this.bomb.pointerEvent = "none"
      // setTimeout = (() => { 
      // this.style.backgroundImage = "url(./image/Brick_04.png)"
      // this.bomb.mouseEvents = "auto"
      // }, 3000);    
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