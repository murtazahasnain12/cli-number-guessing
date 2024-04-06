#! /usr/bin/env node
import inquirer from "inquirer";
//  1) Computer will generate a random number - Done
//  2) User input for guessing number - Done
//  3) Compare user input with computer generated number and show result - Done
// const randomNumber = Math.random();
// console.log(randomNumber);
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log(" Congratulation! You Guessed Right number. ");
}
else {
    console.log(" You Guessed Wrong Number ");
}
