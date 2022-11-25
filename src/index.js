const ship = require('./ship');
const gameboard = require('./gameboard.js');
const player = require('./player');

let meGb = new gameboard.Gameboard();
let enemyGb = new gameboard.Gameboard();
let mePlayer = new player.Player(0, meGb);
let enemyPlayer = new player.Player(1, enemyGb);
let nr = 0;


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
    const cells = document.querySelectorAll("#meGrid .cell");
    for (let i = 0; i < meGb.getBoard().length; i++) {
        cells[i].addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        cells[i].addEventListener("drop", (e) => {
            e.preventDefault();
            dropShip(e);
            nr++
            if (nr === 10) {
                getAttack();
            }
        });

    }
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

            try {
                meGb.placeShip(xcc, ycc, "x", parseInt(length), meGb);
            } catch (e) {
                nr--;
                alert(e.message)
            }


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


function populateMeGrid(meGrid) {
    const cells = document.querySelectorAll("#meGrid .cell");

    for (let i = 0; i < meGb.getBoard().length; i++) {
        try {
            if (meGb.getBoard()[i].getPlaced() === true) {
                cells[i].style.backgroundColor = "gray";
            }
            if (meGb.getBoard()[i].getAttacked() === true) {
                cells[i].style.backgroundColor = "aquamarine";
            }
            if (meGb.getBoard()[i].getHit() === true) {
                cells[i].style.backgroundColor = "orange";
            }
            if (meGb.getBoard()[i].getShip().isSunk() === true) {
                for (let k = 0; k < meGb.getBoard().length; k++) {
                    if (meGb.getBoard()[k].getShip() === meGb.getBoard()[i].getShip()) {
                        const cellArray = document.querySelectorAll("#meGrid .cell");
                        cellArray[k].style.backgroundColor = "red";
                    }
                }
            }
        } catch (e) { }

    }
}

function populateEnemyGrid(enemyGrid) {
    const cells = document.querySelectorAll("#enemyGrid .cell");
    for (let i = 0; i < enemyGb.getBoard().length; i++) {
        // if hit, if sunk
        try {
            if(enemyGb.getBoard()[i].getPlaced() === true) {
                cells[i].style.backgroundColor = "gray";
            }
            if (enemyGb.getBoard()[i].getAttacked() === true) {
                cells[i].style.backgroundColor = "aquamarine";
            }
            if (enemyGb.getBoard()[i].getHit() === true) {
                cells[i].style.backgroundColor = "orange";
            }

            if (enemyGb.getBoard()[i].getShip().isSunk() === true) {
                for (let k = 0; k < enemyGb.getBoard().length; k++) {
                    if (enemyGb.getBoard()[k].getShip() === enemyGb.getBoard()[i].getShip()) {
                        const cellArray = document.querySelectorAll("#enemyGrid .cell");
                        cellArray[k].style.backgroundColor = "red";
                    }
                }
            }
            

            
        } catch (e) { }
    }
    
}

function getOtherPlayer(currentPlayer) {
    if (currentPlayer === mePlayer)
        return enemyPlayer;
    else return mePlayer;
}


let turn = 0;
let latestMoveBy = enemyPlayer;
function playerMove(currentPlayer, xcc, ycc) {
    try {
        if (latestMoveBy === currentPlayer)
            return;
        turn++;
        //transform cell DOM
        currentPlayer.attack(xcc, ycc, getOtherPlayer(currentPlayer).getGameboard());
        populateMeGrid(meGrid);
        populateEnemyGrid(enemyGrid);
        latestMoveBy = currentPlayer;
    } catch (e) {
        turn--;
    }
}





//general gameboard
function populateGrids() {
    try {
        const meGrid = document.getElementById('meGrid');
        const enemyGrid = document.getElementById('enemyGrid');
        placeEnemyShips();

        for (let i = 0; i < enemyGb.getBoard().length; i++) {
            const DOMCell = document.createElement("div");
            DOMCell.classList.add("cell");
            /*  if (enemyGb.getBoard()[i].getPlaced() === true) {
                  DOMCell.style.backgroundColor = "gray";
              }*/
            enemyGrid.appendChild(DOMCell);
        }


        for (let i = 0; i < meGb.getBoard().length; i++) {
            const DOMCell = document.createElement("div");
            DOMCell.classList.add("cell");
            if (meGb.getBoard()[i].getPlaced() === true) {
                DOMCell.style.backgroundColor = "gray";
            }
            meGrid.appendChild(DOMCell);
        }


        placeYourShips();


    } catch (e) {
        alert(e.message);
    }
}

let posArr = [];
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function getAttack() {
    const cellsEnemy = document.querySelectorAll("#enemyGrid .cell");
    for (let i = 0; i < cellsEnemy.length; i++) {
        cellsEnemy[i].addEventListener("click", () => {
            let position = i.toString();
            if (position.length === 1) {
                position = "0" + position;
            }
            let xcc = position[0];
            let ycc = position[1];
            let player;
            player = mePlayer
            playerMove(player, xcc, ycc);

            let xcce = randomIntFromInterval(1, 10) - 1;
            let ycce = randomIntFromInterval(1, 10) - 1;
            let positione = parseInt(xcce.toString() + ycce.toString());
            if (xcce === 0) {
                positione = parseInt(ycce.toString());

            }
            // posArr.push(positione);
            let ok = true;
            for (let k = 0; k < posArr.length; k++) {
                if (posArr[k] === positione) {
                    ok = false;
                }
            }
            while (ok === false) {
                ok = true;
                xcce = randomIntFromInterval(1, 10) - 1;
                ycce = randomIntFromInterval(1, 10) - 1;
                positione = parseInt(xcce.toString() + ycce.toString());
                if (xcce === 0) {
                    positione = parseInt(ycce.toString());

                }
                for (let k = 0; k < posArr.length; k++) {
                    if (posArr[k] === positione) {
                        ok = false;
                    }
                }
            }
            posArr.push(positione);
            player = enemyPlayer
            playerMove(player, xcce, ycce);
        })
    }
}


populateGrids();

//need to implement y axis placement with axis: button
//need to implement WIN message
//finish up