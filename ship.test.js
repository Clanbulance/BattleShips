import ship from "./ship.js"
import gameBoard from "./gameBoard.js"


describe("ship function",()=> {
    const newShip = new ship("destroyer",1,1,1,4)
    newShip.hasBeenShot()
    newShip.hasBeenShot()
    newShip.hasBeenShot()
    newShip.hasBeenShot()
    newShip.hasBeenShot()
    newShip.hasBeenShot()
    console.log(newShip)

    it("the Class is there",()=>{
        expect(typeof ship).toBe("function")
    }),

    it("it can creade object functions",()=>{
        expect(typeof newShip).toBe("object");
    }),
    it("the shipname is Destroyer?",() => {
        expect(newShip.name).toBe("destroyer")
    }),

    it("ship has length > 0",()=>{
        expect(newShip.size()).toBe(4);
    }),

    it("has been hit 1 time/has hitter function",()=>{
        expect(newShip.hit).toBeGreaterThan(1);
    }),

    it("has sunken status",()=>{
        expect(newShip.isSunk()).toBe(true);
    })
})


describe("Gameboard",()=>{
    const board = new gameBoard();
    const newShip = new ship("destroyer",1,1,1,4);
    board.ships.push(newShip)

    it("its a function",()=> {
        expect(typeof gameBoard).toBe("function");
    }),
    it("can access ship class",()=> {
        expect(typeof ship).toBe("function");
    }),

    it("gameboard array is generated",()=> {
        expect(Array.isArray(board.field)).toBe(true);
    }),
    it("ship placed in array?",() => {
            board.placeShip(newShip);
            console.log(board.field);
            expect(board.field[1][1].name).toBe("destroyer");
            expect(board.field[2][1].name).toBe("destroyer");
            expect(board.field[3][1].name).toBe("destroyer");
            expect(board.field[4][1].name).toBe("destroyer");
    }),

    it("there's a receive attack function",()=>{
        expect(typeof board.receiveAttack).toBe("function");
    }),

    it("receiveattack did hit",()=>{
        expect(board.receiveAttack(2,1)).toBe("HIT ON destroyer");
    }),

    it("hasbeenshot has been called",()=>{
        expect(newShip.hit).toBe(1);
    }),
    it("receiveattack has missed",()=>{
        expect(board.receiveAttack(0,0)).toBe(1)
    }),

    it("there's a ship saved in gameboard.ships",()=>{
        console.log(board);
        expect(board.ships[0]).toBe(newShip)
    }),

    it("all ships from board are sunken",()=>{
        board.receiveAttack(1,1)
        board.receiveAttack(3,1)
        board.receiveAttack(4,1)
        expect(board.allShipsDead()).toBe(true);
    })
});




/*
    it("test1",()=> {
        expect("").toBe("");
    }),
});

*/