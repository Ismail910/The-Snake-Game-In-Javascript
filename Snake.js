export let Snake_spede = 1 ;
const snakeBody =[
    {x:10 , y:11},
    {x:11 , y:11},
    {x:12 , y:11},
    {x:13 , y:11},
    {x:14 , y:11},
    {x:15 , y:11},
];

export function Update_Snake ()
{
    for (let i = snakeBody.length - 2;i >= 0; i--)
    {
        snakeBody[i + 1] = {...snakeBody[i] };
    }
    // snakeBody[0].x = 1;
    // snakeBody[0].y = 0;

}

export function Drow_Snake(gameBordar)
{
    snakeBody.forEach((segment)=>{
        let Snake_El = document.createElement("div");
        Snake_El.classList.add("Snake");
        Snake_El.style.gridColumnStart = segment.x;
        Snake_El.style.gridRowStart = segment.y;
        gameBordar.appendChild(Snake_El);
        // var ctx = Snake_El.getContext("2d");
        // console.log(ctx);
        //  let img = new Image();
        //  img.sec = "./Images/2.jpg"
        //  img=function(){
        // ctx.drawImage(img,10,10,10,10);//(objct ,x ,y ,width,height);
        // }
       // ctx.rect(10, 10,10,10);
        // ctx.stroke();
        // ctx.fill()
        // ctx.fillRect(segment.y,segment.x,25,15);
        // ctx.fillRect(segment.y,segment.x,25,15);
      // ctx.strokeRect(50,50,100,50);
      // ctx.clearRect(75,75,30,30);
    })


}


