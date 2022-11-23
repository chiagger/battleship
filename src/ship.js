class Ship {
    constructor(length, gameboard) {
        this.length = length;
        this.timesHit = 0;
        this.sunk = false;
        this.cc = [];
        this.gameboard = gameboard;
    }
    getGameboard() {
        return this.gameboard;
    }
    getCc() {
        return this.cc;
    }
    setCc(value) {
        this.cc.push(value);
    }
    getLength() {
        return this.length;
    }
    getTimesHit() {
        return this.timesHit;
    }
    getSunk() {
        return this.sunk;
    }
    setSunk(value) {
        this.sunk = value;
    }
    increaseHit() {
        this.timesHit += 1;
    }
    isSunk() {
        let result = false;
        if (this.length === this.timesHit) {
            this.sunk = true;
            result = true;
        }
        return result;
    }
}

//handles the logic for only having a certain amount of x length ships
function createShip(length, gameboard) {
    let newShip = new Ship(length, gameboard);
    if (newShip.getGameboard() === undefined) {
        throw new Error("undefined gb");
    }
    
    let flag = false;
    if (length === 4) {
        for (let i = 0; i < newShip.getGameboard().getShipArray4().length; i++) {
            if (newShip.getGameboard().getShipArray4()[i] === undefined) {
                flag = true;
                newShip.getGameboard().setShipArray(newShip);
                newShip.getGameboard().setShipArray4(newShip, i);
                break;
            }
        }
    }
    if (length === 3) {
        for (let i = 0; i < newShip.getGameboard().getShipArray3().length; i++) {
            if (newShip.getGameboard().getShipArray3()[i] === undefined) {
                flag = true;
                newShip.getGameboard().setShipArray(newShip);
                newShip.getGameboard().setShipArray3(newShip, i);
                break;
            }
        }
    }
    if (length === 2) {
        for (let i = 0; i < newShip.getGameboard().getShipArray2().length; i++) {
            if (newShip.getGameboard().getShipArray2()[i] === undefined) {
                flag = true;
                newShip.getGameboard().setShipArray(newShip);
                newShip.getGameboard().setShipArray2(newShip, i);
                break;
            }
        }
    }
    if (length === 1) {
        for (let i = 0; i < newShip.getGameboard().getShipArray1().length; i++) {
            if (newShip.getGameboard().getShipArray1()[i] === undefined) {
                flag = true;
                newShip.getGameboard().setShipArray(newShip);
                newShip.getGameboard().setShipArray1(newShip, i);
                break;
            }
        }
    }
    if (flag === true) {
        return newShip;
    } else {
        throw new Error("Too many ships");
    }
}



module.exports = { createShip, Ship }