"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
const startLogger = () => {
    setInterval(() => {
        // console.log(gameManager.logGames())
        store_1.gameManager.logGames();
    }, 5000);
};
exports.startLogger = startLogger;
