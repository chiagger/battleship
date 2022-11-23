class Player {
    constructor(id, gameboard) {
        this.id = id;
        this.gameboard = gameboard;
    }
    getId() {
        return this.id;
    }
    getGameboard() {
        return this.gameboard;
    }
    attack(xcc, ycc, enemyGb) {
        enemyGb.receiveAttack(xcc, ycc);
    }
}

module.exports = { Player }