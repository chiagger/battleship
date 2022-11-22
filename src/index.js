const ship = require('./ship');
const gameboard = require('./gameboard.js');
const player = require('./player');

let enemySunk = 0;
let meSunk = 0;
let meGb = new gameboard.Gameboard();
let enemyGb = new gameboard.Gameboard();
let mePlayer = new player.Player(0, meGb);
let enemyPlayer = new player.Player(1, enemyGb);

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

function mouseoverfoury(e) {
    e.target.classList.add("hovered");
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("hovered");
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("hovered");
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("hovered");
}
function mouseoutfoury(e) {
    e.target.classList.remove("hovered");
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("hovered");
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("hovered");
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("hovered");
}

function mouseoverfourx(e) {
    e.target.classList.add("hovered");
    e.target.nextElementSibling.classList.add("hovered");
    e.target.nextElementSibling.nextElementSibling.classList.add("hovered");
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("hovered");
}
function mouseoutfourx(e) {
    e.target.classList.remove("hovered");
    e.target.nextElementSibling.classList.remove("hovered");
    e.target.nextElementSibling.nextElementSibling.classList.remove("hovered");
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("hovered");
}


function placefourship(axis) {
    const cells = document.querySelectorAll("#meGrid .cell");
    var clickfoury = function (i) {
        return function curried_func(e) {
            let xcc;
            let ycc;
            if (i.toString().length === 1) {
                xcc = 0;
                ycc = parseInt(i.toString()[0]);
            } else {
                xcc = parseInt(i.toString()[0]);
                ycc = parseInt(i.toString()[1]);
            }
            meGb.placeShip(xcc, ycc, "y", 4, meGb);
            for (let i = 0; i < meGb.getBoard().length; i++) {
                if (meGb.getBoard()[i].getPlaced() === true) {
                    cells[i].style.backgroundColor = "gray";
                }
                cells[i].removeEventListener("mouseover", mouseoverfoury);
                cells[i].removeEventListener("mouseout", mouseoutfoury);

            }

        }
    }
    var clickfourx = function (i) {
        return function curried_func(e) {
            let xcc;
            let ycc;
            if (i.toString().length === 1) {
                xcc = 0;
                ycc = parseInt(i.toString()[0]);
            } else {
                xcc = parseInt(i.toString()[0]);
                ycc = parseInt(i.toString()[1]);
            }
            meGb.placeShip(xcc, ycc, "x", 4, meGb);
            for (let i = 0; i < meGb.getBoard().length; i++) {
                if (meGb.getBoard()[i].getPlaced() === true) {
                    cells[i].style.backgroundColor = "gray";
                }
                cells[i].removeEventListener("mouseover", mouseoverfourx);
                cells[i].removeEventListener("mouseout", mouseoutfourx);
            }

        }
    }

    //place 4 ship
    for (let i = 0; i < cells.length; i++) {
        if (axis === 0) {
            cells[i].removeEventListener("click", clickfoury(i));
            cells[i].removeEventListener("mouseover", mouseoverfoury);
            cells[i].removeEventListener("mouseout", mouseoutfoury);
            cells[i].addEventListener("mouseover", mouseoverfourx);
            cells[i].addEventListener("mouseout", mouseoutfourx)
            cells[i].addEventListener("click", clickfourx(i), { once: true });

        } else {
            cells[i].removeEventListener("click", clickfourx(i));
            cells[i].removeEventListener("mouseover", mouseoverfourx);
            cells[i].removeEventListener("mouseout", mouseoutfourx);
            cells[i].addEventListener("mouseover", mouseoverfoury);
            cells[i].addEventListener("mouseout", mouseoutfoury);
            cells[i].addEventListener("click", clickfoury(i), { once: true })

        }
    }

}

function placeYourShips() {
    let axis = 1;
    const urships = document.querySelector(".urships");
    const axisbtn = document.createElement("button");
    axisbtn.textContent = "Axis: x";
    urships.appendChild(axisbtn);
    /*axisbtn.addEventListener("click", () => {
        if (axisbtn.textContent === "Axis: x") {
            axisbtn.textContent = "Axis: y";
            axis = 1;
        } else {
            axisbtn.textContent === "Axis: x"
            axis = 0;
        }
        placefourship(axis);
    })*/
    placefourship(axis);

}

function populateGrids() {
    try {
        const meGrid = document.getElementById('meGrid');
        const enemyGrid = document.getElementById('enemyGrid');

        for (let i = 0; i < meGb.getBoard().length; i++) {
            const DOMCell = document.createElement("div");
            DOMCell.classList.add("cell");
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
                                //only does 1
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

            })

            meGrid.appendChild(DOMCell);

        }
        placeYourShips();
        placeEnemyShips();
        for (let i = 0; i < enemyGb.getBoard().length; i++) {
            const DOMCell = document.createElement("div");
            DOMCell.classList.add("cell");
            // if (enemyGb.getBoard()[i].getPlaced() === true) {
            //    DOMCell.style.backgroundColor = "gray";
            //}
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
            enemyGrid.appendChild(DOMCell);
        }
    } catch (e) {
        alert(e.message);
    }
}


populateGrids();





module.exports = { meGb, enemyGb, mePlayer, enemyPlayer }
