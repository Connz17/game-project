// get player


// get all game squares
const pathwaySquares = document.querySelectorAll(".game__path")
console.log(pathwaySquares);

const thornSquares = document.querySelectorAll(".game__thorns")
console.log(thornSquares);

const bombSquares = document.querySelectorAll(".game__bomb")
console.log(bombSquares);

const gatewaySquares = document.querySelectorAll(".game__gate");
console.log(gatewaySquares);


const endWindow = document.querySelector(".game-end");

// get start  and restart button
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


// get Display 
const displayBoard = document.querySelector(".display__board")
console.log(displayBoard); 

// HP and Countdown
const characterHP = document.querySelector(".game__hitPoints")
console.log(characterHP);

const countdownTimer = document.querySelector(".game__countdown")
console.log(countdownTimer);

// Collate collections into arrays
const pathways = Array.from(pathwaySquares)
console.log(pathways);

const bombs = Array.from(bombSquares)
console.log(bombs);

const thorns = Array.from(thornSquares);
console.log(thorns);

const gateways = Array.from(gatewaySquares);
console.log(gateways);



let timeUp = false;
let timeLimit = 25000;
let HP = 350;
let countdown ;

// event testing






// game functions

// Handle Start function
const handleStartGame = () => {
    console.log("game has started");
    countdown = timeLimit/1000;
    characterHP.textContent = HP;    
    countdownTimer.textContent = countdown
    timeUp = false;
    HP = 350;
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
        }
    }, 1000);

    
};



// handle hp loss
const handleHealth = () => {
    thorns.forEach((thorn) => {
        thorn.addEventListener("mouseover", () => {
            HP -= 30;
            characterHP.textContent = HP;
            if (HP <= 0) {
                endWindow.classList.add("show")
                endWindow.style.backgroundColor = "red"
                endWindow.innerHTML = `
                <h1>OH Noooo!</h1>
                <h2>You've ran out of health</h2>
                <h2>Maybe next time go a bit slower and be more cautious</h2>
                <div class="win-health"> you had ${HP} HP remaining</div>
                <button id="remove">Back to Game</button>
                `        
            const reFresh = document.getElementById("remove")
            reFresh.addEventListener("click", () => {
            window.location.reload();
        })
            }
            displayBoard.innerHTML = `
            <h1>Ouch! Watch out for them Thorns!</h1> 
            <h2>Thats minus 30 HP...</h2> 
            <h2>Only ${HP} HP remaining</h2>`
        });
    })                
    bombs.forEach((bomb) => {
        bomb.addEventListener("mouseover", () => { 
        HP -= 70;
        characterHP.textContent = HP; 
        if (HP <= 0) {
            endWindow.classList.add("show")
            endWindow.style.backgroundImage = "url(./image/y8lb_c1ux_201215.jpg"
            endWindow.style.backgroundSize = "100%"
            endWindow.style.backgroundPosition = "center"
            endWindow.style.color = "blue"
            endWindow.innerHTML = `
            <h1>BOOOOOM!</h1>
            <h2>You've gone and got yourself blown up</h2>
            <h2>Maybe next time be a bit more cautious</h2>
            <div class="win-health"> you had ${HP} HP remaining</div>
            <button id="remove">Back to Game</button>
            `        
        const reFresh = document.getElementById("remove")
        reFresh.addEventListener("click", () => {
        window.location.reload();
    })
        }       
        displayBoard.innerHTML = `
            <h1>BOOM! Watch your step!</h1> 
            <h2>Thats minus 70 HP...</h2> 
            <h2>Only ${HP} HP remaining</h2>`
   
    });
    });
    
};



// Handle trap
const handleTrap = (e) => {
    trap.addEventListener("mouseover", (e) => {
            console.log("Caught in a Genjutsu trap");
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
    })  
    };


// Handle winning
const handleWin = () => {

    finish.addEventListener("mouseover", () => {
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
});
}

const handleLoss = () => {
    if (HP <= 0) {
        endWindow.classList.add("show")
        endWindow.style.backgroundColor = "red"
        endWindow.innerHTML = `
        <h1>OH Noooo!</h1>
        <h2>You've ran out of health</h2>
        <h2>KMaybe next time go a bit slower and be more cautious</h2>
        <div class="win-health"> you had ${HP} HP remaining</div>
        <button id="remove">Back to Game</button>
        `        
    const reFresh = document.getElementById("remove")
    reFresh.addEventListener("click", () => {
    window.location.reload();
})
}
};



// initiate Start
startButton.addEventListener("click", handleStartGame);

ReStart.addEventListener("click", () => {
    window.location.reload();
})


handleHealth ();
handleTrap ();
handleWin ();
handleLoss ();