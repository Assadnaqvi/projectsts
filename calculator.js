import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Lets start calculation");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function askQuestion() {
    const answer = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "which operation Would you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remainder", "Power"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number2:"
        }
    ]);
    if (answer.operator == "Addition") {
        console.log(`${answer.num1}+${answer.num2}=${answer.num1 + answer.num2}`);
    }
    else if (answer.operator == "Subraction") {
        console.log(`${answer.num1}-${answer.num2}=${answer.num1 - answer.num2}`);
    }
    else if (answer.operator == "Multiplication") {
        console.log(`${answer.num1}*${answer.num2}=${answer.num1 * answer.num2}`);
    }
    else if (answer.operator == "Division") {
        console.log(`${answer.num1}/${answer.num2}=${answer.num1 / answer.num2}`);
    }
    else if (answer.operator == "Remainder") {
        console.log(`${answer.num1}%${answer.num2}=${answer.num1 % answer.num2}`);
    }
    else if (answer.operator == "Power") {
        console.log(`${answer.num1}^${answer.num2}=${answer.num1 ^ answer.num2}`);
    }
}
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({ type: "input",
            name: "restart",
            message: "would you like to perform again:"
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
