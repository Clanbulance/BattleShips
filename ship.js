class ship{
    constructor(name,size,hit=0,){
        this.name = name;
        this.size = size;
        this.hit = hit;
    }

    hasBeenShot(){
        return this.hit++
    }

    isSunk(){
        return this.hit >= this.size;
    }
}

module.exports = ship