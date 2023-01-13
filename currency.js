import inquirer from "inquirer";
import chalk from "chalk";
let conversion = {
    "PKR": {
        "USD": .0044,
        "GBP": .0037,
        "PKR": 1
    }, "GBP": {
        "USD": 1.21,
        "PKR": 277,
        "GBP": 1
    },
    "USD": {
        "PKR": 228.50,
        "GBP": .83,
        "USD": 1
    }
};
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: (chalk.bgRed("select your currency"))
    }, {
        type: "list",
        name: "to",
        choices: ["GBP", "PKR", "USD"],
        message: (chalk.bgHex("select your conversion currency"))
    }, {
        type: "number",
        name: "ammount",
        message: (chalk.green("enter your ammount"))
    }
]);
const { from, to, ammount } = answer;
if (from && to && ammount) {
    let result = conversion[from][to] * ammount;
    console.log(chalk.blue(`Your conversion from : ${from} to : ${to} is = ${result}`));
}
else {
    console.log("invalid input");
}
