import ship from "./ship.js";


export default class gameBoard{
    constructor(){
        this.rows = 10;
        this.cols = 10;
        this.field = this.createboard();
        this.misses = 0
        this.ships = []
        this.shipsdead = false
    }

    // this creates an array of 10x10, we can use this as the gamboard to make it easier to visualize and reach it.
createboard(){
        const tempV = [];
        for (let i = 0;i < this.rows;i++){
            const row =  []
            for(let n = 0;n < this.cols;n++){
                row.push(null)
            }
            tempV.push(row);
        }
        return tempV;
}

placeShip(ship) {
    if (ship.startx === ship.endx) {
        // Vertical placement
        for (let y = ship.starty; y <= ship.endy; y++) {
            this.field[y][ship.startx] = ship.name;
        }
    } else if (ship.starty === ship.endy) {
        // Horizontal placement
        for (let x = ship.startx; x <= ship.endx; x++) {
            this.field[ship.starty][x] = ship.name;
        }
    } else {
        console.error("Diagonal placement not supported");
    }

    this.ships.push(ship);
}

receiveAttack(who,x,y){
    const domCell = document.querySelector(`[data-player='${who.name}'][data-x='${x}'][data-y='${y}']`)
        if  (this.field[x][y] != null){
            const target = this. field[x][y];
            domCell.innerHTML = "💥"
            who.board.ships.forEach(ship => {
                if (ship.name == target){
                    ship.hasBeenShot(who)
                    ship.isSunk()
                }
            })
    
        }else{
            this.misses++
            console.log(this.misses)
            domCell.innerHTML = "💦"
            return this.misses
            
        }

        this.allShipsDead(); // ✅ Refresh the status after every hit
    }

allShipsDead() { 
    if (this.ships.length === 0) return false; // prevent false win
    const allDead = this.ships.every(ship => ship.isSunk());
    this.shipsdead = allDead;
    return allDead;
}

        
}
    