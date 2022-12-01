/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/gameboard.js":
/*!***************************!*\
  !*** ./dist/gameboard.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ship = __webpack_require__(/*! ./ship.js */ \"./dist/ship.js\");\n\nclass Cell {\n    constructor() {\n        this.placed = false;\n        this.hit = false;\n        this.attacked = false;\n        this.ship = undefined;\n    }\n    getShip() {\n        return this.ship;\n    }\n    setShip(ship) {\n        this.ship = ship;\n    }\n    getAttacked() {\n        return this.attacked;\n    }\n    setAttacked(value) {\n        this.attacked = value;\n    }\n    getPlaced() {\n        return this.placed;\n    }\n    getHit() {\n        return this.hit;\n    }\n    setPlaced(value) {\n        this.placed = value;\n    }\n    setHit(value) {\n        this.hit = value;\n    }\n}\n\n\n\nclass Gameboard {\n    constructor() {\n        this.board = [100];\n        for (let i = 0; i < 100; i++) {\n            this.board[i] = new Cell();\n        }\n        this.shipArray = [];\n        this.shipArray4 = Array.apply(null, Array(1)).map(function () { });\n        this.shipArray3 = Array.apply(null, Array(2)).map(function () { });\n        this.shipArray2 = Array.apply(null, Array(3)).map(function () { });\n        this.shipArray1 = Array.apply(null, Array(4)).map(function () { });\n    }\n    rmFromShipArray() {\n        this.shipArray.pop();\n    }\n    rmFromShipArray1(ship) {\n        let index = this.shipArray1.indexOf(ship);\n\n        if (index !== -1) {\n            this.shipArray1[index] = undefined;\n        }\n    }\n    rmFromShipArray2(ship) {\n        let index = this.shipArray2.indexOf(ship);\n\n        if (index !== -1) {\n            this.shipArray2[index] = undefined;\n        }\n    }\n    rmFromShipArray3(ship) {\n        let index = this.shipArray3.indexOf(ship);\n\n        if (index !== -1) {\n            this.shipArray3[index] = undefined;\n        }\n    }\n    rmFromShipArray4(ship) {\n        let index = this.shipArray4.indexOf(ship);\n\n        if (index !== -1) {\n            this.shipArray4[index] = undefined;\n        }\n    }\n    getShipArray() {\n        return this.shipArray;\n    }\n    getShipArray1() {\n        return this.shipArray1;\n    }\n    getShipArray2() {\n        return this.shipArray2;\n    }\n    getShipArray3() {\n        return this.shipArray3;\n    }\n    getShipArray4() {\n        return this.shipArray4;\n    }\n    setShipArray(ship) {\n        this.shipArray.push(ship);\n    }\n    setShipArray1(ship, i) {\n        this.shipArray1[i] = ship;\n    }\n    setShipArray2(ship, i) {\n        this.shipArray2[i] = ship;\n    }\n    setShipArray3(ship, i) {\n        this.shipArray3[i] = ship;\n    }\n    setShipArray4(ship, i) {\n        this.shipArray4[i] = ship;\n    }\n    getBoard() {\n        return this.board;\n    }\n\n    placeShip(xcc, ycc, axis, length, gameboard) {\n        let newShip = ship.createShip(length, gameboard);\n        let position;\n        if (axis === \"x\") {\n            if ((10 - ycc) < length) {\n                throw new Error(\"Ship can't be placed here\");\n            } else {\n                let canPlace = true;\n                for (let k = 0; k < length; k++) {\n                    position = parseInt((xcc).toString() + (ycc + k).toString());\n                    if (xcc === 0) {\n                        position = parseInt((ycc + k).toString());\n                    }\n                    if (this.board[position].getPlaced() === true) {\n                        canPlace = false;\n                    }\n                } if (canPlace === false) {\n                    this.rmFromShipArray();\n                    if (length === 1) {\n                        this.rmFromShipArray1(newShip);\n                    } else if (length === 2) {\n                        this.rmFromShipArray2(newShip);\n                    } else if (length === 3) {\n                        this.rmFromShipArray3(newShip);\n                    } else if (length === 4) {\n                        this.rmFromShipArray4(newShip);\n                    }\n                    throw new Error(\"Can't be placed\")\n                } else {\n                    for (let i = 0; i < length; i++) {\n                        position = parseInt((xcc).toString() + (ycc + i).toString());\n                        if (this.board[position].getPlaced() === false) {\n                            this.board[position].setPlaced(true);\n                            newShip.setCc(position);\n                            this.board[position].setShip(newShip);\n                        }\n                    }\n                }\n            }\n        } else if (axis === \"y\") {\n            if ((10 - xcc) < length) {\n                throw new Error(\"Ship can't be placed here\");\n            }\n            else {\n                let canPlace = true;\n                for (let k = 0; k < length; k++) {\n                    position = parseInt((xcc + k).toString() + (ycc).toString());\n                    if (xcc === 0 && k === 0) {\n                        position = parseInt((ycc).toString());\n                    }\n                    if (this.board[position].getPlaced() === true) {\n                        canPlace = false;\n                    }\n                }\n                if (canPlace === false) {\n                    this.rmFromShipArray();\n                    if (length === 1) {\n                        this.rmFromShipArray1(newShip);\n                    } else if (length === 2) {\n                        this.rmFromShipArray2(newShip);\n                    } else if (length === 3) {\n                        this.rmFromShipArray3(newShip);\n                    } else if (length === 4) {\n                        this.rmFromShipArray4(newShip);\n                    }\n                    throw new Error(\"Can't be placed\")\n\n                } else {\n                    for (let i = 0; i < length; i++) {\n                        position = parseInt((xcc + i).toString() + (ycc).toString());\n                        if (this.board[position].getPlaced() === false) {\n                            this.board[position].setPlaced(true);\n                            newShip.setCc(position);\n                            this.board[position].setShip(newShip);\n                        }\n                    }\n                }\n            }\n        } else {\n            throw new Error(\"Error in axis assignment\");\n        }\n    }\n\n    receiveAttack(xcc, ycc) {\n        let position = parseInt((xcc).toString() + (ycc).toString());\n        if (this.board[position].getAttacked() === true) {\n            throw new Error(\"Already attacked\");\n        }\n        this.board[position].setAttacked(true);\n        if (this.board[position].getPlaced() === true) {\n            this.board[position].getShip().increaseHit();\n\n            this.board[position].setHit(true);\n\n        }\n    }\n}\n\nmodule.exports = { Gameboard, Cell };\n\n//# sourceURL=webpack://battleship/./dist/gameboard.js?");

