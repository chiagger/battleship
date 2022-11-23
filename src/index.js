const ship = require('./ship');
const gameboard = require('./gameboard.js');
const player = require('./player');

let enemySunk = 0;
let meSunk = 0;
let meGb = new gameboard.Gameboard();
let enemyGb = new gameboard.Gameboard();
let mePlayer = new player.Player(0, meGb);
let enemyPlayer = new player.Player(1, enemyGb);

//useful functions
function getAxisName(value) {
    if (value === 0) {
        return "x";
    } else if (value === 1) {
        return "y"
    } else {
        throw new Error("Error in axis calc");
    }
}

function getNrOfShip(length) {
    if (length === 4) {
        return 1;
    } else if (length === 3) {
        return 2;
    } else if (length === 2) {
        return 3;
    } else if (length === 1) {
        return 4;
    }
}


//enemy ship placement
function calcPlace(length) {
    let position;
    let nr = getNrOfShip(length);
    for (let i = 0; i < nr; i++) {
        let axis = Math.round(Math.random());
        let xcc = Math.floor(Math.random() * 9) + 1;
        let ycc = Math.floor(Math.random() * 9) + 1;
        if (axis === 0) {
            let placed = false;
            for (let k = 0; k < length; k++) {
                if (ycc + length <= 9) {
                    position = parseInt((xcc).toString() + (ycc + k).toString());
                    if (xcc === 0) {
                        position = parseInt((ycc + k).toString());
                    }
                    if (enemyGb.getBoard()[position].getPlaced() === true) {
                        placed = true;
                    }
                }
            }
            while (placed === true || ycc > 6) {
                placed = false;
                xcc = Math.floor(Math.random() * 9) + 1;
                ycc = Math.floor(Math.random() * 9) + 1;
                for (let k = 0; k < length; k++) {
                    if (ycc + length <= 9) {
                        position = parseInt((xcc).toString() + (ycc + k).toString());
                        if (xcc === 0) {
                            position = parseInt((ycc + k).toString());
                        }
                        if (enemyGb.getBoard()[position].getPlaced() === true) {
                            placed = true;
                        }
                    }
                }
            }
        } else {
            let placed = false;
            for (let k = 0; k < length; k++) {
                if (xcc + length <= 9) {
                    position = parseInt((xcc + k).toString() + (ycc).toString());
                    if (xcc === 0 && k === 0) {
                        position = parseInt((ycc).toString());
                    }
                    if (enemyGb.getBoard()[position].getPlaced() === true) {
                        placed = true;
                    }
                }
            }
            while (placed === true || xcc > 6) {
                placed = false;
                xcc = Math.floor(Math.random() * 9) + 1;
                ycc = Math.floor(Math.random() * 9) + 1;
                for (let k = 0; k < length; k++) {
                    if (xcc + length <= 9) {
                        position = parseInt((xcc + k).toString() + (ycc).toString());
                        if (xcc === 0 && k === 0) {
                            position = parseInt((ycc).toString());
                        }
                        if (enemyGb.getBoard()[position].getPlaced() === true) {
                            placed = true;
                        }
                    }
                }
            }
        }
        enemyGb.placeShip(xcc, ycc, getAxisName(axis), length, enemyGb);
    }

}

function placeEnemyShips() {
    calcPlace(4);
    calcPlace(3);
    calcPlace(2);
    calcPlace(1);
}


//player ship placement
function placeYourShips() {
    const fourship = document.querySelector(".ship1");
    fourship.addEventListener("dragstart", drag);
    const threeship = document.querySelector(".ship2");
    threeship.addEventListener("dragstart", drag);
    const twoship = document.querySelector(".ship3");
    twoship.addEventListener("dragstart", drag);
    const oneship = document.querySelector(".ship4");
    oneship.addEventListener("dragstart", drag);
}

function dropShip(e) {
    const cells = document.querySelectorAll("#meGrid .cell");
    const length = e.dataTransfer.getData("length");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === e.target) {
            let xcc;
            let ycc;
            if (i.toString().length === 1) {
                xcc = 0;
                ycc = parseInt(i.toString()[0]);
            } else {
                xcc = parseInt(i.toString()[0]);
                ycc = parseInt(i.toString()[1]);
            }
            meGb.placeShip(xcc, ycc, "x", parseInt(length), meGb);
        }
    }
    for (let i = 0; i < meGb.getBoard().length; i++) {
        if (meGb.getBoard()[i].getPlaced() === true) {
            cells[i].style.backgroundColor = "gray";
        }
    }
}

