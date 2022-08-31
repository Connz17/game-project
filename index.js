// get player
let  player = document.querySelector(".game__player");

// get all game squares
const pathwaySquares = document.querySelectorAll(".game__path")

const thornSquares = document.querySelectorAll(".game__thorns")

const bombSquares = document.querySelectorAll(".game__bomb")

const gatewaySquares = document.querySelectorAll(".game__gate");

// get end window
const endWindow = document.querySelector(".game-end");

// get Display 
const displayBoard = document.querySelector(".display__board--info")

// get start button
const startButton = document.getElementById("game-start")

const ReStart = document.getElementById("game-redo")


// get gateway, finish and trap buttons
const gateway = document.querySelector("g2")

const finish = document.getElementById("g1")

const trap = document.getElementById("g3")


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

// event testing
let currPos = () => {
    return player.getBoundingClientRect()
};

// game functions
// Handle Start function
const handleStartGame = () => {
    displayBoard.textContent = "The game has BEGUN!!"
    countdown = timeLimit/1000;
    characterHP.textContent = 500    
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
            endWindow.classList.add("show")
            endWindow.style.backgroundColor = "red"
            endWindow.innerHTML = `
            <h1>OH Noooo!</h1>
            <h2>You've ran out of time</h2>
            <h2>Maybe next time go a bit faster but remember be cautious</h2>
            <div class="win-health"> you had ${HP} HP remaining</div>
            <button id="remove">Back to Game</button>
            `        
        const reFresh = document.getElementById("remove")
        reFresh.addEventListener("click", () => {
        window.location.reload();
        })
            
            clearInterval(startCountdown);
            displayBoard.textContent = "Time is UPP!!"
        } else return
    }, 1000);
    
};


// handle Character movement
const handlePlayerMovement = (e) => {
    switch (e.target.value) {
        case "up":
            player.style.transform = `translate(${X}px, ${Y-=43}px)`
            break;
        case "left":
            player.style.transform = `translate(${X-=43}px, ${Y}px)`
            break;
        case "right":
            player.style.transform = `translate(${X+=43}px, ${Y}px)`
            break;
        case "down":
            player.style.transform = `translate(${X}px, ${Y+=43}px)`
            break;            
        default:
            break;
        }
};


// handle hp loss
const handleHealth = () => {
    thorns.forEach((thorn) => {
        if (currPos().x > thorn.getBoundingClientRect().x + thorn.getBoundingClientRect().width || currPos().x + currPos().width < thorn.getBoundingClientRect().x || currPos().y > thorn.getBoundingClientRect().y + thorn.getBoundingClientRect().height || currPos().y + currPos().height < thorn.getBoundingClientRect().y) 
        { //no collision

        } else {
            HP -= 25
            characterHP.textContent = HP;
        }
        if (HP <= 0) {
            endWindow.classList.add("show")
            endWindow.style.backgroundColor = "red"
            endWindow.innerHTML = `
            <h1>OH Noooo!</h1>
            <h2>You've ran out of health</h2>
            <h2>Maybe next time go a bit slower and be more cautious</h2>
            <button id="remove">Back to Game</button>
            `        
        const reFresh = document.getElementById("remove")
        reFresh.addEventListener("click", () => {
        window.location.reload();
    })
        }
        displayBoard.innerHTML = `
        <h1>Ouch! Watch out for those Thorns! Thats minus 25 HP...</h1>  
        <h2>Only ${HP} HP remaining</h2>`
    })
        
        bombs.forEach((bomb) => {
        if (bomb.getBoundingClientRect().x > currPos().x + currPos().width || bomb.getBoundingClientRect().x + bomb.getBoundingClientRect().width < currPos().x || bomb.getBoundingClientRect().y > currPos().y + currPos().height || bomb.getBoundingClientRect().y + bomb.getBoundingClientRect().height < currPos().y) 
        { // no collision
            return
        } else { 
            HP -= 60;
            characterHP.textContent = HP; 
            bomb.style.backgroundPosition = "center"
            bomb.style.backgroundSize = "100%"
            bomb.style.backgroundImage = "url(./image/y8lb_c1ux_201215.jpg)"
        }
        if (HP <= 0) {
            endWindow.classList.add("show")
            endWindow.style.backgroundImage = "url(./image/sw7i_axtl_201215.jpg"
            endWindow.style.backgroundSize = "100%"
            endWindow.style.backgroundPosition = "center"
            endWindow.style.color = "black"
            endWindow.innerHTML = `
            <h1>BOOOOOM!</h1>
            <h2>You've gone and got yourself blown up</h2>
            <h2>Maybe next time be a bit more cautious</h2>
            <button id="remove">Back to Game</button>
            `        
        const reFresh = document.getElementById("remove")
        reFresh.addEventListener("click", () => {
        window.location.reload();
    })
        }       
        displayBoard.innerHTML = `
            <h1>BOOM! Watch your step! Thats minus 60 HP...</h1> 
            <h2>Only ${HP} HP remaining</h2>`
    });
};


// Handle trap door
const handleTrap = (e) => {
    if (trap.getBoundingClientRect().x > currPos().x + currPos().width || trap.getBoundingClientRect().x + trap.getBoundingClientRect().width < currPos().x || trap.getBoundingClientRect().y > currPos().y + currPos().height || trap.getBoundingClientRect().y + trap.getBoundingClientRect().height < currPos().y) {
        //no collision
    } else {
        endWindow.classList.add("show")
        endWindow.style.backgroundColor = "midnightblue"
    endWindow.innerHTML = `
    <h1>Unlucky</h1>
    <h2>It seems like you got fooled and ended up caught in the trap</h2>
    <h2>Keep on the look out for false doors next time</h2>
    <div class="win-health"> you had ${HP} HP remaining</div>
    <button id="remove">Back to Game</button>
    `        
    const reFresh = document.getElementById("remove")
    reFresh.addEventListener("click", () => {
    window.location.reload();
        })
    }            
};



// Handle winning
const handleWin = () => {
    if (finish.getBoundingClientRect().x > currPos().x + currPos().width || finish.getBoundingClientRect().x + finish.getBoundingClientRect().width < currPos().x || finish.getBoundingClientRect().y > currPos().y + currPos().height || finish.getBoundingClientRect().y + finish.getBoundingClientRect().height < currPos().y) {
        //no collision
    } else {
        endWindow.classList.add("show")
        endWindow.innerHTML += `
        <div class="win-health"> you had ${HP} HP remaining</div>
        <button id="remove">Back to Game</button>
        `        
        const reFresh = document.getElementById("remove")
        reFresh.addEventListener("click", () => {
        window.location.reload();
    })
        displayBoard.textContent = "Winner Winner Winner!"
    }
}

// initiate Start
startButton.addEventListener("click", handleStartGame);

ReStart.addEventListener("click", () => {
    window.location.reload();
})


// character movement
characterMovement.forEach((movement) => {
    movement.addEventListener("click", (e) => {
        e.preventDefault();
        handleHealth ();
        handlePlayerMovement (e);        
        handleWin ();
        handleTrap ();
    })
    
});
