import ship from "./ship.js";
import gameBoard from "./gameBoard.js";
import player from "./players.js";

let p1Name,p2Name = ""
const userInput = document.querySelector("#username")
const userpanel = document.querySelector("#userpanel")
const botpanel = document.querySelector("#botpanel")

function consolePlayers(){
    p1Name = new player(userInput.value,"human")
    p2Name = new player("botMeister234","bot")
    console.log(`Player has chosen : ${p1Name.name}`)
    console.log(`He will be facing: ${p2Name.name}`)
}


/*
When initiating the game we want the current text to be removed.
We want the usernames to be on top of their playing fields

Then we want to make it so we have a grid for both players

*/
// helperfunction to test
function createPanelContent(){
    const namefield = document.createElement('div');
    namefield.classList.add("name")

    const playbox = document.createElement('div');
    playbox.classList.add("playbox")

    return [namefield,playbox]
}

function initiateGame(){
    console.log("starting the initiateGame function")

    // clear boxes
    userpanel.innerHTML = "";
    botpanel.innerHTML = "";

    // call the helper function to generate divs
    userpanel.append(...createPanelContent());
    botpanel.append(...createPanelContent());

    // add the usernames to the topfield
    document.querySelector(".userpanel .name").textContent = p1Name.name
    document.querySelector(".botpanel .name").textContent = p2Name.name

    //add the gameGUI class
    userpanel.classList = "gameGUI"
    botpanel.classList = "gameGUI"


}

export  {consolePlayers,initiateGame}