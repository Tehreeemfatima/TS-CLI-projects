import inquirer from 'inquirer';

class Player {
    fuel: number = 100;
    constructor(public name: string) {}
}

class Opponent extends Player {}

let player = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'Enter your name',
});

let opponent = await inquirer.prompt({
    name: 'name',
    type: 'list',
    choices: ['devil', 'demoness.', 'witch', 'ghost'],
    message: 'Select your opponent',
});

let player1 = new Player(player.name);
let opponent1 = new Opponent(opponent.name);
console.log(`${player.name} VS ${opponent.name}`);

do {
    let ask = await inquirer.prompt({
        name: 'option',
        type: 'list',
        choices: ['Attack', 'Drink Portion', 'Run for your life'],
        message: 'Select',
    });

    if (ask.option == 'Attack') {
        let no = Math.floor(Math.random() * 2);
        if (no > 0) {
            player1.fuel -= 25;
            console.log(`${player1.name} fuel is ${player1.fuel}`);
            console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
            if (player1.fuel <= 0) {
                console.log(`You lose ${player1.name}, better luck next time!`);
                break;
            }
        } else {
            opponent1.fuel -= 25;
            console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
            console.log(`${player1.name} fuel is ${player1.fuel}`);
            if (opponent1.fuel <= 0) {
                console.log(`You Win`);
                break;
            }
        }
    } else if (ask.option == 'Drink Portion') {
        player1.fuel = 100;
        console.log(`Now your fuel is ${player1.fuel}`);
    } else if (ask.option == 'Run for your life') {
        console.log(`You lose ${player1.name}, better luck next time!`);
        break;
    }
} while (true);
