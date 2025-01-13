let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let computerChoice;
    let num = Math.random();
    if (num<0.3){
        computerChoice = 'rock';
    }else if (num<0.6){
        computerChoice = 'paper';
    }else{
        computerChoice='scissors';
    }
    console.log(computerChoice);
    return computerChoice;
}
function getHumanChoice(){
    let humanChoice = prompt('type r(rock),p(paper) or s(scissors):');
    if (humanChoice.toLowerCase() ==='r'){
        alert(`you typed ${humanChoice} for rock`);
        humanChoice = 'rock';
    }else if (humanChoice.toLowerCase()==='p'){
        alert(`you chose ${humanChoice} for paper`);
        humanChoice = 'paper';
    }else if (humanChoice.toLowerCase()==='s'){
        alert(`you chose ${humanChoice} for scissors`);
        humanChoice= 'scissors';
    }
    return humanChoice;
}

function playRound(human,computer){
    if (human==='rock'){
        if (computer === 'rock'){
            alert(`it's a draw`);
        } else if (computer === 'paper'){
            alert(`paper beats rock, computer wins`);
            computerScore +=1;
        } else {
            alert(`rock beats scissors, human wins`);
            humanScore +=1;
        }
    } else if (human ==='paper'){
        if (computer === 'rock'){
            alert(`paper beats rock, human wins`);
            humanScore +=1;
        } else if (computer === 'paper'){
            alert(`it's a draw`);
        } else {
            alert(`scissors beats paper, computer wins`);
            computerScore +=1;
        }
    }else{
        if (computer === 'rock'){
            alert(`rock beats scissors, computer wins`);
            computerScore +=1;
        } else if (computer === 'paper'){
            alert(`scissors beats paper, human wins`);
            humanScore +=1;
        } else {
            alert(`it's a draw`);
        }
    }
    console.log(`computer score: ${computerScore}`)
    console.log(`human score: ${humanScore}`);
}

function playgame(rounds){
    let rounds = prompt(`Select the number of rounds to be played`);
    for (let i =0;i<rounds;i++){
        playRound(getComputerChoice(),getHumanChoice())
    }
    alert(`computer score:${computerScore}`);
    alert(`human score: ${humanScore}`);
}

playgame();