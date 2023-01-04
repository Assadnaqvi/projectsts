import inquirer from 'inquirer';
import chalk from "chalk";
let score = 0;
let play = true;
let randomNumber = Math.ceil((Math.random() * 2) + 1);
while (play) {
    const answer = await inquirer
        .prompt([
        {
            name: "userNumber",
            type: "number",
            message: "enter any number from 1 to 3"
        }
    ]);
    const { userNumber } = answer;
    console.log("user Number", userNumber, "computerguess", randomNumber);
    if (userNumber === randomNumber) {
        console.log(chalk.green("yes your answer is correct"));
        console.log(chalk.blue("your score is=", score = 10));
    }
    else {
        console.log("try again");
        play = false;
    }
}
