var p1Button=document.querySelector("#p1");
var p2Button=document.getElementById("p2");
var resetButton=document.getElementById("reset");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameOver=false;
var winningScore=5;
p1Button.addEventListener("click",function(){
   if(!gameOver){
   	  p1score++;
   	  if(p1score===winningScore){
         p1Display.classList.add("winner");
         p2Display.classList.add("runner");
   	  	gameOver= true;
   	  }
      p1Display.textContent=p1score;
   }
});
p2Button.addEventListener("click",function(){
 if(!gameOver){
 	  p2score++;
 	   if(p2score===winningScore){
          p2Display.classList.add("winner");
          p1Display.classList.add("runner");
   	  	gameOver= true;
   	  }
      p2Display.textContent=p2score;
 }
});
resetButton.addEventListener("click",function(){
   p1score=0;
   p2score=0;
   p1Display.textContent=0;
   p2Display.textContent=0;
   p2Display.classList.remove("winner");
   p1Display.classList.remove("runner");
   p1Display.classList.remove("winner");
   p2Display.classList.remove("runner");
   gameOver=false;
});
 numInput.addEventListener("change",function(){
    winningScoreDisplay.textContent=this.value;
    winningScore= Number(this.value);
    reset();
});
 
function reset(){
    p1score=0;
   p2score=0;
   p1Display.textContent=0;
   p2Display.textContent=0;
   p2Display.classList.remove("winner");
   p1Display.classList.remove("runner");
   p1Display.classList.remove("winner");
   p2Display.classList.remove("runner");
   gameOver=false;
}
