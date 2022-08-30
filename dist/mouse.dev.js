"use strict";

// get all game squares
var pathwaySquares = document.querySelectorAll(".game__path");
var thornSquares = document.querySelectorAll(".game__thorns");
var bombSquares = document.querySelectorAll(".game__bomb");
var gatewaySquares = document.querySelectorAll(".game__gate");
var endWindow = document.querySelector(".game-end"); // get start  and restart button

var startButton = document.getElementById("game-start");
var ReStart = document.getElementById("game-redo"); // get gateway, finish and trap buttons

var gateway = document.querySelector("g2");
var finish = document.getElementById("g1");
var trap = document.getElementById("g3"); // get Display 

var displayBoard = document.querySelector(".display__board"); // HP and Countdown

var characterHP = document.querySelector(".game__hitPoints");
var countdownTimer = document.querySelector(".game__countdown"); // Collate collections into arrays

var pathways = Array.from(pathwaySquares);
var bombs = Array.from(bombSquares);
var thorns = Array.from(thornSquares);
var gateways = Array.from(gatewaySquares); // game variables

var timeUp = false;
var timeLimit = 25000;
var HP = 350;
var countdown; // event testing
// game functions
// Handle Start function

var handleStartGame = function handleStartGame() {
  displayBoard.textContent = "The game has BEGUN!!";
  countdown = timeLimit / 1000;
  characterHP.textContent = HP;
  countdownTimer.textContent = countdown;
  timeUp = false;
  HP = 350;
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
}; // handle hp loss


var handleHealth = function handleHealth() {
  thorns.forEach(function (thorn) {
    thorn.addEventListener("mouseover", function () {
      HP -= 30;
      characterHP.textContent = HP;

      if (HP <= 0) {
        endWindow.classList.add("show");
        endWindow.style.backgroundColor = "red";
        endWindow.innerHTML = "\n                <h1>OH Noooo!</h1>\n                <h2>You've ran out of health</h2>\n                <h2>Maybe next time go a bit slower and be more cautious</h2>\n                <button id=\"remove\">Back to Game</button>\n                ";
        var reFresh = document.getElementById("remove");
        reFresh.addEventListener("click", function () {
          window.location.reload();
        });
      }

      displayBoard.innerHTML = "\n            <h1>Ouch! Watch out for them Thorns!</h1> \n            <h2>Thats minus 30 HP...</h2> \n            <h2>Only ".concat(HP, " HP remaining</h2>");
    });
  });
  bombs.forEach(function (bomb) {
    bomb.addEventListener("mouseover", function () {
      HP -= 70;
      characterHP.textContent = HP;

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

      displayBoard.innerHTML = "\n            <h1>BOOM! Watch your step!</h1> \n            <h2>Thats minus 70 HP...</h2> \n            <h2>Only ".concat(HP, " HP remaining</h2>");
    });
  });
}; // Handle trap


var handleTrap = function handleTrap(e) {
  trap.addEventListener("mouseover", function (e) {
    endWindow.classList.add("show");
    endWindow.style.backgroundColor = "midnightblue";
    endWindow.innerHTML = "\n        <h1>Unlucky</h1>\n        <h2>It seems like you got fooled and ended up caught in the trap</h2>\n        <h2>Keep on the look out for false doors next time</h2>\n        <div class=\"win-health\"> you had ".concat(HP, " HP remaining</div>\n        <button id=\"remove\">Back to Game</button>\n        ");
    var reFresh = document.getElementById("remove");
    reFresh.addEventListener("click", function () {
      window.location.reload();
    });
  });
}; // Handle winning


var handleWin = function handleWin() {
  finish.addEventListener("mouseover", function () {
    endWindow.classList.add("show");
    endWindow.innerHTML += "\n        <div class=\"win-health\"> you had ".concat(HP, " HP remaining</div>\n        <button id=\"remove\">Back to Game</button>\n        ");
    var reFresh = document.getElementById("remove");
    reFresh.addEventListener("click", function () {
      window.location.reload();
    });
    displayBoard.textContent = "Winner Winner Winner!";
  });
};

var handleLoss = function handleLoss() {
  if (HP <= 0) {
    endWindow.classList.add("show");
    endWindow.style.backgroundColor = "red";
    endWindow.innerHTML = "\n        <h1>OH Noooo!</h1>\n        <h2>You've ran out of health</h2>\n        <h2>KMaybe next time go a bit slower and be more cautious</h2>\n        <div class=\"win-health\"> you had ".concat(HP, " HP remaining</div>\n        <button id=\"remove\">Back to Game</button>\n        ");
    var reFresh = document.getElementById("remove");
    reFresh.addEventListener("click", function () {
      window.location.reload();
    });
  }
}; // initiate Start


startButton.addEventListener("click", handleStartGame);
ReStart.addEventListener("click", function () {
  window.location.reload();
});
handleHealth();
handleTrap();
handleWin();
handleLoss();