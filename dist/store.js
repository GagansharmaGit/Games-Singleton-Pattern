"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
// export const games:Game[] = [];
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addMove(gameId, move) {
        // console.log(`Adding move ${move} to Game ${gameId}`);
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
exports.gameManager = new GameManager(); //exporting only single object for everyone to make sure to remove another objects creation and also reduce circular dependency between files
