const ship = require("./ship.js")
const gameBoard = require("./gameBoard")


class player{
    constructor(name,type){
        this.name = name;
        this.type = type; //real player or pc
        this.board = new gameBoard()
    }
}