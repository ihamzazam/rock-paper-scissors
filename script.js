function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let input = prompt("Choose: Rock, Paper or Scissors?");
    if (input != null) {
        input = input.toLowerCase();
    }
    return input;
}

function playRound(userChoice, computerChoice) {
    let winner;
    if (userChoice === computerChoice) {
        console.log('It\'s a Draw!')
        winner = null;
    } 
    else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            console.log('You win! Rock beats Scissors');
            winner = 'user';
        } 
        else if (computerChoice === 'paper') {
            console.log('You loose! Paper beats Rock!');
            winner = 'computer';
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('You win! Paper beats Rock');
            winner = 'user';
        } 
        else if (computerChoice === 'scissors') {
            console.log('You loose! Scissors beats Paper!');
            winner = 'computer';
        }
    }
    else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            console.log('You win! Scissors beats Paper!');
            winner = 'user';
        } 
        else if (computerChoice === 'rock') {
            console.log('You loose! Rock beats Paper!');
            winner = 'computer';
        }
    }
    return winner;
}

function game() {
    let roundResult;
    let userResult = 0;
    let computerResult = 0;
    while (userResult !== 5 && computerResult !== 5) {
        roundResult = playRound(getPlayerChoice(), getComputerChoice());
        if (roundResult === 'user') {
            userResult += 1;
        }
        else if (roundResult === 'computer') {
            computerResult += 1;
        }
    }
    if (userResult === 5) {
        console.log('You won the game!')
    }
    else if (computerResult === 5) {
        console.log('You lost the game!')
    }
}

game();