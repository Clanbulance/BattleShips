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

        placeShip(shipname,startx, starty, endx, endy){
            if(shipname.startx == shipname.endx){
                for (let i = shipname.starty;i <= shipname.endy; i++){
                    this.field[i][shipname.startx] = shipname;
                }
            }

        }

        receiveAttack(x,y){
            if  (this.field[x][y] != null){
                const target = this.field[x][y];
                console.log(target)
                target.hasBeenShot()

                return `HIT ON ${target.name}`

            }else{
                this.misses++
                return this.misses
            }

        }

        allShipsDead(){
            
            this.ships.forEach(ship => ship.isSunk() ? this.shipsdead = true : this.shipsdead = false)
            return this.shipsdead

        }

        
    }
    