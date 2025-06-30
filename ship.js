const gameBoard = require("./gameBoard")


class ship{
    constructor(name,startx,starty,endx,endy){
        this.name = name;
        this.hit = 0;
        this.startx = startx;
        this.starty = starty;
        this.endx = endx;
        this.endy = endy;
    }

    hasBeenShot(){
        return this.hit++
    }

    isSunk(){
        return this.hit >= this.size();
    }

    size(startx, starty, endx, endy){
        if (this.startx == this.endx){
            return (this.endy - this.starty) + 1
        } else {
            return (this.endx - this.startx) + 1
        }
    }
}

module.exports = ship