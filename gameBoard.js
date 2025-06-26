const ship = require("./ship.js");


class gameBoard{
    constructor(){
        this.rows = 10;
        this.cols = 10;
        this.field = this.createboard();
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

        placeShip(shipname,startx, starty, endx, endy){
            if(shipname.startx == shipname.endx){
                for (let i = shipname.starty;i <= shipname.endy; i++){
                    this.field[i][shipname.startx] = shipname.name;
                }
            }

        }

        visualize(){
            console.log("0 1 2 3 4 5 6 7 8 9");
            this.field.forEach((row, y) => {
              const line = row.map(cell => cell ? "🛳️" : "🌊").join(" ");
              console.log(`${y} `.padStart(2, ' ') + line);
            });
        }

        receiveAttack(x,y){
            return this.field[x][y] != null ? "HIT ON Destroyer" : "MISS"
        }

        
    }
    



module.exports = gameBoard