/***/ }),

/***/ "./dist/player.js":
/*!************************!*\
  !*** ./dist/player.js ***!
  \************************/
/***/ ((module) => {

eval("class Player {\n    constructor(id, gameboard) {\n        this.id = id;\n        this.gameboard = gameboard;\n    }\n  \n    getId() {\n        return this.id;\n    }\n    getGameboard() {\n        return this.gameboard;\n    }\n    attack(xcc, ycc, enemyGb) {\n        enemyGb.receiveAttack(xcc, ycc);\n    }\n}\n\nmodule.exports = { Player }\n\n//# sourceURL=webpack://battleship/./dist/player.js?");

/***/ }),

/***/ "./dist/ship.js":
/*!**********************!*\
  !*** ./dist/ship.js ***!
  \**********************/
/***/ ((module) => {

eval("class Ship {\n    constructor(length, gameboard) {\n        this.length = length;\n        this.timesHit = 0;\n        this.sunk = false;\n        this.cc = [];\n        this.gameboard = gameboard;\n    }\n    getGameboard() {\n        return this.gameboard;\n    }\n    getCc() {\n        return this.cc;\n    }\n    setCc(value) {\n        this.cc.push(value);\n    }\n    getLength() {\n        return this.length;\n    }\n    getTimesHit() {\n        return this.timesHit;\n    }\n    getSunk() {\n        return this.sunk;\n    }\n    setSunk(value) {\n        this.sunk = value;\n    }\n    increaseHit() {\n        this.timesHit += 1;\n    }\n    isSunk() {\n        let result = false;\n        if (this.length === this.timesHit) {\n            this.sunk = true;\n            result = true;\n        }\n        return result;\n    }\n}\n\n//handles the logic for only having a certain amount of x length ships\nfunction createShip(length, gameboard) {\n    let newShip = new Ship(length, gameboard);\n    if (newShip.getGameboard() === undefined) {\n        throw new Error(\"undefined gb\");\n    }\n    \n    let flag = false;\n    if (length === 4) {\n        for (let i = 0; i < newShip.getGameboard().getShipArray4().length; i++) {\n            if (newShip.getGameboard().getShipArray4()[i] === undefined) {\n                flag = true;\n                newShip.getGameboard().setShipArray(newShip);\n                newShip.getGameboard().setShipArray4(newShip, i);\n                break;\n            }\n        }\n    }\n    if (length === 3) {\n        for (let i = 0; i < newShip.getGameboard().getShipArray3().length; i++) {\n            if (newShip.getGameboard().getShipArray3()[i] === undefined) {\n                flag = true;\n                newShip.getGameboard().setShipArray(newShip);\n                newShip.getGameboard().setShipArray3(newShip, i);\n                break;\n            }\n        }\n    }\n    if (length === 2) {\n        for (let i = 0; i < newShip.getGameboard().getShipArray2().length; i++) {\n            if (newShip.getGameboard().getShipArray2()[i] === undefined) {\n                flag = true;\n                newShip.getGameboard().setShipArray(newShip);\n                newShip.getGameboard().setShipArray2(newShip, i);\n                break;\n            }\n        }\n    }\n    if (length === 1) {\n        for (let i = 0; i < newShip.getGameboard().getShipArray1().length; i++) {\n            if (newShip.getGameboard().getShipArray1()[i] === undefined) {\n                flag = true;\n                newShip.getGameboard().setShipArray(newShip);\n                newShip.getGameboard().setShipArray1(newShip, i);\n                break;\n            }\n        }\n    }\n    if (flag === true) {\n        return newShip;\n    } else {\n        throw new Error(\"Too many ships\");\n    }\n}\n\n\n\nmodule.exports = { createShip, Ship }\n\n//# sourceURL=webpack://battleship/./dist/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const ship = __webpack_require__(/*! ../dist/ship */ \"./dist/ship.js\");\nconst gameboard = __webpack_require__(/*! ../dist/gameboard.js */ \"./dist/gameboard.js\");\nconst player = __webpack_require__(/*! ../dist/player */ \"./dist/player.js\");\n\nlet meGb = new gameboard.Gameboard();\nlet enemyGb = new gameboard.Gameboard();\nlet mePlayer = new player.Player(0, meGb);\nlet enemyPlayer = new player.Player(1, enemyGb);\nlet nr = 0;\nconst axisbtn = document.getElementById(\"axis\");\naxisbtn.textContent = \"Axis: x\";\nlet axis = 0;\nlet hitE = 0;\nlet hitMe = 0;\n\nfunction changeAxis() {\n    if (axis === 0) {\n        axisbtn.textContent = \"Axis: y\";\n        makeVertical();\n        const fourship = document.querySelector(\".ship1\");\n        fourship.addEventListener(\"dragstart\", drag);\n        const threeship = document.querySelector(\".ship2\");\n        threeship.addEventListener(\"dragstart\", drag);\n        const twoship = document.querySelector(\".ship3\");\n        twoship.addEventListener(\"dragstart\", drag);\n        const oneship = document.querySelector(\".ship4\");\n        oneship.addEventListener(\"dragstart\", drag);\n        axis = 1;\n\n    } else {\n        axisbtn.textContent = \"Axis: x\";\n        makeHorizontal();\n        const fourship = document.querySelector(\".ship1\");\n        fourship.addEventListener(\"dragstart\", drag);\n        const threeship = document.querySelector(\".ship2\");\n        threeship.addEventListener(\"dragstart\", drag);\n        const twoship = document.querySelector(\".ship3\");\n        twoship.addEventListener(\"dragstart\", drag);\n        const oneship = document.querySelector(\".ship4\");\n        oneship.addEventListener(\"dragstart\", drag);\n        axis = 0;\n    }\n}\n\nfunction makeHorizontal() {\n    const instruction = document.querySelector(\".instruction\");\n    const oldul = document.querySelector(\".instruction ul\");\n    instruction.removeChild(oldul);\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"horizontal\");\n    const li1 = document.createElement(\"li\");\n    li1.classList.add(\"horizontal\");\n    const sub1 = document.createElement(\"div\");\n    const sub2 = document.createElement(\"div\");\n    const sub3 = document.createElement(\"div\");\n    const sub4 = document.createElement(\"div\");\n    sub1.textContent = \"1x\";\n    sub2.textContent = \"2x\";\n    sub3.textContent = \"3x\";\n    sub4.textContent = \"4x\";\n\n    const ship1 = document.createElement(\"div\");\n    ship1.classList.add(\"ship1\");\n    ship1.setAttribute(\"draggable\", \"true\");\n    const cell1 = document.createElement(\"div\");\n    const cell2 = document.createElement(\"div\");\n    const cell3 = document.createElement(\"div\");\n    const cell4 = document.createElement(\"div\");\n    cell1.classList.add(\"cell\");\n    cell2.classList.add(\"cell\");\n    cell3.classList.add(\"cell\");\n    cell4.classList.add(\"cell\");\n    ship1.appendChild(cell1);\n    ship1.appendChild(cell2);\n    ship1.appendChild(cell3);\n    ship1.appendChild(cell4);\n    li1.appendChild(sub1);\n    li1.appendChild(ship1);\n\n\n    const li2 = document.createElement(\"li\");\n    li2.classList.add(\"horizontal\");\n    li2.appendChild(sub2);\n    const ship2 = document.createElement(\"div\");\n    ship2.classList.add(\"ship2\");\n    ship2.setAttribute(\"draggable\", \"true\");\n    const cell5 = document.createElement(\"div\");\n    const cell6 = document.createElement(\"div\");\n    const cell7 = document.createElement(\"div\");\n    cell5.classList.add(\"cell\");\n    cell6.classList.add(\"cell\");\n    cell7.classList.add(\"cell\");\n    ship2.appendChild(cell5);\n    ship2.appendChild(cell6);\n    ship2.appendChild(cell7);\n    li2.appendChild(ship2);\n\n    const li3 = document.createElement(\"li\");\n    li3.classList.add(\"horizontal\");\n    li3.appendChild(sub3);\n    const ship3 = document.createElement(\"div\");\n    ship3.classList.add(\"ship3\");\n    ship3.setAttribute(\"draggable\", \"true\");\n    const cell8 = document.createElement(\"div\");\n    const cell9 = document.createElement(\"div\");\n    cell8.classList.add(\"cell\");\n    cell9.classList.add(\"cell\");\n    ship3.appendChild(cell8);\n    ship3.appendChild(cell9);\n    li3.appendChild(ship3);\n\n    const li4 = document.createElement(\"li\");\n    li4.classList.add(\"horizontal\");\n    li4.appendChild(sub4);\n    const ship4 = document.createElement(\"div\");\n    ship4.classList.add(\"ship4\");\n    ship4.setAttribute(\"draggable\", \"true\");\n    const cell10 = document.createElement(\"div\");\n    cell10.classList.add(\"cell\");\n    ship4.appendChild(cell10);\n    li4.appendChild(ship4);\n\n\n    ul.appendChild(li1);\n    ul.appendChild(li2);\n    ul.appendChild(li3);\n    ul.appendChild(li4)\n    instruction.appendChild(ul);\n}\n\nfunction makeVertical() {\n    const instruction = document.querySelector(\".instruction\");\n    const oldul = document.querySelector(\".instruction ul\");\n    instruction.removeChild(oldul);\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"vertical\");\n    const li1 = document.createElement(\"li\");\n    li1.classList.add(\"vertical\");\n    const sub1 = document.createElement(\"div\");\n    const sub2 = document.createElement(\"div\");\n    const sub3 = document.createElement(\"div\");\n    const sub4 = document.createElement(\"div\");\n    sub1.textContent = \"1x\";\n    sub2.textContent = \"2x\";\n    sub3.textContent = \"3x\";\n    sub4.textContent = \"4x\";\n\n    const ship1 = document.createElement(\"div\");\n    ship1.classList.add(\"ship1\");\n    ship1.setAttribute(\"draggable\", \"true\");\n    const cell1 = document.createElement(\"div\");\n    const cell2 = document.createElement(\"div\");\n    const cell3 = document.createElement(\"div\");\n    const cell4 = document.createElement(\"div\");\n    cell1.classList.add(\"cell\");\n    cell2.classList.add(\"cell\");\n    cell3.classList.add(\"cell\");\n    cell4.classList.add(\"cell\");\n    ship1.appendChild(cell1);\n    ship1.appendChild(cell2);\n    ship1.appendChild(cell3);\n    ship1.appendChild(cell4);\n    li1.appendChild(sub1);\n    li1.appendChild(ship1);\n\n\n    const li2 = document.createElement(\"li\");\n    li2.classList.add(\"vertical\");\n    li2.appendChild(sub2);\n    const ship2 = document.createElement(\"div\");\n    ship2.classList.add(\"ship2\");\n    ship2.setAttribute(\"draggable\", \"true\");\n    const cell5 = document.createElement(\"div\");\n    const cell6 = document.createElement(\"div\");\n    const cell7 = document.createElement(\"div\");\n    cell5.classList.add(\"cell\");\n    cell6.classList.add(\"cell\");\n    cell7.classList.add(\"cell\");\n    ship2.appendChild(cell5);\n    ship2.appendChild(cell6);\n    ship2.appendChild(cell7);\n    li2.appendChild(ship2);\n\n    const li3 = document.createElement(\"li\");\n    li3.classList.add(\"vertical\");\n    li3.appendChild(sub3);\n    const ship3 = document.createElement(\"div\");\n    ship3.classList.add(\"ship3\");\n    ship3.setAttribute(\"draggable\", \"true\");\n    const cell8 = document.createElement(\"div\");\n    const cell9 = document.createElement(\"div\");\n    cell8.classList.add(\"cell\");\n    cell9.classList.add(\"cell\");\n    ship3.appendChild(cell8);\n    ship3.appendChild(cell9);\n    li3.appendChild(ship3);\n\n    const li4 = document.createElement(\"li\");\n    li4.classList.add(\"vertical\");\n    li4.appendChild(sub4);\n    const ship4 = document.createElement(\"div\");\n    ship4.classList.add(\"ship4\");\n    ship4.setAttribute(\"draggable\", \"true\");\n    const cell10 = document.createElement(\"div\");\n    cell10.classList.add(\"cell\");\n    ship4.appendChild(cell10);\n    li4.appendChild(ship4);\n\n\n    ul.appendChild(li1);\n    ul.appendChild(li2);\n    ul.appendChild(li3);\n    ul.appendChild(li4)\n    instruction.appendChild(ul);\n}\n\n\n//useful functions\nfunction getAxisName(value) {\n    if (value === 0) {\n        return \"x\";\n    } else if (value === 1) {\n        return \"y\"\n    } else {\n        throw new Error(\"Error in axis calc\");\n    }\n}\n\nfunction getNrOfShip(length) {\n    if (length === 4) {\n        return 1;\n    } else if (length === 3) {\n        return 2;\n    } else if (length === 2) {\n        return 3;\n    } else if (length === 1) {\n        return 4;\n    }\n}\n\n\n//enemy ship placement\nfunction calcPlace(length) {\n    let position;\n    let nr = getNrOfShip(length);\n    for (let i = 0; i < nr; i++) {\n        let axis = Math.round(Math.random());\n        let xcc = Math.floor(Math.random() * 9) + 1;\n        let ycc = Math.floor(Math.random() * 9) + 1;\n        if (axis === 0) {\n            let placed = false;\n            for (let k = 0; k < length; k++) {\n                if (ycc + length <= 9) {\n                    position = parseInt((xcc).toString() + (ycc + k).toString());\n                    if (xcc === 0) {\n                        position = parseInt((ycc + k).toString());\n                    }\n                    if (enemyGb.getBoard()[position].getPlaced() === true) {\n                        placed = true;\n                    }\n                }\n            }\n            while (placed === true || ycc > 6) {\n                placed = false;\n                xcc = Math.floor(Math.random() * 9) + 1;\n                ycc = Math.floor(Math.random() * 9) + 1;\n                for (let k = 0; k < length; k++) {\n                    if (ycc + length <= 9) {\n                        position = parseInt((xcc).toString() + (ycc + k).toString());\n                        if (xcc === 0) {\n                            position = parseInt((ycc + k).toString());\n                        }\n                        if (enemyGb.getBoard()[position].getPlaced() === true) {\n                            placed = true;\n                        }\n                    }\n                }\n            }\n        } else {\n            let placed = false;\n            for (let k = 0; k < length; k++) {\n                if (xcc + length <= 9) {\n                    position = parseInt((xcc + k).toString() + (ycc).toString());\n                    if (xcc === 0 && k === 0) {\n                        position = parseInt((ycc).toString());\n                    }\n                    if (enemyGb.getBoard()[position].getPlaced() === true) {\n                        placed = true;\n                    }\n                }\n            }\n            while (placed === true || xcc > 6) {\n                placed = false;\n                xcc = Math.floor(Math.random() * 9) + 1;\n                ycc = Math.floor(Math.random() * 9) + 1;\n                for (let k = 0; k < length; k++) {\n                    if (xcc + length <= 9) {\n                        position = parseInt((xcc + k).toString() + (ycc).toString());\n                        if (xcc === 0 && k === 0) {\n                            position = parseInt((ycc).toString());\n                        }\n                        if (enemyGb.getBoard()[position].getPlaced() === true) {\n                            placed = true;\n                        }\n                    }\n                }\n            }\n        }\n        enemyGb.placeShip(xcc, ycc, getAxisName(axis), length, enemyGb);\n    }\n\n}\n\nfunction placeEnemyShips() {\n    calcPlace(4);\n    calcPlace(3);\n    calcPlace(2);\n    calcPlace(1);\n}\n\n\n//player ship placement\nfunction placeYourShips() {\n    const cells = document.querySelectorAll(\"#meGrid .cell\");\n    axisbtn.addEventListener(\"click\", changeAxis);\n    for (let i = 0; i < meGb.getBoard().length; i++) {\n        cells[i].addEventListener(\"dragover\", (e) => {\n            e.preventDefault();\n        });\n        cells[i].addEventListener(\"drop\", (e) => {\n            e.preventDefault();\n            dropShip(e);\n            nr++\n            if (nr === 10) {\n                const instruction = document.querySelector(\".instruction\");\n                while (instruction.hasChildNodes()) {\n                    instruction.removeChild(instruction.firstChild);\n                }\n                const play = document.createElement(\"div\");\n                play.classList.add(\"big\");\n                play.textContent = \"Attack!\";\n                instruction.appendChild(play);\n                getAttack();\n            }\n        });\n\n    }\n    const fourship = document.querySelector(\".ship1\");\n    fourship.addEventListener(\"dragstart\", drag);\n    const threeship = document.querySelector(\".ship2\");\n    threeship.addEventListener(\"dragstart\", drag);\n    const twoship = document.querySelector(\".ship3\");\n    twoship.addEventListener(\"dragstart\", drag);\n    const oneship = document.querySelector(\".ship4\");\n    oneship.addEventListener(\"dragstart\", drag);\n\n\n}\n\nfunction dropShip(e) {\n    const cells = document.querySelectorAll(\"#meGrid .cell\");\n    const length = e.dataTransfer.getData(\"length\");\n    for (let i = 0; i < cells.length; i++) {\n        if (cells[i] === e.target) {\n            let xcc;\n            let ycc;\n            if (i.toString().length === 1) {\n                xcc = 0;\n                ycc = parseInt(i.toString()[0]);\n            } else {\n                xcc = parseInt(i.toString()[0]);\n                ycc = parseInt(i.toString()[1]);\n            }\n\n            try {\n                if (axis === 0) {\n                    meGb.placeShip(xcc, ycc, \"x\", parseInt(length), meGb);\n                } else {\n                    meGb.placeShip(xcc, ycc, \"y\", parseInt(length), meGb);\n                }\n            } catch (e) {\n                nr--;\n                alert(e.message)\n            }\n\n\n        }\n    }\n    for (let i = 0; i < meGb.getBoard().length; i++) {\n        if (meGb.getBoard()[i].getPlaced() === true) {\n            cells[i].style.backgroundColor = \"gray\";\n        }\n    }\n}\n\nfunction drag(e) {\n    var childNodes = e.target.childNodes,\n        children = [],\n        i = childNodes.length;\n\n    while (i--) {\n        if (childNodes[i].nodeType == 1) {\n            children.unshift(childNodes[i]);\n        }\n    }\n    e.dataTransfer.setData(\"length\", children.length);\n}\n\n\nfunction populateMeGrid(meGrid) {\n    hitMe = 0;\n    const cells = document.querySelectorAll(\"#meGrid .cell\");\n\n    for (let i = 0; i < meGb.getBoard().length; i++) {\n        try {\n            if (meGb.getBoard()[i].getAttacked() === true) {\n                cells[i].style.backgroundColor = \"aquamarine\";\n            }\n            if (meGb.getBoard()[i].getHit() === true) {\n                hitMe++;\n                cells[i].style.backgroundColor = \"orange\";\n            }\n            if (meGb.getBoard()[i].getShip().isSunk() === true) {\n                for (let k = 0; k < meGb.getBoard().length; k++) {\n                    if (meGb.getBoard()[k].getShip() === meGb.getBoard()[i].getShip()) {\n                        const cellArray = document.querySelectorAll(\"#meGrid .cell\");\n                        cellArray[k].style.backgroundColor = \"red\";\n\n                    }\n                }\n            }\n\n        } catch (e) { }\n\n    }\n    if (hitMe === 20) {\n        const instruction = document.querySelector(\".instruction\");\n        while (instruction.hasChildNodes()) {\n            instruction.removeChild(instruction.firstChild);\n        }\n        const cont = document.createElement(\"div\");\n        cont.classList.add(\"cont\");\n        const play = document.createElement(\"div\");\n        play.classList.add(\"big\");\n        play.textContent = \"You Lose! :(\";\n        const again = document.createElement(\"div\");\n        again.classList.add(\"medium\");\n        again.textContent = \"Refresh to play again.\";\n        cont.appendChild(play);\n        cont.appendChild(again);\n        instruction.appendChild(cont);\n\n    }\n}\n\nfunction populateEnemyGrid(enemyGrid) {\n    hitE = 0;\n    const cells = document.querySelectorAll(\"#enemyGrid .cell\");\n    for (let i = 0; i < enemyGb.getBoard().length; i++) {\n        // if hit, if sunk\n        try {\n\n            if (enemyGb.getBoard()[i].getAttacked() === true) {\n                cells[i].style.backgroundColor = \"aquamarine\";\n            }\n            if (enemyGb.getBoard()[i].getHit() === true) {\n                hitE++;\n                cells[i].style.backgroundColor = \"orange\";\n\n            }\n            if (enemyGb.getBoard()[i].getShip().isSunk() === true) {\n                for (let k = 0; k < enemyGb.getBoard().length; k++) {\n                    if (enemyGb.getBoard()[k].getShip() === enemyGb.getBoard()[i].getShip()) {\n                        const cellArray = document.querySelectorAll(\"#enemyGrid .cell\");\n                        cellArray[k].style.backgroundColor = \"red\";\n\n\n                    }\n                }\n            }\n        } catch (e) { }\n    }\n    if (hitE === 20) {\n        const instruction = document.querySelector(\".instruction\");\n        while (instruction.hasChildNodes()) {\n            instruction.removeChild(instruction.firstChild);\n        }\n        const cont = document.createElement(\"div\");\n        cont.classList.add(\"cont\");\n        const play = document.createElement(\"div\");\n        play.classList.add(\"big\");\n        play.textContent = \"You Win! :)\";\n        const again = document.createElement(\"div\");\n        again.classList.add(\"medium\");\n        again.textContent = \"Refresh to play again.\"\n        cont.appendChild(play);\n        cont.appendChild(again);\n        instruction.appendChild(cont);\n    }\n\n\n}\n\nfunction getOtherPlayer(currentPlayer) {\n    if (currentPlayer === mePlayer)\n        return enemyPlayer;\n    else return mePlayer;\n}\n\n\nlet turn = 0;\nlet latestMoveBy = enemyPlayer;\nfunction playerMove(currentPlayer, xcc, ycc) {\n    try {\n        if (latestMoveBy === currentPlayer)\n            return;\n        turn++;\n        //transform cell DOM\n        currentPlayer.attack(xcc, ycc, getOtherPlayer(currentPlayer).getGameboard());\n        populateMeGrid(meGrid);\n        populateEnemyGrid(enemyGrid);\n        latestMoveBy = currentPlayer;\n    } catch (e) {\n        turn--;\n    }\n}\n\n\n\n\n\n//general gameboard\nfunction populateGrids() {\n    try {\n        const meGrid = document.getElementById('meGrid');\n        const enemyGrid = document.getElementById('enemyGrid');\n        placeEnemyShips();\n\n\n        for (let i = 0; i < enemyGb.getBoard().length; i++) {\n            const DOMCell = document.createElement(\"div\");\n            DOMCell.classList.add(\"cell\");\n            enemyGrid.appendChild(DOMCell);\n        }\n\n\n        for (let i = 0; i < meGb.getBoard().length; i++) {\n            const DOMCell = document.createElement(\"div\");\n            DOMCell.classList.add(\"cell\");\n            if (meGb.getBoard()[i].getPlaced() === true) {\n                DOMCell.style.backgroundColor = \"gray\";\n            }\n            meGrid.appendChild(DOMCell);\n        }\n\n\n\n\n        placeYourShips();\n\n\n    } catch (e) {\n        alert(e.message);\n    }\n}\n\nlet posArr = [];\nfunction randomIntFromInterval(min, max) { // min and max included \n    return Math.floor(Math.random() * (max - min + 1) + min)\n}\n\n\nfunction getAttack() {\n    const cellsEnemy = document.querySelectorAll(\"#enemyGrid .cell\");\n    for (let i = 0; i < cellsEnemy.length; i++) {\n        cellsEnemy[i].addEventListener(\"click\", () => {\n            let position = i.toString();\n            if (position.length === 1) {\n                position = \"0\" + position;\n            }\n            let xcc = position[0];\n            let ycc = position[1];\n            let player;\n            player = mePlayer\n            playerMove(player, xcc, ycc);\n\n            let xcce = randomIntFromInterval(1, 10) - 1;\n            let ycce = randomIntFromInterval(1, 10) - 1;\n            let positione = parseInt(xcce.toString() + ycce.toString());\n            if (xcce === 0) {\n                positione = parseInt(ycce.toString());\n\n            }\n            // posArr.push(positione);\n            let ok = true;\n            for (let k = 0; k < posArr.length; k++) {\n                if (posArr[k] === positione) {\n                    ok = false;\n                }\n            }\n            while (ok === false) {\n                ok = true;\n                xcce = randomIntFromInterval(1, 10) - 1;\n                ycce = randomIntFromInterval(1, 10) - 1;\n                positione = parseInt(xcce.toString() + ycce.toString());\n                if (xcce === 0) {\n                    positione = parseInt(ycce.toString());\n\n                }\n                for (let k = 0; k < posArr.length; k++) {\n                    if (posArr[k] === positione) {\n                        ok = false;\n                    }\n                }\n            }\n\n            posArr.push(positione);\n            player = enemyPlayer\n            playerMove(player, xcce, ycce);\n        })\n    }\n}\n\n\npopulateGrids();\n\n//need to implement WIN message\n//finish up\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;