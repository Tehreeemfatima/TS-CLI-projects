// function countWords(text: string): number {
//     // Define the regular expression to match words
//     const regex = /\b\w+\b/g;
//     // Split the text into words using the regular expression
//     const words = text.match(regex);
//     // Return the number of words
//     return words ? words.length : 0;
//   }
import inquirer from "inquirer";
const counter = (text) => {
    let words = text.split(" ").length;
    let characters = text.replace(/\s/g, "").length;
    return `The paragraph has ${words} words and ${characters} characters`;
};
async function startCounter(counter) {
    do {
        let userInput = await inquirer.prompt({
            type: "input",
            message: "Enter a paragraph",
            name: "text"
        });
        console.log(counter(userInput.text));
    } while (true);
}
startCounter(counter);