function drag(e) {
    var childNodes = e.target.childNodes,
        children = [],
        i = childNodes.length;

    while (i--) {
        if (childNodes[i].nodeType == 1) {
            children.unshift(childNodes[i]);
        }
    }
    e.dataTransfer.setData("length", children.length);
}

function populateMeGrid(meGrid, turn) {
    while (meGrid.hasChildNodes()) {
        meGrid.removeChild(meGrid.firstChild);
    }
    for (let i = 0; i < meGb.getBoard().length; i++) {
        const DOMCell = document.createElement("div");
        DOMCell.classList.add("cell");
        if (meGb.getBoard()[i].getPlaced() === true) {
            DOMCell.style.backgroundColor = "gray";
        }
        DOMCell.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        DOMCell.addEventListener("drop", (e) => {
            e.preventDefault();
            dropShip(e);
        });

        //this happens with an attack!!
        if (turn === 1) {
            DOMCell.addEventListener("click", () => {
                let position = i.toString();
                if (position.length === 1) {
                    position = "0" + position;
                }
                let xcc = position[0];
                let ycc = position[1];
                enemyPlayer.attack(xcc, ycc, mePlayer.getGameboard());
                if (meGb.getBoard()[i].getAttacked() === true) {
                    DOMCell.style.backgroundColor = "aquamarine";
                }
                if (meGb.getBoard()[i].getHit() === true) {
                    DOMCell.style.backgroundColor = "orange";
                }
                try {
                    if (meGb.getBoard()[i].getShip().isSunk() === true) {
                        for (let k = 0; k < meGb.getBoard().length; k++) {
                            if (meGb.getBoard()[k].getShip() === meGb.getBoard()[i].getShip()) {
                                const cellArray = document.querySelectorAll("#meGrid .cell");
                                cellArray[k].style.backgroundColor = "red";
                            }
                        }
                        meSunk += 1;
                        if (meSunk === 10) {
                            alert("You LOSE!!");
                        }
                    }

                } catch (e) { }
                turn = 0;
            })
        }
        meGrid.appendChild(DOMCell);
    }
}

function populateEnemyGrid(enemyGrid, turn) {
    while (enemyGrid.hasChildNodes()) {
        enemyGrid.removeChild(enemyGrid.firstChild);
    }
    for (let i = 0; i < enemyGb.getBoard().length; i++) {
        const DOMCell = document.createElement("div");
        DOMCell.classList.add("cell");

        ///should only happen when its ur turn...
        if (turn === 0) {
            DOMCell.addEventListener("click", () => {
                let position = i.toString();
                if (position.length === 1) {
                    position = "0" + position;
                }
                let xcc = position[0];
                let ycc = position[1];
                mePlayer.attack(xcc, ycc, enemyPlayer.getGameboard());
                if (enemyGb.getBoard()[i].getAttacked() === true) {
                    DOMCell.style.backgroundColor = "aquamarine";
                }
                if (enemyGb.getBoard()[i].getHit() === true) {
                    DOMCell.style.backgroundColor = "orange";
                }
                try {
                    if (enemyGb.getBoard()[i].getShip().isSunk() === true) {
                        for (let k = 0; k < enemyGb.getBoard().length; k++) {
                            if (enemyGb.getBoard()[k].getShip() === enemyGb.getBoard()[i].getShip()) {
                                const cellArray = document.querySelectorAll("#enemyGrid .cell");
                                cellArray[k].style.backgroundColor = "red";
                            }
                        }
                        enemySunk += 1;
                        if (enemySunk === 10) {
                            alert("You WIN!!");
                        }
                    }
                } catch (e) { } 
            })
            turn = 1;
        }
        enemyGrid.appendChild(DOMCell);
    }
    // attackEnemy();

}

//general gameboard
function populateGrids() {
    try {
        let turn = 0;
        const meGrid = document.getElementById('meGrid');
        const enemyGrid = document.getElementById('enemyGrid');

        placeYourShips();
        populateMeGrid(meGrid, turn);

        placeEnemyShips();
        populateEnemyGrid(enemyGrid, turn);

    } catch (e) {
        alert(e.message);
    }
}

populateGrids();





