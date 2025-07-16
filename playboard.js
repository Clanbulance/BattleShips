import ship from "./ship.js";
import gameBoard from "./gameBoard.js";
import player from "./players.js";
import {p1Name,p2Name,consolePlayers,initiateGUI,createBoxFromArray, players,addShipsInGrid} from "./domManager.js"
import { turnManager } from "./turnManager.js";



const sbmUserName = document.querySelector(".playfield .userpanel button")


// for easiness let's always start p1 first

sbmUserName.addEventListener("click",() => {
    consolePlayers()
    initiateGUI()
    turnManager(p1Name)
    createBoxFromArray()
    addShipsInGrid()
})


