import { p1Name,p2Name } from "./domManager.js"

const turnIndicator = document.querySelector(".topbar")



// we'll store the logic in here
// if no one has clicked yet, it's p1's turn

let turn;

// helper function for the robot to attack on p1 board
function botClick(){
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    p1Name.board.receiveAttack(p1Name,x,y)
    console.log(`BOT just shot at ${x},${y}`)
    turnManager(p1Name)

}

function turnManager(whodidjustclick){
    let turn = whodidjustclick.name

    if(whodidjustclick.name == p1Name.name){
        turn = p1Name.name 
            }
        else{
        turn = p2Name.name
        
        };
        changeTurnIndicator(turn)
        turnVisuals(turn)

        
        if (p1Name.board.allShipsDead()) {
            alert("p2 has won!");
            return;
        }
        if (p2Name.board.allShipsDead()) {
            alert("p1 has won!");
            return;
        }
        

        if (turn === p2Name.name) {
        // Add a delay so the shot isn't immediate
        setTimeout(() => {
            botClick();
        }, 1000); // 1 second delay
    }


    return turn

}






// helper functio to change the turnindicator at the top of the page
function changeTurnIndicator(name){
    turnIndicator.innerHTML = `Active turn: ${name}`
};


//helper function to disable board:
function toggleBoard(playerName, enable) {
    const cells = document.querySelectorAll(`[data-player='${playerName}']`);
    cells.forEach(cell => {
        cell.style.pointerEvents = enable ? "auto" : "none";
        cell.style.opacity = enable ? "1" : "0.5"; // Optional visual cue
    });
}

function turnVisuals(name){
const username = document.querySelector("#userpanel .name")
const botname = document.querySelector("#botpanel .name")

    if (name == p1Name.name){
        username.style.backgroundColor = "green";
        botname.style.backgroundColor = "red";

        // Enable player 1's board, disable player 2's board
        toggleBoard(p2Name.name, true);
        toggleBoard(p1Name.name, false);


    } else {
        username.style.backgroundColor = "red";
        botname.style.backgroundColor = "green";

        // Enable player 2's board, disable player 1's board
        toggleBoard(p2Name.name, false);
        toggleBoard(p1Name.name, true);
    }

}



export {turnManager,turn,toggleBoard}