const ship = require('./ship');
const gameboard = require('./gameboard.js');
const player = require('./player');

let meGb = new gameboard.Gameboard();
let enemyGb = new gameboard.Gameboard();
let mePlayer = new player.Player(0, meGb);
let enemyPlayer = new player.Player(1, enemyGb);
let nr = 0;
const axisbtn = document.getElementById("axis");
axisbtn.textContent = "Axis: x";
let axis = 0;
let hitE = 0;
let hitMe = 0;

function changeAxis() {
    if (axis === 0) {
        axisbtn.textContent = "Axis: y";
        makeVertical();
        const fourship = document.querySelector(".ship1");
        fourship.addEventListener("dragstart", drag);
        const threeship = document.querySelector(".ship2");
        threeship.addEventListener("dragstart", drag);
        const twoship = document.querySelector(".ship3");
        twoship.addEventListener("dragstart", drag);
        const oneship = document.querySelector(".ship4");
        oneship.addEventListener("dragstart", drag);
        axis = 1;

    } else {
        axisbtn.textContent = "Axis: x";
        makeHorizontal();
        const fourship = document.querySelector(".ship1");
        fourship.addEventListener("dragstart", drag);
        const threeship = document.querySelector(".ship2");
        threeship.addEventListener("dragstart", drag);
        const twoship = document.querySelector(".ship3");
        twoship.addEventListener("dragstart", drag);
        const oneship = document.querySelector(".ship4");
        oneship.addEventListener("dragstart", drag);
        axis = 0;
    }
}

function makeHorizontal() {
    const instruction = document.querySelector(".instruction");
    const oldul = document.querySelector(".instruction ul");
    instruction.removeChild(oldul);
    const ul = document.createElement("ul");
    ul.classList.add("horizontal");
    const li1 = document.createElement("li");
    li1.classList.add("horizontal");
    const sub1 = document.createElement("div");
    const sub2 = document.createElement("div");
    const sub3 = document.createElement("div");
    const sub4 = document.createElement("div");
    sub1.textContent = "1x";
    sub2.textContent = "2x";
    sub3.textContent = "3x";
    sub4.textContent = "4x";

    const ship1 = document.createElement("div");
    ship1.classList.add("ship1");
    ship1.setAttribute("draggable", "true");
    const cell1 = document.createElement("div");
    const cell2 = document.createElement("div");
    const cell3 = document.createElement("div");
    const cell4 = document.createElement("div");
    cell1.classList.add("cell");
    cell2.classList.add("cell");
    cell3.classList.add("cell");
    cell4.classList.add("cell");
    ship1.appendChild(cell1);
    ship1.appendChild(cell2);
    ship1.appendChild(cell3);
    ship1.appendChild(cell4);
    li1.appendChild(sub1);
    li1.appendChild(ship1);


    const li2 = document.createElement("li");
    li2.classList.add("horizontal");
    li2.appendChild(sub2);
    const ship2 = document.createElement("div");
    ship2.classList.add("ship2");
    ship2.setAttribute("draggable", "true");
    const cell5 = document.createElement("div");
    const cell6 = document.createElement("div");
    const cell7 = document.createElement("div");
    cell5.classList.add("cell");
    cell6.classList.add("cell");
    cell7.classList.add("cell");
    ship2.appendChild(cell5);
    ship2.appendChild(cell6);
    ship2.appendChild(cell7);
    li2.appendChild(ship2);

    const li3 = document.createElement("li");
    li3.classList.add("horizontal");
    li3.appendChild(sub3);
    const ship3 = document.createElement("div");
    ship3.classList.add("ship3");
    ship3.setAttribute("draggable", "true");
    const cell8 = document.createElement("div");
    const cell9 = document.createElement("div");
    cell8.classList.add("cell");
    cell9.classList.add("cell");
    ship3.appendChild(cell8);
    ship3.appendChild(cell9);
    li3.appendChild(ship3);

    const li4 = document.createElement("li");
    li4.classList.add("horizontal");
    li4.appendChild(sub4);
    const ship4 = document.createElement("div");
    ship4.classList.add("ship4");
    ship4.setAttribute("draggable", "true");
    const cell10 = document.createElement("div");
    cell10.classList.add("cell");
    ship4.appendChild(cell10);
    li4.appendChild(ship4);


    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4)
    instruction.appendChild(ul);
}

