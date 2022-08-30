// get player
let  player = document.querySelector(".game__player");
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


let X = 0 

let Y = 0


let timeUp = false;
let timeLimit = 50000;
let HP = 500;
let countdown ;

let right = () => {
    player.style.transform = `translate(${X+=65}px, ${Y}px)`
}  

let moveRight = [
    { transform: `translate(${X+=65}px, ${Y}px)` }
]

let moveUp = [
    { transform: `translate(${X}px, ${Y-=65}px)` }
]

let moveDown = [
    { transform: `translate(${X}px, ${Y+=65}px)` }
]

let moveLeft = [
    { transform: `translate(${X-=65}px, ${Y}px)` }
]



const frames = {
    duration: 3000,
    fill: 'forwards'
}
// event testing

let loop
let fps = 60;

let grid, token;


prepareGrid = () => {
    grid = document.getElementsByClassName(".game")[0];
    token = grid.getContext('2d');
}

// let currentPosX = player.offsetLeft
// console.log(currentPosX);

// let currentPosY = player.offsetTop
// console.log(currentPosY);

// let value = player.style.left
// console.log(value);

const position = () => {
    let currentX = player.offsetLeft
    console.log(currentX);
    
    
    player = currentX
    return player
};


// this.player = {x: 596, y: 180, color: "red"};
// return this.player




// let NewTile = this.gamePlayer.X + this.gamePlayer.Y; 
// console.log(NewTile);



// game functions


update = () => {
    console.log("updating");
}

render = () => {
    console.log("rendering");
}



// Handle Start function
const handleStartGame = () => {
    console.log("game has started");
    loop = setInterval(() => {
        update();
        render();
    }, 1000/fps);


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
            countdownTimer.textContent = "Time is UPP!!"
        }
    }, 1000);

    // new player appears at gateway
    
};




// handle Character movement
const handlePlayerMovement = (e) => {
    console.log(e);
    switch (e.target.value) {
        case "up":
            player.style.transform = `translate(${X}px, ${Y-=100}px)`
            console.log(player);
            console.log("player moved up");
            break;
        case "left":
            player.style.transform = `translate(${X-=100}px, ${Y}px)`
            console.log("player moved left");
            break;
        case "right":
            player.style.transform = `translate(${X+=100}px, ${Y}px)`
            console.log("player moved right")
            
            break;
        case "down":
            player.style.transform = `translate(${X}px, ${Y+=100}px)`
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
            
            console.log("ouch -20hp")
        });
    })
        
        
    bombs.forEach((bomb) => {
        bomb.addEventListener("mouseover", () => { 
        HP -= 50;
        characterHP.textContent = HP;        
        console.log("BOOOOOM -50hp")
        // this.style.background = `url(./image/y8lb_c1ux_201215.jpg)`;
        // this.style.backgroundImage = `url(./image/y8lb_c1ux_201215.jpg)`
        // this.bomb.pointerEvent = "none"
        // setTimeout = (() => { 
            // this.style.backgroundImage = "url(./image/Brick_04.png)"
            // this.bomb.mouseEvents = "auto"

        // }, 3000);    
    });

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
        e.preventDefault();
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