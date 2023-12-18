import inquirer from "inquirer";

// Sample static quiz data (replace this with your own questions)
const quizData = [
    {
        question: "name of Pakistan capital?",
        correct_answer: "Islamabad",
        incorrect_answers: ["Rawalpindi", "Lahore", "Multan"]
    },
    {
        question: "Which city of pakistan is called the city of lights?",
        correct_answer: "karachi",
        incorrect_answers: ["Rawalpindi", "Multan", "lahore"]
    },
    // Add more questions as needed
];

let startQuiz = async () => {
    let score = 0;
    let user = await inquirer.prompt({
        type: 'input',
        name: "name",
        message: "Enter your name"
    });

    for (let i = 0; i < quizData.length; i++) {
        let options = [...quizData[i].incorrect_answers, quizData[i].correct_answer];

        let userInput = await inquirer.prompt({
            name: "value",
            type: "list",
            choices: options.map(val => val),
            message: quizData[i].question
        });

        if (userInput.value == quizData[i].correct_answer) {
            score++;
            console.log("Correct answer");
        } else {
            console.log("Incorrect answer");
            console.log(`Correct answer is  ${quizData[i].correct_answer}`);
        }
    }

    if (score < 3) {
        console.log(`Hi ${user.name}, your score is: ${score}`);
        console.log(`Percentage: ${score *50} %`);
        console.log("passed");
    } else {
        console.log(`Hi ${user.name}, your correct answers are ${score} out of ${quizData.length}`);
        console.log(`Percentage: ${score * 20} %`);
        console.log("Failed");
    }
};

startQuiz();


