import ship from "./ship.js";
import gameBoard from "./gameBoard.js";
import player from "./players.js";
import {consolePlayers,initiateGUI,createBoxFromArray, players} from "./domManager.js"



const sbmUserName = document.querySelector(".playfield .userpanel button")


sbmUserName.addEventListener("click",() => {
    consolePlayers()
    initiateGUI()
    createBoxFromArray(players)
})
