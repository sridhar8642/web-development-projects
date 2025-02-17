var enternum = document.getElementById("enternum");
var randomnum = Math.floor(Math.random()*10)+1;
var res = document.getElementById("res");
var score = document.getElementById("score");
var totscore = 10;
function check(){
    var guessnumber = enternum.value;
    if(randomnum == guessnumber){
        res.textContent="Right";
        alert("You Won....");
    }
    else{
        res.textContent="Wrong";
        totscore =totscore-1;
        score.textContent="Score:"+totscore;
    }
}
