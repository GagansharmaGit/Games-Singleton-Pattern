import { startLogger } from "./logger";
import { games } from "./store";


startLogger();


setInterval(()=>{
    games.push({
        id:Math.random().toString(),
        WhitePlayerName:"Gagan Sharma",
        BlackPlayerName:"Pulkit Sharma",
        moves:[]
    })
},5000)

//WS server------------------------