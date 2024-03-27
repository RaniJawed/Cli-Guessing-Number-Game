#!/ user/bin/env node
import { log } from "console";
import inquirer from "inquirer"; 
console.log("\n\tWellcome to RaniJawed - Cli Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 +1);

const answers =await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Guess Number{Number Limit from 1 to 5}:",
    },
]);

if (answers.userGuessedNumber=== randomNumber){
    console.log("Congratulation ! You Guess a correct Number.")

}else {
    console.log("sorry,You Guess a Wrong Number");
}