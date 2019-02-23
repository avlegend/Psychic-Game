// Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left.This will update)
// Your Guesses So Far: (the specific letters that the user typed.Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again(without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh(just like when the user wins).





//PSEUDOCODE
// "wins" "losses" start at 0

// "Guesses left" start at 9

// the computer chooses a letter at random between a-z


// User presses a key between a-z

// if user chooses incorrect letter "guesses left" goes down by one

// also incorrect letter show up in "your guesses so far"

// if the "guesses left" is equal to one and the user chooses a non matching letter to the computer
//letter the score for "losses "goes up by one

// "guesses reset" back to 9

// Users letters clears

// if user chooses computer matching letter, score goes up by one

// guesses left restarts back to 9

// and game start over infinitly 

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// add var youGuessesSoFar = key typed by the user when it is incorrect
var yourGuessesSoFar = [];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key is pressed.
    var userGuess = event.key;
// The getElementbyId connects the id from html to new variables
    var computerChoices = document.getElementById("computer-choices");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeft = document.getElementById("guesses-left");

    var yourGuessesSoFar = document.getElementById("guesses-so-far-text");



    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // When the user picks "a" the wins score goes up by 1. else the picked letter shows up in guesses so far
    // This determins the outcome of the game
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9

        //if match is not right then the "guesses left gets subtracted by one"
    } else {
        guessesLeft--;
    }

    // when guesses equals 0 user loses and losses tally goes up by 1 and guesses restart
    if (guessesLeft === 0) {
        losses++
        guessesLeft = 9;
    }



    // Display the user and computer guesses, and wins/losses.
    winsText.textContent = "wins-text: " + wins;
    lossesText.textContent = "losses-text: " + losses;
    guessesLeft.textContent = "guesses-left: " + guessesLeft;
    yourGuessesSoFar.textContent = "guesses-so-far-text: " + userGuess;



}

