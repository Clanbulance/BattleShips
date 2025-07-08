import ship from "./ship.js";
import gameBoard from "./gameBoard.js";
import player from "./players.js";

let p1Name,p2Name = ""
const userInput = document.querySelector("#username")

function consolePlayers(){
    p1Name = new player(userInput.value,"human")
    p2Name = new player("botMeister234","bot")
    console.log(`Player has chosen : ${p1Name.name}`)
    console.log(`He will be facing: ${p2Name.name}`)
}

function initiateGame(){
    console.log("test")
}

export  {consolePlayers,initiateGame}