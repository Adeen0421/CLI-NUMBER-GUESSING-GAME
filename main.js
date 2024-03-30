import inquirer from "inquirer";
//  1)Computer will generate a random number
//  2)user input for guessing game
//  3)Compare user input with computer generated number and show result
const randomnuber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "UsedGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10",
    }
]);
if (answers.UsedGuessedNumber === randomnuber) {
    console.log("Congratulation! You guessed a right number");
}
else {
    console.log("you guessed wrong number");
}
;
