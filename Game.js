let Snake_spede = 1 ;
let lastRenderTime = 0;
function main(currentTime)
{
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
   
    if (secondsSinceLastRender < 1 / Snake_spede)
   return;
//    console.log(secondsSinceLastRender);
//    console.log(currentTime);
//    console.log(lastRenderTime);
   
    lastRenderTime = currentTime;

    Update();
    drow();
}

window.requestAnimationFrame(main);

function Update()
{
    //console.log("he");
}

function drow ()
{
   // console.log(" i'am");
}