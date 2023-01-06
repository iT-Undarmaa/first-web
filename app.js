let dice=document.querySelector('.dice');
dice.style.display="none";
let onoo=document.getElementById("current-0");
document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;
onoo.textContent=0;
document.getElementById("current-1").textContent=0;
let toglogch=0;
let onoo2=0;
let onoonuud=[0,0];
let roundScore=0;
document.querySelector('.btn-roll').addEventListener("click",function(){
    let diceNumber=Math.floor(Math.random()*6)+1;
    dice.style.display="block";
    dice.src="img/dice-"+diceNumber+".jpeg";
    console.log(diceNumber);
    //dice-2.png
    // <img src="dice-1.png"></img>
    if(diceNumber!==1){
        roundScore=roundScore+diceNumber;
        document.getElementById("current-"+toglogch).textContent=roundScore;
    }else {
        document.getElementById("score-"+toglogch).textContent=roundScore;
        toglogch===0 ? (onoo=roundScore):(onoo2=roundScore);
        roundScore=0;
        document.getElementById("current-"+toglogch).textContent=roundScore;
        toglogch===0 ? (toglogch=1) : (toglogch=0)
        // if(toglogch===0){
        //     toglogch=1
        // }else {
        //     toglogch=0
        // }
      
       document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        dice.style.display="none";
       
    }  if(onoo2!==0&&onoo!==0) { if (onoo>onoo2) 
        {document.getElementById("winner-geh").textContent="1-р тоглогч хожлоо";}else {document.getElementById("winner-geh").textContent="2-р тоглогч хожлоо";}
    }
    });
document.querySelector('.btn-new').addEventListener("click",function(){
    document.querySelector(".player-1-panel").classList.toggle("active");
    dice.style.display="none";
    let onoo=document.getElementById("current-0");
document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;
onoo.textContent=0;
document.getElementById("current-1").textContent=0;
let toglogch=0;
let onoonuud=[0,0];
let roundScore=0;
})
