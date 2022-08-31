"use strict";

// get player
var player = document.querySelector(".game__player"); // get all game squares

var pathwaySquares = document.querySelectorAll(".game__path");
var thornSquares = document.querySelectorAll(".game__thorns");
var bombSquares = document.querySelectorAll(".game__bomb");
var gatewaySquares = document.querySelectorAll(".game__gate"); // get end window

var endWindow = document.querySelector(".game-end"); // get Display 

var displayBoard = document.querySelector(".display__board--info"); // get start button

var startButton = document.getElementById("game-start");
var ReStart = document.getElementById("game-redo"); // get gateway, finish and trap buttons

var gateway = document.querySelector("g2");
var finish = document.getElementById("g1");
var trap = document.getElementById("g3"); // get movement buttons

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
var X = 0;
var Y = 0;
var timeUp = false;
var timeLimit = 50000;
var HP = 500;
var countdown; // event testing

var currPos = function currPos() {
  return player.getBoundingClientRect();
}; // game functions
// Handle Start function


var handleStartGame = function handleStartGame() {
  displayBoard.textContent = "The game has BEGUN!!";
  countdown = timeLimit / 1000;
  characterHP.textContent = 500;
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
      endWindow.classList.add("show");
      endWindow.style.backgroundColor = "red";
      endWindow.innerHTML = "\n            <h1>OH Noooo!</h1>\n            <h2>You've ran out of time</h2>\n            <h2>Maybe next time go a bit faster but remember be cautious</h2>\n            <div class=\"win-health\"> you had ".concat(HP, " HP remaining</div>\n            <button id=\"remove\">Back to Game</button>\n            ");
      var reFresh = document.getElementById("remove");
      reFresh.addEventListener("click", function () {
        window.location.reload();
      });
      clearInterval(startCountdown);
      displayBoard.textContent = "Time is UPP!!";
    } else return;
  }, 1000);
}; // handle Character movement


var handlePlayerMovement = function handlePlayerMovement(e) {
  switch (e.target.value) {
    case "up":
      player.style.transform = "translate(".concat(X, "px, ").concat(Y -= 43, "px)");
      break;

    case "left":
      player.style.transform = "translate(".concat(X -= 43, "px, ").concat(Y, "px)");
      break;

    case "right":
      player.style.transform = "translate(".concat(X += 43, "px, ").concat(Y, "px)");
      break;

    case "down":
      player.style.transform = "translate(".concat(X, "px, ").concat(Y += 43, "px)");
      break;

    default:
      break;
  }
}; // handle hp loss


var handleHealth = function handleHealth() {
  thorns.forEach(function (thorn) {
    if (currPos().x > thorn.getBoundingClientRect().x + thorn.getBoundingClientRect().width || currPos().x + currPos().width < thorn.getBoundingClientRect().x || currPos().y > thorn.getBoundingClientRect().y + thorn.getBoundingClientRect().height || currPos().y + currPos().height < thorn.getBoundingClientRect().y) {//no collision
    } else {
      HP -= 25;
      characterHP.textContent = HP;
    }

    if (HP <= 0) {
      endWindow.classList.add("show");
      endWindow.style.backgroundColor = "red";
      endWindow.innerHTML = "\n            <h1>OH Noooo!</h1>\n            <h2>You've ran out of health</h2>\n            <h2>Maybe next time go a bit slower and be more cautious</h2>\n            <button id=\"remove\">Back to Game</button>\n            ";
      var reFresh = document.getElementById("remove");
      reFresh.addEventListener("click", function () {
        window.location.reload();
      });
    }

    displayBoard.innerHTML = "\n        <h1>Ouch! Watch out for those Thorns! Thats minus 25 HP...</h1>  \n        <h2>Only ".concat(HP, " HP remaining</h2>");
  });
  bombs.forEach(function (bomb) {
    if (bomb.getBoundingClientRect().x > currPos().x + currPos().width || bomb.getBoundingClientRect().x + bomb.getBoundingClientRect().width < currPos().x || bomb.getBoundingClientRect().y > currPos().y + currPos().height || bomb.getBoundingClientRect().y + bomb.getBoundingClientRect().height < currPos().y) {
      // no collision
      return;
    } else {
      HP -= 60;
      characterHP.textContent = HP;
      bomb.style.backgroundPosition = "center";
      bomb.style.backgroundSize = "100%";
      bomb.style.backgroundImage = "url(./image/y8lb_c1ux_201215.jpg)";
    }

    if (HP <= 0) {
      endWindow.classList.add("show");
      endWindow.style.backgroundImage = "url(./image/sw7i_axtl_201215.jpg";
      endWindow.style.backgroundSize = "100%";
      endWindow.style.backgroundPosition = "center";
      endWindow.style.color = "black";
      endWindow.innerHTML = "\n            <h1>BOOOOOM!</h1>\n            <h2>You've gone and got yourself blown up</h2>\n            <h2>Maybe next time be a bit more cautious</h2>\n            <button id=\"remove\">Back to Game</button>\n            ";
      var reFresh = document.getElementById("remove");
      reFresh.addEventListener("click", function () {
        window.location.reload();
      });
    }

    displayBoard.innerHTML = "\n            <h1>BOOM! Watch your step! Thats minus 60 HP...</h1> \n            <h2>Only ".concat(HP, " HP remaining</h2>");
  });
}; // Handle trap door


var handleTrap = function handleTrap(e) {
  if (trap.getBoundingClientRect().x > currPos().x + currPos().width || trap.getBoundingClientRect().x + trap.getBoundingClientRect().width < currPos().x || trap.getBoundingClientRect().y > currPos().y + currPos().height || trap.getBoundingClientRect().y + trap.getBoundingClientRect().height < currPos().y) {//no collision
  } else {
    endWindow.classList.add("show");
    endWindow.style.backgroundColor = "midnightblue";
    endWindow.innerHTML = "\n    <h1>Unlucky</h1>\n    <h2>It seems like you got fooled and ended up caught in the trap</h2>\n    <h2>Keep on the look out for false doors next time</h2>\n    <div class=\"win-health\"> you had ".concat(HP, " HP remaining</div>\n    <button id=\"remove\">Back to Game</button>\n    ");
    var reFresh = document.getElementById("remove");
    reFresh.addEventListener("click", function () {
      window.location.reload();
    });
  }
}; // Handle winning


var handleWin = function handleWin() {
  if (finish.getBoundingClientRect().x > currPos().x + currPos().width || finish.getBoundingClientRect().x + finish.getBoundingClientRect().width < currPos().x || finish.getBoundingClientRect().y > currPos().y + currPos().height || finish.getBoundingClientRect().y + finish.getBoundingClientRect().height < currPos().y) {//no collision
  } else {
    endWindow.classList.add("show");
    endWindow.innerHTML += "\n        <div class=\"win-health\"> you had ".concat(HP, " HP remaining</div>\n        <button id=\"remove\">Back to Game</button>\n        ");
    var reFresh = document.getElementById("remove");
    reFresh.addEventListener("click", function () {
      window.location.reload();
    });
    displayBoard.textContent = "Winner Winner Winner!";
  }
}; // initiate Start


startButton.addEventListener("click", handleStartGame);
ReStart.addEventListener("click", function () {
  window.location.reload();
}); // character movement

characterMovement.forEach(function (movement) {
  movement.addEventListener("click", function (e) {
    e.preventDefault();
    handleHealth();
    handlePlayerMovement(e);
    handleWin();
    handleTrap();
  });
});