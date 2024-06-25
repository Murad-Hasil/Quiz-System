#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan("\t\t", "=".repeat(50)));
console.log(chalk.blue.bold("\t\n\t\t\t\tQuiz System Project\n\t"));
console.log(chalk.cyan("\t\t", "=".repeat(50)));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.bold.yellow("Q1: What is the correct way to check if two values are not equal in TypeScript?"),
        choices: ["a == b", "a === b", "a = b", "a !== b"],
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.bold.yellow("Q2: Which of the following characters is commonly allowed in variable names in Typescript?"),
        choices: ["$", "@", "#", "&"],
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.bold.yellow("Q3: Which operator is commonly used for string concatenation in Typescript?"),
        choices: ["+", "-", "*", "/"],
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.bold.yellow("Q4: In Typescript, which symbol is commonly used to terminate a statement?"),
        choices: [".", ":", ";", ","],
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.bold.yellow("Q5: Which method of Inquirer.js is used to start the prompt interface and receive user input?"),
        choices: ["start()", "prompt()", "init()", "run()"],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log(chalk.bold.bgCyan("1: Correct answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1: Incorrect answer"));
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.bold.bgCyan("2: Correct answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("2: Incorrect answer"));
}
switch (quiz.question_3) {
    case "+":
        console.log(chalk.bold.bgCyan("3: Correct answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("3: Incorrect answer"));
}
switch (quiz.question_4) {
    case ";":
        console.log(chalk.bold.bgCyan("4: Correct answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("4: Incorrect answer"));
}
switch (quiz.question_5) {
    case "prompt()":
        console.log(chalk.bold.bgCyan("5: Correct answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("5: Incorrect answer"));
}
console.log(chalk.bold.yellow(`Score: ${chalk.bold.red(score)}`));
