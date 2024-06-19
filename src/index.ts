import { startLogger } from "./logger";
import { GameManager } from "./store";
import { gameManager } from "./store";


startLogger();

// const gameManager = new GameManager();
setInterval(()=>{
    // games.push({
    //     id:Math.random().toString(),
    //     WhitePlayerName:"Gagan Sharma",
    //     BlackPlayerName:"Pulkit Sharma",
    //     moves:[]
    // })
    gameManager.addGame(Math.random().toString())
    // gameManager.addMove(Math.random().toString() , "Gagan")
},5000)

//WS server------------------------