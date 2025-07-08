import ship from "./ship.js";
import gameBoard from "./gameBoard.js";


export default class player{
    constructor(name,type){
        this.name = name;
        this.type = type; //real player or pc
        this.board = new gameBoard()
    }
}