// get player
const player = document.querySelector(".game__player");
console.log(player);

// get all game squares
const pathwaySquares = document.querySelectorAll(".game__path")
console.log(pathwaySquares);

const thornSquares = document.querySelectorAll(".game__thorns")
console.log(thornSquares);

const bombSquares = document.querySelectorAll(".game__bomb")
console.log(bombSquares);

const gatewaySquares = document.querySelectorAll(".game__gate");
console.log(gatewaySquares);


const winWindow = document.querySelector(".game-win");

// get start button
const startButton = document.getElementById("game-start")
console.log(startButton);

const ReStart = document.getElementById("game-redo")

// get gateway, finish and trap buttons
const gateway = document.querySelector("g2")
console.log(gateway);

const finish = document.getElementById("g1")
console.log(finish);

const trap = document.getElementById("g3")
console.log(trap);


// get Display buttons
const displayBoard = document.querySelector(".display__board")
console.log(displayBoard); 

// HP and Coutdown
const characterHP = document.querySelector(".game__hitPoints")
console.log(characterHP);

const countdownTimer = document.querySelector(".game__countdown")
console.log(countdownTimer);

// Collate collections into arrays
const pathways = Array.from(pathwaySquares)
console.log(pathways);

// const movements = Array.from(characterMovement)
// console.log(movements);

const bombs = Array.from(bombSquares)
console.log(bombs);

const thorns = Array.from(thornSquares);
console.log(thorns);

const gateways = Array.from(gatewaySquares);
console.log(gateways);



let timeUp = false;
let timeLimit = 50000;
let HP = 500;
let countdown ;

// event testing






// game functions

// Handle Start function
const handleStartGame = () => {
    console.log("game has started");
    countdown = timeLimit/1000;
    characterHP.textContent = 500    
    // characterHP.style.display = "block";
    countdownTimer.textContent = countdown
    timeUp = false;
    HP = 500;
    setTimeout = (() => {
        timeUp = true;
    }, timeLimit);

    let startCountdown = setInterval(() => {
        countdown -= 1
        countdownTimer.textContent = countdown;
        if (countdown <0) {
            countdown = 0;
            clearInterval(startCountdown);
            displayBoard.textContent = "Time is UPP!!"
        }
    }, 1000);

    // new player appears at gateway
    
};




// handle Character movement
const handlePlayerMovement = (e) => {
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
};




// handle bomb Square
// const handleBomb = () => {
//     // if (player.target === bombs) {
//     //     alert("You have blown up");
//     // }

// bombs.forEach((bomb) => {
//     bomb.addEventListener("mouseover", () => console.log("BOOOOOM"));
// });

// };


// handle hp loss
const handleHealth = () => {
    thorns.forEach((thorn) => {
        thorn.addEventListener("mouseover", () => {
            HP -= 10;
            characterHP.textContent = HP;
            displayBoard.textContent = "Ouch! Watch out for them Thorns!"
            console.log("ouch -20hp")
        });
    })                
    bombs.forEach((bomb) => {
        bomb.addEventListener("mouseover", () => { 
        HP -= 50;
        characterHP.textContent = HP;        
        console.log("BOOOOOM -50hp")
        displayBoard.textContent = "BOOOM Watch your step"
        // this.bomb.pointerEvent = "none"
        // setTimeout = (() => { 
        //     this.bomb.pointerEvents = "auto"
        // }, 10000);    
    });
    });
    if (HP <0) {
        HP = 0;
        displayBoard.textContent = "You ran out of health...unlucky. Maybe next time be more cautious"
    } 

};



// Handle gateway and warping
const handleTrap = (e) => {
    // if (payer.target = trap) {
    //     console.log("Genjutsu trap")
    // }
    trap.addEventListener("mouseover", (e) => {
            console.log("Caught in a Genjutsu trap");
            
        })  
    };


// Handle winning
const handleWin = () => {
    // if (payer.target = finish) {
    //     console.log("Congratulation you WON!")
    // }
    finish.addEventListener("mouseover", () => {
        
        winWindow.classList.add("show")
        winWindow.innerHTML += `
       <div class="win-health"> you had ${HP} remaining</div>
       <div> you had ${timeLimit} seconds remaining</div>
       `        
        displayBoard.textContent = "Winner Winner Winner!"
});

}




// initiate Start
startButton.addEventListener("click", handleStartGame);

ReStart.addEventListener("click", () => {
    window.location.reload();
})




// character movement
// characterMovement.forEach((movement) => {
//     movement.addEventListener("click", (e) => {
//         handlePlayerMovement (e);
//         // handleBomb ();
//         handleHealth ();
//         handleWin ();
//         handleTrap ();
//     })
    
// });


// thorn interaction



// Function test
// handleBomb ()
handleHealth ();
handleTrap ();
handleWin ();