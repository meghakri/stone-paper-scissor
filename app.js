let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score")
const genCompChoice =()=>
{
    const option =["rock","paper","scissors"];

    const randIdx=Math.floor(Math.random()*3);

return option[randIdx];
};

const drawgame=()=>
{
    
    msg.innerText="Game Was Drawn,Play again";
    msg.style.backgroundColor="black";   
};

const showWinner=(userwin,userChoice,compChoice)=>
{
if(userwin){

    userScore++;
    userscorepara.innerText=userScore;
    
    msg.innerText=`You Win !your ${userChoice} beats comp ${compChoice}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compscorepara.innerText=compScore;
   
    msg.innerText=`You lose! comp ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}

 const playGame=(userChoice)=>{
     
    const compChoice=genCompChoice();
    
    if(userChoice===compChoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock")
        {
            userwin=compChoice==="paper"?false:true;

        }else if(userChoice==="paper")
        {
            userwin=compChoice==="scissors"?false:true;

        }else
        {
         userwin=compChoice==="rock"?false:True;

        }
    showWinner(userwin,userChoice,compChoice);
    
 }};



choices.forEach((choice) =>{
    
    choice.addEventListener("click",()=>{

        const userChoice=choice.getAttribute("id");
        

       playGame(userChoice);

    });
});