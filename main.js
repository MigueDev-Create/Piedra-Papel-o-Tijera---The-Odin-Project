/* \
COMPUTER

2- We need a function that randomly returns the values ​​for rock, paper, scissors, where the game will be played against the computer. So, we should first establish the function, which will return the aforementioned values ​​for the computer based on conditions that will be compared against the random value from among 3 numbers.

3- HUMAN

Create a new function where the human will input a value, which will be compared to the value the machine has. So, we should also establish which value beats which, and thus be able to add up the scores for each player.

4- VARIABLES
Two global variables were simply created and used in getHumanChoice so that the winner would accumulate points.

5- ONE ROUND

To play a single round, both functions were created for getComputerChoice

and getHumanChoice, each with its respective conditions so that, depending on the outcome, the point would be awarded to the winner, since it was only for one round.

6- THE WHOLE GAME

What I did was put the playRound function inside playGame, as well as

the variables that were global in scope becoming part of the playGame function's scope.

There's also a call, as mentioned in the 5-round exercise,

where we call the playRound function 5 times using a for loop and a conditional statement so that

in each round it shows whether it's a tie, a winner, or a loser, and at the end it shows

the winner with each player's score. Finally, we call playGame to execute the entire function.
*/




const getComputerChoice = () => {
    const selection = Math.floor(Math.random() * 3)
    if (selection === 0) {
        return 'piedra'
    } else if (selection === 1) {
        return 'papel'
    } else {
        return 'tijeras'
    }
}


const getHumanChoice = () => {
    const selection = prompt('Ingrese un valor (piedra, papel o tijeras):');
    return selection.toLowerCase().trim();
};





const playGame = () => {

    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {

        const humanPlay = humanChoice.toLowerCase();

        if (humanPlay === computerChoice) {
            console.log(`¡Empate! Ambos eligieron ${humanPlay}`);
            return;
        }

        const humanGana =
            (humanPlay === 'piedra' && computerChoice === 'tijeras') ||
            (humanPlay === 'papel' && computerChoice === 'piedra') ||
            (humanPlay === 'tijeras' && computerChoice === 'papel');

        if (humanGana) {
            humanScore++;
            console.log(`¡Ganaste! ${humanPlay} vence a ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`¡Pierdes! ${computerChoice} vence a ${humanPlay}`);
        }
    };

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore === computerScore) {
        alert(`Empate! HUMAN - PUNTAJE: ${humanScore} ---------- COMP - PUNTAJE: ${computerScore}`);
    } else if (humanScore > computerScore) {
        alert(`El Ganador es: HUMAN - PUNTAJE: ${humanScore} ---------- COMP - PUNTAJE: ${computerScore}`);
    } else {
        alert(`El Ganador es:  COMP - PUNTAJE: ${computerScore} ---------- HUMAN - PUNTAJE: ${humanScore}`);
    }
}

playGame()