function makeVertical() {
    const instruction = document.querySelector(".instruction");
    const oldul = document.querySelector(".instruction ul");
    instruction.removeChild(oldul);
    const ul = document.createElement("ul");
    ul.classList.add("vertical");
    const li1 = document.createElement("li");
    li1.classList.add("vertical");
    const sub1 = document.createElement("div");
    const sub2 = document.createElement("div");
    const sub3 = document.createElement("div");
    const sub4 = document.createElement("div");
    sub1.textContent = "1x";
    sub2.textContent = "2x";
    sub3.textContent = "3x";
    sub4.textContent = "4x";

    const ship1 = document.createElement("div");
    ship1.classList.add("ship1");
    ship1.setAttribute("draggable", "true");
    const cell1 = document.createElement("div");
    const cell2 = document.createElement("div");
    const cell3 = document.createElement("div");
    const cell4 = document.createElement("div");
    cell1.classList.add("cell");
    cell2.classList.add("cell");
    cell3.classList.add("cell");
    cell4.classList.add("cell");
    ship1.appendChild(cell1);
    ship1.appendChild(cell2);
    ship1.appendChild(cell3);
    ship1.appendChild(cell4);
    li1.appendChild(sub1);
    li1.appendChild(ship1);


    const li2 = document.createElement("li");
    li2.classList.add("vertical");
    li2.appendChild(sub2);
    const ship2 = document.createElement("div");
    ship2.classList.add("ship2");
    ship2.setAttribute("draggable", "true");
    const cell5 = document.createElement("div");
    const cell6 = document.createElement("div");
    const cell7 = document.createElement("div");
    cell5.classList.add("cell");
    cell6.classList.add("cell");
    cell7.classList.add("cell");
    ship2.appendChild(cell5);
    ship2.appendChild(cell6);
    ship2.appendChild(cell7);
    li2.appendChild(ship2);

    const li3 = document.createElement("li");
    li3.classList.add("vertical");
    li3.appendChild(sub3);
    const ship3 = document.createElement("div");
    ship3.classList.add("ship3");
    ship3.setAttribute("draggable", "true");
    const cell8 = document.createElement("div");
    const cell9 = document.createElement("div");
    cell8.classList.add("cell");
    cell9.classList.add("cell");
    ship3.appendChild(cell8);
    ship3.appendChild(cell9);
    li3.appendChild(ship3);

    const li4 = document.createElement("li");
    li4.classList.add("vertical");
    li4.appendChild(sub4);
    const ship4 = document.createElement("div");
    ship4.classList.add("ship4");
    ship4.setAttribute("draggable", "true");
    const cell10 = document.createElement("div");
    cell10.classList.add("cell");
    ship4.appendChild(cell10);
    li4.appendChild(ship4);


    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4)
    instruction.appendChild(ul);
}


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
    axisbtn.addEventListener("click", changeAxis);
    for (let i = 0; i < meGb.getBoard().length; i++) {
        cells[i].addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        cells[i].addEventListener("drop", (e) => {
            e.preventDefault();
            dropShip(e);
            nr++
            if (nr === 10) {
                const instruction = document.querySelector(".instruction");
                while (instruction.hasChildNodes()) {
                    instruction.removeChild(instruction.firstChild);
                }
                const play = document.createElement("div");
                play.classList.add("big");
                play.textContent = "Attack!";
                instruction.appendChild(play);
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
                if (axis === 0) {
                    meGb.placeShip(xcc, ycc, "x", parseInt(length), meGb);
                } else {
                    meGb.placeShip(xcc, ycc, "y", parseInt(length), meGb);
                }
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
    hitMe = 0;
    const cells = document.querySelectorAll("#meGrid .cell");

    for (let i = 0; i < meGb.getBoard().length; i++) {
        try {
            if (meGb.getBoard()[i].getAttacked() === true) {
                cells[i].style.backgroundColor = "aquamarine";
            }
            if (meGb.getBoard()[i].getHit() === true) {
                hitMe++;
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
    if (hitMe === 20) {
        const instruction = document.querySelector(".instruction");
        while (instruction.hasChildNodes()) {
            instruction.removeChild(instruction.firstChild);
        }
        const cont = document.createElement("div");
        cont.classList.add("cont");
        const play = document.createElement("div");
        play.classList.add("big");
        play.textContent = "You Lose! :(";
        const again = document.createElement("div");
        again.classList.add("medium");
        again.textContent = "Refresh to play again.";
        cont.appendChild(play);
        cont.appendChild(again);
        instruction.appendChild(cont);

    }
}

function populateEnemyGrid(enemyGrid) {
    hitE = 0;
    const cells = document.querySelectorAll("#enemyGrid .cell");
    for (let i = 0; i < enemyGb.getBoard().length; i++) {
        // if hit, if sunk
        try {

            if (enemyGb.getBoard()[i].getAttacked() === true) {
                cells[i].style.backgroundColor = "aquamarine";
            }
            if (enemyGb.getBoard()[i].getHit() === true) {
                hitE++;
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
    if (hitE === 20) {
        const instruction = document.querySelector(".instruction");
        while (instruction.hasChildNodes()) {
            instruction.removeChild(instruction.firstChild);
        }
        const cont = document.createElement("div");
        cont.classList.add("cont");
        const play = document.createElement("div");
        play.classList.add("big");
        play.textContent = "You Win! :)";
        const again = document.createElement("div");
        again.classList.add("medium");
        again.textContent = "Refresh to play again."
        cont.appendChild(play);
        cont.appendChild(again);
        instruction.appendChild(cont);
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

//need to implement WIN message
//finish up