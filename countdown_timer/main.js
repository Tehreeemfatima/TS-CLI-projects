// import inquirer from 'inquirer';
// async function getUserInput() {
//     const userInput = await inquirer.prompt({
//         type: 'number',
//         name: 'value',
//         message: 'Enter timer duration in seconds (1-60):',
//         validate: (input) => (isNaN(input) ? 'Please enter a valid number' : input <= 60 ? true : 'Please enter seconds between 1 and 60'),
//     });
//     return userInput.value;
// }
// function startTimer(duration: number) {
//     const startTime = new Date().getTime();
//     const endTime = startTime + duration * 1000;
//     const timerInterval = setInterval(() => {
//         const currentTime = new Date().getTime();
//         const timeDifference = Math.max(0, Math.floor((endTime - currentTime) / 1000));
//         if (timeDifference === 0) {
//             console.log('Timer has expired');
//             clearInterval(timerInterval);
//             process.exit();
//         }
//         const minutes = Math.floor(timeDifference / 60);
//         const seconds = timeDifference % 60;
//         console.log(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
//     }, 1000);
// }
// async function main() {
//     const timerDuration = await getUserInput();
//     startTimer(timerDuration);
// }
// main();
import inquirer from 'inquirer';
async function getUserInput() {
    const userInput = await inquirer.prompt({
        type: 'number',
        name: 'value',
        message: 'Enter countdown duration in seconds:',
        validate: (input) => (isNaN(input) ? 'Please enter a valid number' : input >= 0 ? true : 'Please enter a non-negative number'),
    });
    return userInput.value;
}
function startCountdown(duration) {
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
async function main() {
    const countdownDuration = await getUserInput();
    startCountdown(countdownDuration);
}
main();
