"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        return GameManager.instance = new GameManager();
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to Game ${gameId}`);
        const game = this.games.find((game) => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            WhitePlayerName: "Gagan Sharma",
            BlackPlayerName: "Pulkit Sharma",
            moves: []
        };
        this.games.push(game);
    }
    logGames() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
