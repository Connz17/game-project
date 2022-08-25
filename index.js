// get all game squares
const pathwaySquares = document.querySelectorAll(".game__path")
console.log(pathwaySquares);

const thornSquares = document.querySelectorAll(".game__thorns")
console.log(thornSquares);

const bombSquares = document.querySelectorAll(".game__bomb")
console.log(bombSquares);

const gatewaySquares = document.querySelectorAll(".game__gate");
console.log(gatewaySquares);

// get start button
const startButton = document.getElementById("game-start")
console.log(startButton);

// get gateway, finish and trap buttons
const gateway = document.querySelector("g2")
console.log(gateway);

const finish = document.getElementById("g1")
console.log(finish);

const trap = document.getElementById("g3")
console.log(trap);


// get movement buttons
const characterMovement = document.querySelectorAll(".movement__buttons")
console.log(characterMovement); 



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



// event testing






// game functions

// Handle Start function
const handleStartGame = () => {
    console.log("game has started");
    
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
        thorn.addEventListener("mouseover", () => console.log("ouch -2hp"));
    })
    
    bombs.forEach((bomb) => {
        bomb.addEventListener("mouseover", () => console.log("BOOOOOM -20hp"));
    });
    
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
        console.log("Congratulation you WON!")
});

}




// initiate Start
startButton.addEventListener("click", handleStartGame);



// character movement
characterMovement.forEach((movement) => {
    movement.addEventListener("click", (e) => {
        handlePlayerMovement (e);
        // handleBomb ();
        handleHealth ();
        handleWin ();
        handleTrap ();
    })
    
});


// thorn interaction



// Function test
// handleBomb ()
handleHealth ();
handleTrap ();
handleWin ();