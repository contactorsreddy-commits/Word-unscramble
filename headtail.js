alert("Welcome to the coin toss game");
function cointoss() {
    const outcomes = ["heads", "tails"];
    const result = outcomes[Math.floor(Math.random()* outcomes.length)];
    const userguess = prompt("Enter your guess heads or tails-");
    if (userguess==null) {
         alert("game ends");
        return;
    }
         if(userguess === "heads"||userguess === "tails") {
            alert("the coin on " + result);
            if(userguess === result) {
                alert("Congratulation you guessed correctly");

            } else {
                alert("Sorry that was incorrect try again");
            }
         } else {
            alert("please enter exactly heads or tails");
         }
         if(confirm("Would you like to play again?")) {
            cointoss();
         }

}
cointoss();