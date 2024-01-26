# stone-paper-scissor
                                          HTML

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Rock Paper Scissors</h1>
    <div class="choices">

    <div class="choice" id="rock">
        <img src="projectimage/rock.png" >
       
    </div>
    <div class="choice" id="paper">
        <img src=" \projectimage\paper.jpg" >
    </div>
    <div class="choice" id="scissors">
        <img src="\projectimage\scissors.png" >
    </div>

</div>

<div class="score-board">

    <div class="score">
      
        <p id="user-score">0</p>
        <p>You</p>
    </div>
    <div class="score">
      
        <p id="comp-score">0</p>
        <p>Comp</p>
    </div>

</div>

 
   <div class="msg-container">
    <p id="msg">Play your move</p>
   </div>

    <script src="app.js"></script>
</body>
</html>



                                                                  CSS
                                                                  *
{
    margin:0px;
    padding:0px;
    text-align:center
    
}
body{
    background-color: #E6A4B4;
}

h1
{
    background-color:#030637 ;
    color:#fff;
    height:5rem;
    line-height:5rem;
}

.choice
{
    height:200px;
    width:200px;
    border-radius: 50%;
    display: flex;
    justify-content:center;
    align-items:center;
}

img{
   
    height:150px;
    width:150px;
    object-fit: cover;
    border-radius:50%;
}

.choices{
    display: flex;
    justify-content:center;
    align-items:center;
    gap:3rem;
    margin-top:5rem;
}
.choice:hover{
    opacity: 0.5;
   cursor: pointer;
   background-color: #3C0753;
}

.score-board
{
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:2rem;
    gap: 2rem;
}
#user-score,#comp-score
{
   font-size:4rem;
   gap:1rem;

}
.msg-container{
    margin-top:5rem;
}


#msg
{
    background-color: #720455;
    color:#fff;
    font-size:3rem;
    margin-top:5rem;
    display:inline;
   border-radius: 1rem;;
}



                                                     JAVASCRIPT

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

                                                     
