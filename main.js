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

const btnPiedra = document.querySelector('.piedra')
const btnPapel = document.querySelector('.papel')
const btnTijeras = document.querySelector('.tijeras')
const winner = document.querySelector('.winner')
const scores = document.querySelector('.scores')


let humanScore = 0;
let computerScore = 0;
let gameOver = false;
let select;


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


const playRound = (humanChoice, computerChoice) => {

    if (gameOver) return;

    const humanPlay = humanChoice.toLowerCase();

    const humanGana =
        (humanPlay === 'piedra' && computerChoice === 'tijeras') ||
        (humanPlay === 'papel' && computerChoice === 'piedra') ||
        (humanPlay === 'tijeras' && computerChoice === 'papel');

    if (humanPlay === computerChoice) {
        winner.textContent = `¡Empate! Ambos eligieron ${humanPlay}`;

    } else if (humanGana) {
        humanScore++;
        winner.textContent = `¡Ganaste! ${humanPlay} vence a ${computerChoice}`;

    } else {
        computerScore++;
        winner.textContent = `¡Pierdes! ${computerChoice} vence a ${humanPlay}`;
    }

    scores.textContent = `Marcador:  Human - ${humanScore} - ${computerScore} - Comp`

    if (humanScore === 5) {
        winner.textContent = `El Ganador es: ${'Human'}`
        winner.style.color = 'green'
        gameOver = true
    }

    if (computerScore === 5) {
        winner.textContent = `El Ganador es: ${'Comp'}`;
        winner.style.color = 'green'
        gameOver = true
    }
};


const playerSelection = (select) => {
    if (select === 'piedra') return 'piedra'
    if (select === 'papel') return 'papel'
    if (select === 'tijeras') return 'tijeras'
}

btnPiedra.addEventListener('click', () => {
    select = "piedra"
    playRound(playerSelection(select), getComputerChoice())
})

btnPapel.addEventListener('click', () => {
    select = "papel"
    playRound(playerSelection(select), getComputerChoice())
})

btnTijeras.addEventListener('click', () => {
    select = "tijeras"
    playRound(playerSelection(select), getComputerChoice())
})