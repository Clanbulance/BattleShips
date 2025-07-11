import ship from "./ship.js";
import gameBoard from "./gameBoard.js";
import player from "./players.js";

let p1Name,p2Name = ""
const userInput = document.querySelector("#username")
const userpanel = document.querySelector("#userpanel")
const botpanel = document.querySelector("#botpanel")
const players = [];

// create the players from the inputfields and add them to the array
function consolePlayers(){
    p1Name = new player(userInput.value,"human")
    players.push(p1Name)
    p2Name = new player("botMeister234","bot")
    players.push(p2Name)
    console.log(`Player has chosen : ${p1Name.name}`)
    console.log(`He will be facing: ${p2Name.name}`)
}


/*
When initiating the game we want the current text to be removed.
We want the usernames to be on top of their playing fields

Then we want to make it so we have a grid for both players

*/

// helperfunction to test
function createPanelContent(playerobjectname){
    const namefield = document.createElement('div');
    namefield.classList.add("name")

    const playbox = document.createElement('div');
    playbox.classList.add("playbox")
    playbox.id =  playerobjectname

    return [namefield,playbox]
}

//generate a gamecontainer element
function createGameContainer(playername){

    const gameContainer = document.createElement("div");
    const scoreContainer = document.createElement("div");

    gameContainer.classList.add("gameContainer");
    scoreContainer.classList.add("scoreContainer");

    gameContainer.id = playername+"-grid"
    scoreContainer.id = playername+"-score"

    return [scoreContainer,gameContainer]
}

//helperfunction to create the GRID from array
// we will use this helper function to create cells so we can then append the cells to the field
function createCell(x,y){
    const cell = document.createElement("div")
    cell.classList.add("cell");
    cell.dataset.x = x;
    cell.dataset.y = y;

    return cell
}


//Both players havea seperate gameboard. We need to create visuals for these arrays inside of:
// "#adad-grid" *& #p2Name.namn+"grid"
// we will case this function for both arrays (p1Name.field & p2Name.field)
function createBoxFromArray(array){

   //set variables
   const p1grid = document.querySelector(`#${p1Name.name}-grid`)
   const p2grid = document.querySelector(`#${p2Name.name}-grid`)

   for (let i = 0;i < 10;i++){
    for (let j = 0;j < 10;j++){
        p1grid.append(createCell(i,j))
        p2grid.append(createCell(i,j))
    }
   }


}

// this will start the GUI creating
function initiateGUI(){
    console.log("starting the initiateGame function")

    // clear boxes
    userpanel.innerHTML = "";
    botpanel.innerHTML = "";

    // call the helper function to generate divs
    userpanel.append(...createPanelContent(p1Name.name));
    botpanel.append(...createPanelContent(p2Name.name));

    // add the usernames to the topfield
    document.querySelector(".userpanel .name").textContent = p1Name.name
    document.querySelector(".botpanel .name").textContent = p2Name.name

    //add the gameGUI class
    userpanel.classList = "gameGUI"
    botpanel.classList = "gameGUI"

    //call the helperfunction to create gameContainer element on :
    // #userpanel p1Name.name / #botpanel p2Name.name
    document.querySelector("#userpanel .playbox").append(...createGameContainer(p1Name.name))
    document.querySelector("#botpanel .playbox").append(...createGameContainer(p2Name.name))

}

export  {consolePlayers,initiateGUI,createBoxFromArray, players}