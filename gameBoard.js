const ship = require("./ship.js");


class gameBoard{
    constructor(){
        this.rows = 10;
        this.cols = 10;
        this.field = this.createboard();
    }

    
        createboard = function(){
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


        
    }
    



module.exports = gameBoard

