function getComputerChoice(){
    let choice;
    random = Math.floor(Math.random() * 3);

    if(random === 0)
    {
     choice = "paper";
    }
    else if(random === 1)
    {
     choice = "rock";
    }
    else
    {
     choice = "scissors";
    }

    return choice;
}


function gameOver(text)
{
     humanScore = 0;
     computerScore = 0;
     para.textContent = text;
}







 let humanScore = 0;
 let computerScore = 0;

 function playRound(hSelect){

   
    hScore.textContent =  "Human score: " + humanScore;
    cScore.textContent = "Computer score: " + computerScore;



    

    cSelect = getComputerChoice();


    if(hSelect === cSelect)
    {
         para.textContent = "It's a tie";
    }
    else if(hSelect === "paper" && cSelect === "rock")
    {
        para.textContent = "You win"
        humanScore++; 
        hScore.textContent =  "Human score: " + humanScore;
    }
     else if(hSelect === "rock" && cSelect === "scissors")
    {
        para.textContent = "You win"
        humanScore++; 
        hScore.textContent = "Human score: " + humanScore;
    }
     else if(hSelect === "scissors" && cSelect === "paper")
    {
        para.textContent = "You win";
        humanScore++; 
        hScore.textContent =  "Human score: " + humanScore;
    }
    else
    {
        para.textContent = "You loose";
        computerScore++;
        cScore.textContent = "Computer score: " + computerScore;
    }


    if(humanScore === 5 || computerScore === 5)
    {
        if(humanScore === 5)
        {
            gameOver("Game is over, You win");
        }
        else
        {
            gameOver("Game is over, You loose");

        }
            
    }

   
}


const body = document.querySelector("body");
const paper = document.createElement("button");
paper.textContent = "Paper";
const rock = document.createElement("button")
rock.textContent = "Rock"
const scissors = document.createElement("button")
scissors.textContent = "Scissors"
rock.style.margin = "20px"



let pick = ""

paper.addEventListener("click", () => {
    pick = "paper";
    playRound(pick);
})
rock.addEventListener("click",() => {
    pick = "rock";
    
    playRound(pick);
})

scissors.addEventListener("click",() =>{
    pick = "scissors";
    playRound(pick);

} )

const div = document.createElement("div");
const para = document.createElement("p");
const scores = document.createElement("div")
const hScore = document.createElement("p")
const cScore = document.createElement("p")



div.appendChild(para);
body.appendChild(div);
body.appendChild(scissors);
body.appendChild(rock);
body.appendChild(paper);
scores.appendChild(hScore)
scores.appendChild(cScore)
body.appendChild(scores)

































