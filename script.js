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

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

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
        console.log("You loose")
        computerScore++;
    }
   
}

playRound(humanChoice, computerChoice);

