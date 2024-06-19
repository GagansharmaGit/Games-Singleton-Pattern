interface Game{
    id:string;
    WhitePlayerName:string;
    BlackPlayerName:string;
    moves:string[];
}

export class GameManager{
    games:Game[] = [];
    private static instance:GameManager
    private constructor(){
        this.games=[];
    }

    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance;
        }
        return GameManager.instance = new GameManager();
    }

    addMove(gameId:string, move:string){
        console.log(`Adding move ${move} to Game ${gameId}`);
        const game = this.games.find((game)=>game.id === gameId);
        game?.moves.push(move);
    }

    addGame(gameId:string){
        const game = {
                id:gameId,
                WhitePlayerName:"Gagan Sharma",
                BlackPlayerName:"Pulkit Sharma",
                moves:[]
        }
        this.games.push(game);
    }

    logGames(){
        console.log(this.games);
    }

}
