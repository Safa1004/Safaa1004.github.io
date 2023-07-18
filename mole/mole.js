let currMoleTile;
let currPlanTile;
let score =0;
let gameOver = false
window.onload = function() {
    setGme();
}

function setGme() {
    // set up the grid for the game board in HTML 
    for (let i = 0; i < 9; i++) {
        // <div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click" , selectTile);
        document.getElementById("board").appendChild(tile);
    }
}

setInterval(setMole, 1000); // 1000 milliseconds = 1 second
setInterval(setPlant, 2000); // 2000 milliseconds = 2 seconds

function getRandomTile() {
    // math.random --> (0-1) * 9 =(0-9) --> round down to (0-8) integers 
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if(gameOver){
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    let num = getRandomTile(); 
    if ( currPlanTile && currPlanTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if(gameOver){
        return;
    }
    if (currPlanTile) {
        currPlanTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";
    let num = getRandomTile();
    if ( currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlanTile = document.getElementById(num);
    currPlanTile.appendChild(plant);
}
function selectTile(){
    if (gameOver){
        return;
    }
    if ( this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString(); 
    }
    else if ( this == currPlanTile){
        document.getElementById("score").innerText = " GAME OVER" + score.toString();
        gameOver = true;
    }
}

function selectTile() {
    if (gameOver) {
      return;
    }
    if (this == currMoleTile) {
      score += 10;
      document.getElementById("score").innerText = score.toString();
    } else if (this == currPlanTile) {
      document.getElementById("score").innerText = " GAME OVER " + score.toString();
      gameOver = true;
      
      // Show modal with final score
      document.getElementById("final-score").innerText = score.toString();
      document.getElementById("modal").style.display = "block";
    }
  }
  
  // Add event listener to "Play Again" button in the modal
  document.getElementById("play-again-btn").addEventListener("click", playAgain);
  
  // Function to restart the game
  function playAgain() {
    score = 0;
    gameOver = false;
    document.getElementById("score").innerText = "0";
    document.getElementById("modal").style.display = "none";
  }
  const music = document.getElementById("music");
const soundToggle = document.getElementById("sound-toggle");

soundToggle.addEventListener("click", toggleSound);

function toggleSound() {
  if (music.paused) {
    music.play();
    soundToggle.classList.remove("sound-off");
  } else {
    music.pause();
    soundToggle.classList.add("sound-off");
  }
}
function selectTile() {
    if (gameOver) {
      return;
    }
    if (this == currMoleTile) {
      score += 10;
      document.getElementById("score").innerText = score.toString();
      
      // Play the whack sound
      var whackSound = document.getElementById("whack-sound");
      whackSound.play();
    } else if (this == currPlanTile) {
      document.getElementById("score").innerText = " GAME OVER " + score.toString();
      gameOver = true;
      
      // Show modal with final score
      document.getElementById("final-score").innerText = score.toString();
      document.getElementById("modal").style.display = "block";
    }
  }

  // Add event listener to show game instructions
document.addEventListener("DOMContentLoaded", showInstructions);

function showInstructions() {
  // Show game instructions
  document.getElementById("game-instructions").style.display = "block";
}

// Add event listener to hide game instructions and start the game
document.getElementById("start-game-btn").addEventListener("click", startGame);

function startGame() {
  // Hide game instructions
  document.getElementById("game-instructions").style.display = "none";
  
  // Add code to start the game here
}
