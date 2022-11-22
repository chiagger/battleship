const ship = require('./ship.js');
const gameboard = require('./gameboard.js');
const player = require('./player.js');
/*
test('ship gets placed x axis', () => {
    let gb = new gameboard.Gameboard();
    gb.placeShip(1, 1, "x", 4, gb);
    expect(gb.board[11].getPlaced()).toBe(true);
    expect(gb.board[12].getPlaced()).toBe(true);
    expect(gb.board[13].getPlaced()).toBe(true);
    expect(gb.board[14].getPlaced()).toBe(true);
    expect(gb.board[15].getPlaced()).toBe(false);
});

test('ship gets placed y axis', () => {
    let gb = new gameboard.Gameboard();
    gb.placeShip(1, 1, "y", 4, gb);
    expect(gb.board[11].getPlaced()).toBe(true);
    expect(gb.board[21].getPlaced()).toBe(true);
    expect(gb.board[31].getPlaced()).toBe(true);
    expect(gb.board[41].getPlaced()).toBe(true);
    expect(gb.board[51].getPlaced()).toBe(false);

});

test('ship doesnt get placed x axis if too long', () => {
    let gb = new gameboard.Gameboard();
    gb.placeShip(1, 8, "x", 4, gb);
    expect(gb.board[18].getPlaced()).toBe(false);
    expect(gb.board[19].getPlaced()).toBe(false);
});

test('ship doesnt get placed y axis if too long', () => {
    let gb = new gameboard.Gameboard();
    gb.placeShip(8, 1, "y", 4, gb);
    expect(gb.board[81].getPlaced()).toBe(false);
    expect(gb.board[91].getPlaced()).toBe(false);
});

test('axis error', () => {
    let gb = new gameboard.Gameboard();
    try {
        gb.placeShip(8, 1, "z", 4, gb);
    } catch (error) {
        thrownError = error;
    }
    expect(thrownError).toEqual(new Error("Error in axis assignment"));
});

test('attack is received correctly', () => {
    let gb = new gameboard.Gameboard();
    gb.placeShip(1, 1, "x", 4, gb);
    expect(gb.board[11].getShip().getTimesHit()).toBe(0);
    gb.receiveAttack(1, 1);
    expect(gb.board[11].getShip().getTimesHit()).toBe(1);
    gb.receiveAttack(1, 2);
    expect(gb.board[11].getShip().getTimesHit()).toBe(2);
    gb.receiveAttack(1, 3);
    expect(gb.board[11].getShip().getTimesHit()).toBe(3);
    gb.receiveAttack(1, 4);
    expect(gb.board[11].getShip().getTimesHit()).toBe(4);
    expect(gb.board[11].getAttacked()).toBe(true);
    expect(gb.board[12].getAttacked()).toBe(true);
    expect(gb.board[13].getAttacked()).toBe(true);
    expect(gb.board[14].getAttacked()).toBe(true);
});

test('attack is missed', () => {
    let gb = new gameboard.Gameboard();
    gb.placeShip(1, 1, "x", 4, gb);
    expect(gb.board[11].getShip().getTimesHit()).toBe(0);
    gb.receiveAttack(2, 1);
    expect(gb.board[11].getShip().getTimesHit()).toBe(0);
    expect(gb.board[21].getAttacked()).toBe(true);
    expect(gb.board[11].getAttacked()).toBe(false);
});

test('ship has sunk', () => {
    let gb = new gameboard.Gameboard();
    gb.placeShip(1, 1, "x", 4, gb);
    gb.receiveAttack(1, 1);
    gb.receiveAttack(1, 2);
    expect(gb.board[11].getShip().isSunk()).toBe(false);
    gb.receiveAttack(1, 3);
    gb.receiveAttack(1, 4);
    expect(gb.board[11].getShip().getTimesHit()).toBe(4);
    expect(gb.board[11].getShip().getLength()).toBe(4);
    expect(gb.board[11].getShip().isSunk()).toBe(true);
    expect(gb.board[12].getShip().isSunk()).toBe(true);
});

test('ship doesnt get placed when space already occupied', () => {
    let gb = new gameboard.Gameboard();
    gb.placeShip(1, 1, "x", 4, gb);
    gb.placeShip(0, 1, "y", 3, gb);
    expect(gb.board[1].getPlaced()).toBe(false);
    expect(gb.board[11].getPlaced()).toBe(true);
    expect(gb.board[21].getPlaced()).toBe(false);
});

test('ship length 4 max 1', () => {
    try {
        let gb = new gameboard.Gameboard();
        gb.placeShip(0,1,"x",4, gb);
        gb.placeShip(1,1,"y",4, gb);
    } catch (e) {
        thrown = e;
    }
    expect(thrown).toEqual(new Error("Too many ships"));
});

test('ship length 3 max 2', () => {
    try {
        let gb = new gameboard.Gameboard();
        gb.placeShip(0,1,"x",3, gb);
        gb.placeShip(1,1,"x",3, gb);
        gb.placeShip(2,1,"x",3, gb);
    } catch (e) {
        thrown = e;
    }
    expect(thrown).toEqual(new Error("Too many ships"));
});

test('ship length 2 max 3', () => {
    try {
        let gb = new gameboard.Gameboard();
        gb.placeShip(0,1,"x",2, gb);
        gb.placeShip(1,1,"x",2, gb);
        gb.placeShip(2,1,"x",2, gb);
        gb.placeShip(3,1,"x",2, gb);
    } catch (e) {
        thrown = e;
    }
    expect(thrown).toEqual(new Error("Too many ships"));
});

test('ship length 1 max 4', () => {
    try {
        let gb = new gameboard.Gameboard();
        gb.placeShip(0, 1, "x", 1, gb);
        gb.placeShip(1, 1, "x", 1, gb);
        gb.placeShip(2, 1, "x", 1, gb);
       // gb.placeShip(3, 1, "x", 1, gb);
       // gb.placeShip(4, 1, "x", 1, gb);
        let gb2 = new gameboard.Gameboard();
        gb2.placeShip(0, 1, "x", 1, gb2);
        gb2.placeShip(1, 1, "x", 1, gb2);
        gb2.placeShip(2, 1, "x", 1, gb2);
        gb2.placeShip(3, 1, "x", 1, gb2);
        gb2.placeShip(4, 1, "x", 1, gb2);
    } catch (e) {
        thrown = e;
    }
    expect(thrown).toEqual(new Error("Too many ships"));
});

test('player attack works', () => {
    let meGb = new gameboard.Gameboard();
    let enemyGb = new gameboard.Gameboard();
    let mePlayer = new player.Player(0, meGb);
    let enemyPlayer = new player.Player(1, enemyGb);
    mePlayer.attack(0, 1, enemyPlayer.getGameboard());
    expect(enemyGb.getBoard()[1].getAttacked()).toBe(true);
    expect(enemyGb.getBoard()[2].getAttacked()).toBe(false);
});

test('already attacked works', () => {
    try {
        let meGb = new gameboard.Gameboard();
        let enemyGb = new gameboard.Gameboard();
        let mePlayer = new player.Player(0, meGb);
        let enemyPlayer = new player.Player(1, enemyGb);
        mePlayer.attack(0, 1, enemyPlayer.getGameboard());
        expect(enemyGb.getBoard()[1].getAttacked()).toBe(true);
        expect(enemyGb.getBoard()[2].getAttacked()).toBe(false);
        mePlayer.attack(0, 1, enemyPlayer.getGameboard());
    } catch(e) {
        thrown = e;
    }
    expect(thrown).toEqual(new Error("Already attacked"));
});*/