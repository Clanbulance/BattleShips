import gameBoard from "./gameBoard.js";
 




class ship{
    constructor(name,startx,starty,endx,endy){
        this.name = name;
        this.hit = 0;
        this.startx = startx;
        this.starty = starty;
        this.endx = endx;
        this.endy = endy;
    }

    hasBeenShot(who){
        console.log(this.hit+1)
        return this.hit++
        
    }

    isSunk(){  
        if (this.hit >= this.size()){
            console.log("Help we're sinking!")
            return true
        } else {
            return false
        };
    }

    size(startx, starty, endx, endy){
        if (this.startx == this.endx){
            return (this.endy - this.starty) + 1
        } else {
            return (this.endx - this.startx) + 1
        }
    }

    
}

export default ship