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

function getHumanChoice(){
    let choice = prompt("Pick: rock, paper or scissors ");
    choice = choice.toLowerCase();
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let computerChoice
    let humanChoice;


    /*for(let i=0;i<5;i++)
    {
        
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        humanChoice = getHumanChoice();

         playRound(humanChoice, computerChoice);
         console.log(humanScore);
         console.log(computerScore);
    }

    console.log("Game ends")*/

    if(humanScore > computerScore)
    {
        console.log("You win")
    }
    else
    {
        console.log("Computer wins")
    }
   

    function playRound(hSelect, cSelect){
    if(hSelect === cSelect)
    {
         console.log("it's a tie");
    }
    else if(hSelect === "paper" && cSelect === "rock")
    {
        console.log("You win!");
        humanScore++; 
    }
     else if(hSelect === "rock" && cSelect === "scissors")
    {
        console.log("You win!");
        humanScore++; 
    }
     else if(hSelect === "scissors" && cSelect === "paper")
    {
        console.log("You win!");
        humanScore++; 
    }
    else
    {
        console.log("You loose");
        computerScore++;
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

body.appendChild(scissors)
body.appendChild(rock)
body.appendChild(paper)































playGame();

