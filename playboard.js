import ship from "./ship.js";
import gameBoard from "./gameBoard.js";
import player from "./players.js";
import changeGui from "./domManager.js"


const userInput = document.querySelector("#username")
const sbmUserName = document.querySelector(".playfield .userpanel button")


sbmUserName.addEventListener("click",() => {
    changeGui()
})


