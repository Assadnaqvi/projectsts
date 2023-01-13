import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        type: "inpaut",
        name: "sentence",
        message: (chalk.yellow("Enter Your senctence to count the word:"))
    }
]);
const word = answer.sentence.trim().split(" ");
console.log(chalk.bold.green(`your words are : ${word}`));
console.log(chalk.bold.blue(`your words length is : ${word.length}`));
