let currMoleTile;


window.onload = function() {
    setGme();
}

function setGme() {
    // set up the grid for the game board in HTML 
    for (let i = 0; i < 9; i++) {
        // <div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
}
   setInterval(setMole ,2000); //2000 milliseconds  = 2 seconds 
function getRandomTile(){
    // math.random --> (0-1) * 9 =(0-9) --> round down to (0-8) integers 
    let num = Math.floor(Math.random()*9);
    return num.toString();
}
function setMole(){
    if(currMoleTile){
        currMoleTile.innerHTML="";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}