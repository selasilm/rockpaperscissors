//let rounds = prompt(`Select the number of rounds to be played`);
let humanScore = 0;
let computerScore = 0;
let humanChoice='';
const content = document.querySelector('#scores');


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
    console.log(`computer choice: ${computerChoice}`);
    return computerChoice;
}

function playRound(human,computer){
    if (human==='rock'){
        if (computer === 'rock'){
            alert(`computer chose rock: it's a draw`);
        } else if (computer === 'paper'){
            alert(`computer chose paper: paper beats rock, computer wins`);
            computerScore +=1;
        } else {
            alert(`computer chose scissors:rock beats scissors, human wins`);
            humanScore +=1;
        }
    } else if (human ==='paper'){
        if (computer === 'rock'){
            alert(`computer chose rock: paper beats rock, human wins`);
            humanScore +=1;
        } else if (computer === 'paper'){
            alert(`computer chose paper: it's a draw`);
        } else {
            alert(`computer chose scissors: scissors beats paper, computer wins`);
            computerScore +=1;
        }
    }else{
        if (computer === 'rock'){
            alert(`computer chose rock: rock beats scissors, computer wins`);
            computerScore +=1;
        } else if (computer === 'paper'){
            alert(`computer chose paper: scissors beats paper, human wins`);
            humanScore +=1;
        } else {
            alert(`computer chose scissors: it's a draw`);
        }
    }
    console.log(`computer score: ${computerScore}`)
    console.log(`human score: ${humanScore}`);
}

function playgame(roundNo){
    for (let i =0;i<roundNo;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    alert(`computer score:${computerScore}`);
    alert(`human score: ${humanScore}`);
}

const buttons = document.querySelectorAll('button');
const br = document.createElement('br');

buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        humanChoice = button.id;
        alert(`${humanChoice} selected`);
        playRound(humanChoice,getComputerChoice());    
        content.textContent += `human score:${humanScore} | computer score:${computerScore}<br>`
    })
})

/*
console.log(btn_rock);
btn_rock.addEventListener("click",()=>{
    alert('rock selected');
    humanChoice = 'rock';
    playRound(humanChoice,getComputerChoice());
})
*/