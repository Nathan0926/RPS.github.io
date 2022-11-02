let playerScore = 0;
let computerScore = 0;
let moves = 10;
let win =0


document.getElementById("BTN1").addEventListener("click",()=>{option("Paper")})
document.getElementById("BTN2").addEventListener("click",()=>{option("Rock")})
document.getElementById("BTN3").addEventListener("click",()=>{option("Scissors")})



function option(O){
const ELM = document.getElementById("results");
var RND = Math.floor(Math.random()*3)
var OPTIONS = ["Paper","Rock","Scissors"];
OPTIONS[RND] 
if(moves > 0){
if(O==OPTIONS[RND]){
    ELM.innerHTML = ('draw')


    
}
else if((O == "Rock" && OPTIONS[RND] == "Scissors") || (O=="Paper" && OPTIONS[RND]=="Rock") || (O=="Scissors" && OPTIONS[RND] == "Paper") ){
    ELM.innerHTML = ("You won");
    win++
}



else{
    ELM.innerHTML = ("You lost")
}
moves--

}
else{
    document.getElementById('bigDaddy').style.display = "none"
    document.getElementById('results').style.display = "none"
    document.getElementById("WL").style.visibility = "visible"

    if(win >= 6){
document.getElementById("WL").innerHTML = "You Won Play again?"
document.body.style.background = "green"
    }
    else if(win <= 5){
        document.getElementById("WL").innerHTML = "You Lost Try again?"
        document.body.style.background = "red"

    }
    

}}





