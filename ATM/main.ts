import inquirer from 'inquirer';

interface ansType {
    userId: string;
    userPin: number;
    accountType: string;
    transactionType: string;
    amount: number;
}

const answers: ansType = await inquirer.prompt([
    {
        type: 'input',
        name: 'userId',
        message: 'Kindly enter your ID',
    },
    {
        type: 'input',
        name: 'userPin',
        message: 'Kindly enter your PIN',
    },
    {
        type: 'list',
        name: 'accountType',
        choices: ['Current', 'Saving'],
        message: 'Select your account type',
    },
    {
        type: 'list',
        name: 'transactionType',
        choices: ['Fast Cash', 'Withdraw'],
        message: 'Select your transaction',
        when: (ans) => answers.accountType,
    },
    {
        type: 'list',
        name: 'amount',
        choices: [500, 1000, 5000, 10000, 20000, 30000],
        message: 'Select your transaction amount',
        when: (ans) => answers.transactionType === 'Fast Cash',
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter your amount',
        when: (ans) => answers.transactionType === 'Withdrawl',
    },
]);

if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log('Balance:', balance);

    const enteredAmount = answers.amount;

    if (balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log('Your remaining amount is', remaining);
    } else {
        console.log('Your balance is insufficient');
    }
}
