const ship = require("./ship.js")
const gameBoard = require("./gameBoard")


describe("ship function",()=> {
    const newShip = new ship("destroyer",4)
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
        expect(newShip.size).toBeGreaterThan(0);
    }),

    it("has been hit 1 time/has hitter function",()=>{
        expect(newShip.hit).toBe(1);
    }),

    it("has sunken status",()=>{
        expect(newShip.isSunk()).toBe(false);
    })


})


describe("Gameboard",()=>{
    const board = new gameBoard();
    console.log(board.field)
    it("its a function",()=> {
        expect(typeof gameBoard).toBe("function");
    }),
    it("can access ship class",()=> {
        expect(typeof ship).toBe("function");
    }),

    it("gameboard array is generated",()=> {
        expect(Array.isArray(board.field)).toBe(true);
    })

});




/*
    it("test1",()=> {
        expect("").toBe("");
    }),
});

*/