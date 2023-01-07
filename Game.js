import {Snake_spede ,Update_Snake , Drow_Snake} from "./Snake.js"

const KyeWord = [{
     Fname:"Ahmed",
     Lname:"Mohamed"
}]
console.log(KyeWord[0].Fname);


let gameBoard = document.getElementById("game_bord")
let lastRenderTime = 0;
function main(currentTime)
{
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
   
    if (secondsSinceLastRender < 1 / Snake_spede)
   return;
    //    console.log(secondsSinceLastRender);
   //console.log(currentTime);
    //    console.log(lastRenderTime);
   
    lastRenderTime = currentTime;

    Update();
    drow();

    console.log();
}

window.requestAnimationFrame(main);

function Update()
{
    gameBoard.innerHTML = " ";
    Update_Snake()

}

function drow ()
{
   Drow_Snake(gameBoard)

}
