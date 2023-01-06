import chalk from "chalk";
import inquirer from "inquirer";
const input = await inquirer
    .prompt([{
        name: "userId",
        type: "string",
        message: (chalk.blue("please Enter your ID:"))
    },
    {
        name: "PIN",
        type: "number",
        message: (chalk.green("please Enter your PIN")),
        when(answer) {
            return answer.userId;
        }
    }, {
        name: "accounttype",
        type: "list",
        choices: ["current account", "saving account"],
        message: (chalk.red("please Enter your accounttype")),
        when(answer) {
            return answer.PIN;
        }
    },
    {
        name: "options",
        type: "list",
        choices: ["fast cash", "blance inquirey", "cash withdrawl"],
        message: (chalk.bgMagenta("please enter your choice ")),
        when(answer) {
            return answer.accounttype;
        }
    },
    {
        name: "fastcash",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
        message: (chalk.gray("chose your ammount")),
        when(answer) {
            return answer.options;
        }
    }
]);
console.log(input.userId, input.PIN, input.accounttype, input.options, input.fastcash);
const balance = Math.floor(Math.random() * 100000);
console.log(chalk.yellow("your balance is:"), balance);
