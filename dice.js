Function playDiceGuessGame() {
    alert("Welcome to the dice guess game!");
    alert("A dice will be rolled and you have to guess a number between (1 and 6)!".);
    const rollDice = () => Math.floor(Math.random() * 6 + 1);
    const diceNumber = rollDice();
    const userguess = promt("Enter a guess (a number between 1 and 6):");

    if(userguess === null) {
        alert("Game Ended");
        return;
    }
    const guess = parseInt(userguess);
    if (!guess || guess < 1 || guess > 6) {
        console.log("Invalid input, Please try entering a number between 1 and 6.")
        guessDiceNumber();
        return;

    }
    else {
        alert("The dice rolled: " + diceNumber);
        if (confirm("Would You like to play again?")) {
            playDiceGuessGame();
        }

    }
    
}


playDiceGuessGame();