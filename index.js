const StartBtn=document.querySelector(".start");
const start=document.querySelector(".start-game");
const MainGame=document.querySelector(".main-game");
const AfterGame=document.querySelector(".game-final");
const boxes=document.querySelectorAll(".box");
const Status=document.querySelector(".status");

start.classList.add("active");
let currentplayer;
let GameGrid;


StartBtn.addEventListener("click",()=>{
      initGame()
});

function initGame(){
     
     currentplayer="X";
     GameGrid = ["","","","","","","","",""];

     boxes.forEach((box,index)=>{
          box.innerText="";
          boxes[index].style.pointerEvents = "all";
          box.classList = `box box${index+1}`;
     });

     Status.innerText=`Player - ${currentplayer} Turn!`;
     start.classList.remove("active");
     MainGame.classList.add("active");
     AfterGame.classList.remove("active");
     
}
function SwapTurn(){
     if(currentplayer==="X"){
          currentplayer="O";
     }
     else{
          currentplayer="X";
     }
     Status.innerText=`Player - ${currentplayer} Turn!`;
}
function CheckGameOver(){
     
}
function handleClick(index){
     if(GameGrid[index]===""){
          boxes[index].innerText=currentplayer;
          GameGrid[index]=currentplayer;
          boxes[index].style.pointerEvents="none";

          SwapTurn();

          CheckGameOver();
     }
}
boxes.forEach((box,index)=>{
     box.addEventListener("click",()=>{
          handleClick(index);
     })
});

let winCondn=[
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [0,4,8]

];

const Result=document.querySelector(".game-result");
function CheckGameOver(){
     let winner="";

     winCondn.forEach((position)=>{
          if((GameGrid[position[0]]!="" || GameGrid[position[1]]!="" || GameGrid[position[2]]!="")&&
          (GameGrid[position[0]]===GameGrid[position[1]])&& (GameGrid[position[1]]===GameGrid[position[2]])){

               if(GameGrid[position[0]]==="X"){
                    winner="X";
               }
               else{
                    winner="O";
               }

               boxes.forEach((box)=>{
                    box.style.pointerEvents="none";
               });
          }
     });

     if(winner!==""){
          AfterGame.classList.add("active");
          Result.innerText=`${winner} Winner!`;
     }
     let boxfill=0;
     GameGrid.forEach((box)=>{
          if(box!==""){
               boxfill++;
          }
     });

     if(boxfill===9){
          AfterGame.classList.add("active");
          Result.innerText=`Game Tied!`;
     }
}

const NewGameBtn=document.querySelector(".new-game");

NewGameBtn.addEventListener("click",()=>{
     MainGame.classList.add("active");
     initGame();
     AfterGame.classList.remove("active");
});