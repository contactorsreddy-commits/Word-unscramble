alert("Welcome to the odd or even game");
alert("You will see a number you will have to see if it is even or odd");
function guessnumber() {
    const number = Math.floor(Math.random()* 100);
    alert(number);
    const userguess = prompt("Enter your guess odd or even");
    if(userguess == null) {
        alert("Game ended");
        return;

    }
    var actual = number%2 === 0?"even":"odd";
    console.log("The number is" + number + "it is" + actual);
    if(userguess === actual) {
        alert("Congratulation you guessed it correctly");

    } else {
        alert("Sorry that was incorrect");

    }
    if(confirm("Would you like to play the game again?")) {
        guessnumber();
    }
}
guessnumber();