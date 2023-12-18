// import * as inquirer from "inquirer";
// async function main() {
//   const userInput: {
//     firstNumber: number;
//     secondNumber: number;
//     operator: string;
//   } = await inquirer.prompt([
//     {
//       type: "number",
//       name: "firstNumber",
//       message: "Please Enter First Number",
//     },
//     {
//       type: "number",
//       name: "secondNumber",
//       message: "Please Enter Second Number",
//     },
//     {
//       type: "list",
//       name: "operator",
//       choices: ["+", "-", "/", "*"],
//       message: "Select the operator from the list",
//     },
//   ]);
//   const { firstNumber, secondNumber, operator } = userInput;
//   let result: number = 0;
//   if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
//     switch (operator) {
//       case "+":
//         result = firstNumber + secondNumber;
//         break;
//       case "-":
//         result = firstNumber - secondNumber;
//         break;
//       case "/":
//         result = firstNumber / secondNumber;
//         break;
//       case "*":
//         result = firstNumber * secondNumber;
//         break;
//     }
//     console.log(`The result of your calculation is ${result}`);
//   } else {
//     console.log(`Please type valid numbers`);
//   }
// }
// main();
import inquirer from 'inquirer';
async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'number',
            name: 'firstNumber',
            message: 'Please Enter First Number',
        },
        {
            type: 'number',
            name: 'secondNumber',
            message: 'Please Enter Second Number',
        },
        {
            type: 'list',
            name: 'operator',
            choices: ['+', '-', '/', '*'],
            message: 'Select the operator from the list',
        },
    ]);
    return userInput;
}
async function main() {
    const userInput = await getUserInput();
    // Now you can use userInput for further processing.
    console.log('User Input:', userInput);
}
main();
