function getComputerChoice(){
    let computerChoice;
    let num = Math.random();
    if(num<0.3){
        computerChoice = 'rock';
    }else if(num<0.6){
        computerChoice = 'paper';
    }else{
        computerChoice='scissors';
    }
}