"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.games.push({
        id: Math.random().toString(),
        WhitePlayerName: "Gagan Sharma",
        BlackPlayerName: "Pulkit Sharma",
        moves: []
    });
}, 5000);
//WS server
