// import inquirer from "inquirer"
// interface anstype{
// userid : string;
// usepin: boolean;
// useraccountnumber: string;
// trasanstiontype: string;
// amount: string;
// balance: number;
// }
// const answer: anstype = await inquirer.prompt([
// {
//     types: "input",
//     name:"userid",
//     message:"kindly enter your id",
// },
// {
//     types: "input",
//     name:"userpin",
//     message:"kindly enter your pin",
// },
// {
//     types: "list",
//     name:"account name",
//     choices:["current","saving"],
//     message:"Select your account status",
// },
// {
//     types: "list",
//     name:"transaction",
//     choices:["fast cash","withdrwal"],
//     message:"Select your tarnastion",
//     when(answers){
//         return answers.accounttype
//     }
// },
// {
//     type:"list",
//     name : "amount",
//     choices: [500,1000,5000,10000,20000,30000],
//     message:"select your transaction",
//     when(answer){
//         return answer.transactionType == "Fast Cash"
//     }
// },
// {
//     type:"number",
//     name : "amount",
//     message:"Enter Your Amount",
//     when(answers){
//         return answers.transactionType == "withDrawl"
//     }
// }
// ])
// if (answer.userid && answer.usepin) {
//     const balance = Math.floor(Math.random() * 10000000);
//     console.log(balance);
//     const EnteredAmount = parseInt(answer.amount, 10); // Convert string to number
//     if (!isNaN(EnteredAmount)) {
//       if (balance >= EnteredAmount) {
//         const remaining = balance - EnteredAmount;
//         console.log("Your remaining amount is ", remaining);
//       } else {
//         console.log("Your Balance is insufficient");
//       }
//     } else {
//       console.log("Invalid amount entered");
//     }
//   }
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userid",
        message: "Kindly enter your id",
    },
    {
        type: "input",
        name: "userpin",
        message: "Kindly enter your pin",
    },
    {
        type: "list",
        name: "accounttype",
        choices: ["current", "saving"],
        message: "Select your account status",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast cash", "withdrawal"],
        message: "Select your transaction",
        when(answers) {
            return answers.accounttype;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [500, 1000, 5000, 10000, 20000, 30000],
        message: "Select your transaction",
        when(answer) {
            return answer.transactionType === "fast cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount",
        when(answers) {
            return answers.transactionType === "withdrawal";
        },
    },
]);
if (answer.userid && answer.userpin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log("Balance:", balance);
    const enteredAmount = parseInt(answer.amount.toString(), 10); // Convert string to number
    if (!isNaN(enteredAmount)) {
        if (balance >= enteredAmount) {
            const remaining = balance - enteredAmount;
            console.log("Your remaining amount is", remaining);
        }
        else {
            console.log("Your Balance is insufficient");
        }
    }
    else {
        console.log("Invalid amount entered");
    }
}
