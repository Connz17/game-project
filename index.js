// get all game squares
const pathwaySquares = document.getElementsByClassName("game__path")
console.log(pathwaySquares);

const thornSquares = document.getElementsByClassName("game__thorns")
console.log(thornSquares);

const bombSquares = document.getElementsByClassName("game__bomb")
console.log(bombSquares);

const gatewaySquares = document.getElementsByClassName("game__gate");
console.log(gatewaySquares);

// get start button
const startButton = document.getElementById("game-start")
console.log(startButton);

// get movement buttons
const characterMovement = document.getElementsByClassName("movement__buttons")
console.log(characterMovement); 



// Collate collections into arrays
const pathways = Array.from(pathwaySquares)
console.log(pathways);

const movements = Array.from(characterMovement)
console.log(movements);

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


};



// handle Character movement
const handlePlayerMovement = () => {
    
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
const handleGateway = () => {
    // if (payer.target == gateways[0]) {
    //     console.log("Congratulations");
    // } else if (payer.target == gateways[2]) {
    //     console.log("Genjutsu trap")
    // }

    gateways.forEach((gateway) => {
        gateway.addEventListener("mouseover", () => {
            if (gateway[0]) {
                console.log("Congratulations")
            } else if (gateway[2]) {
                condition
            }console.log("Genjutsu trap")
                
            
        })
    })
};








// initiate Start
startButton.addEventListener("click", handleStartGame);



// character movement
movements.forEach((movement) => {
    movement.addEventListener("click", () => {
        handlePlayerMovement ();
        // handleBomb ();
        handleHealth ();
    })
    
});


// thorn interaction



// Function test
// handleBomb ()
handleHealth ();
handleGateway ();