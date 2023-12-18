
import inquirer from 'inquirer';

async function getUserInput(): Promise<number> {
    const userInput = await inquirer.prompt({
        type: 'number',
        name: 'value',
        message: 'Enter countdown duration in seconds:',
        validate: (input) => (isNaN(input) ? 'Please enter a valid number' : input >= 0 ? true : 'Please enter a non-negative number'),
    });

    return userInput.value;
}

function startCountdown(duration: number): void {
    let remainingTime = duration;

    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        console.log(`Time remaining: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);

        remainingTime--;

        if (remainingTime < 0) {
            console.log('Countdown complete!');
            clearInterval(countdownInterval);
            process.exit();
        }
    }, 1000);
}

async function main(): Promise<void> {
    const countdownDuration = await getUserInput();
    startCountdown(countdownDuration);
}

main();

