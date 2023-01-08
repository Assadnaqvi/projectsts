import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([{
            type: "input",
            name: "TODO",
            message: "what do you want to add in TODO"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do You want to add more ?",
            default: false
        }
    ]);
    const { TODO, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("your TO Do list is:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("no toods found");
}
