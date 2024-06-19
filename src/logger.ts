import { GameManager } from "./store";
import { gameManager } from "./store";


export const startLogger=()=>{
    setInterval(()=>{
        // console.log(gameManager.logGames())
       gameManager.logGames()
    },5000)
}