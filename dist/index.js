"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.startLogger)();
// const gameManager = new GameManager();
setInterval(() => {
    // games.push({
    //     id:Math.random().toString(),
    //     WhitePlayerName:"Gagan Sharma",
    //     BlackPlayerName:"Pulkit Sharma",
    //     moves:[]
    // })
    store_1.gameManager.addGame(Math.random().toString());
    // gameManager.addMove(Math.random().toString() , "Gagan")
}, 5000);
//WS server------------------------
