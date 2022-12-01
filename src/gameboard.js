const ship = require('./ship.js');

class Cell {
    constructor() {
        this.placed = false;
        this.hit = false;
        this.attacked = false;
        this.ship = undefined;
    }
    getShip() {
        return this.ship;
    }
    setShip(ship) {
        this.ship = ship;
    }
    getAttacked() {
        return this.attacked;
    }
    setAttacked(value) {
        this.attacked = value;
    }
    getPlaced() {
        return this.placed;
    }
    getHit() {
        return this.hit;
    }
    setPlaced(value) {
        this.placed = value;
    }
    setHit(value) {
        this.hit = value;
    }
}



class Gameboard {
    constructor() {
        this.board = [100];
        for (let i = 0; i < 100; i++) {
            this.board[i] = new Cell();
        }
        this.shipArray = [];
        this.shipArray4 = Array.apply(null, Array(1)).map(function () { });
        this.shipArray3 = Array.apply(null, Array(2)).map(function () { });
        this.shipArray2 = Array.apply(null, Array(3)).map(function () { });
        this.shipArray1 = Array.apply(null, Array(4)).map(function () { });
    }
    rmFromShipArray() {
        this.shipArray.pop();
    }
    rmFromShipArray1(ship) {
        let index = this.shipArray1.indexOf(ship);

        if (index !== -1) {
            this.shipArray1[index] = undefined;
        }
    }
    rmFromShipArray2(ship) {
        let index = this.shipArray2.indexOf(ship);

        if (index !== -1) {
            this.shipArray2[index] = undefined;
        }
    }
    rmFromShipArray3(ship) {
        let index = this.shipArray3.indexOf(ship);

        if (index !== -1) {
            this.shipArray3[index] = undefined;
        }
    }
    rmFromShipArray4(ship) {
        let index = this.shipArray4.indexOf(ship);

        if (index !== -1) {
            this.shipArray4[index] = undefined;
        }
    }
    getShipArray() {
        return this.shipArray;
    }
    getShipArray1() {
        return this.shipArray1;
    }
    getShipArray2() {
        return this.shipArray2;
    }
    getShipArray3() {
        return this.shipArray3;
    }
    getShipArray4() {
        return this.shipArray4;
    }
    setShipArray(ship) {
        this.shipArray.push(ship);
    }
    setShipArray1(ship, i) {
        this.shipArray1[i] = ship;
    }
    setShipArray2(ship, i) {
        this.shipArray2[i] = ship;
    }
    setShipArray3(ship, i) {
        this.shipArray3[i] = ship;
    }
    setShipArray4(ship, i) {
        this.shipArray4[i] = ship;
    }
    getBoard() {
        return this.board;
    }

    placeShip(xcc, ycc, axis, length, gameboard) {
        let newShip = ship.createShip(length, gameboard);
        let position;
        if (axis === "x") {
            if ((10 - ycc) < length) {
                throw new Error("Ship can't be placed here");
            } else {
                let canPlace = true;
                for (let k = 0; k < length; k++) {
                    position = parseInt((xcc).toString() + (ycc + k).toString());
                    if (xcc === 0) {
                        position = parseInt((ycc + k).toString());
                    }
                    if (this.board[position].getPlaced() === true) {
                        canPlace = false;
                    }
                } if (canPlace === false) {
                    this.rmFromShipArray();
                    if (length === 1) {
                        this.rmFromShipArray1(newShip);
                    } else if (length === 2) {
                        this.rmFromShipArray2(newShip);
                    } else if (length === 3) {
                        this.rmFromShipArray3(newShip);
                    } else if (length === 4) {
                        this.rmFromShipArray4(newShip);
                    }
                    throw new Error("Can't be placed")
                } else {
                    for (let i = 0; i < length; i++) {
                        position = parseInt((xcc).toString() + (ycc + i).toString());
                        if (this.board[position].getPlaced() === false) {
                            this.board[position].setPlaced(true);
                            newShip.setCc(position);
                            this.board[position].setShip(newShip);
                        }
                    }
                }
            }
        } else if (axis === "y") {
            if ((10 - xcc) < length) {
                throw new Error("Ship can't be placed here");
            }
            else {
                let canPlace = true;
                for (let k = 0; k < length; k++) {
                    position = parseInt((xcc + k).toString() + (ycc).toString());
                    if (xcc === 0 && k === 0) {
                        position = parseInt((ycc).toString());
                    }
                    if (this.board[position].getPlaced() === true) {
                        canPlace = false;
                    }
                }
                if (canPlace === false) {
                    this.rmFromShipArray();
                    if (length === 1) {
                        this.rmFromShipArray1(newShip);
                    } else if (length === 2) {
                        this.rmFromShipArray2(newShip);
                    } else if (length === 3) {
                        this.rmFromShipArray3(newShip);
                    } else if (length === 4) {
                        this.rmFromShipArray4(newShip);
                    }
                    throw new Error("Can't be placed")

                } else {
                    for (let i = 0; i < length; i++) {
                        position = parseInt((xcc + i).toString() + (ycc).toString());
                        if (this.board[position].getPlaced() === false) {
                            this.board[position].setPlaced(true);
                            newShip.setCc(position);
                            this.board[position].setShip(newShip);
                        }
                    }
                }
            }
        } else {
            throw new Error("Error in axis assignment");
        }
    }

    receiveAttack(xcc, ycc) {
        let position = parseInt((xcc).toString() + (ycc).toString());
        if (this.board[position].getAttacked() === true) {
            throw new Error("Already attacked");
        }
        this.board[position].setAttacked(true);
        if (this.board[position].getPlaced() === true) {
            this.board[position].getShip().increaseHit();

            this.board[position].setHit(true);

        }
    }
}

module.exports = { Gameboard, Cell };