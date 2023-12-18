import inquirer from 'inquirer';

class Student {
    constructor(public name: string) {}
}

class Person {
    students: Student[] = [];

    addStudent(student: Student) {
        this.students.push(student);
    }
}

const person = new Person();

const greetSelf = () => {
    console.log('I am talking with myself');
    console.log('I am fine');
};

const greetStudent = async (person: Person, studentName: string) => {
    const formattedName = studentName.trim().toLowerCase();
    const existingStudent = person.students.find((student) => student.name.toLowerCase() === formattedName);

    if (!existingStudent) {
        const newStudent = new Student(studentName);
        person.addStudent(newStudent);
        console.log(`Hello, my name is ${newStudent.name}. I am fine!`);
    } else {
        console.log(`Hello, my name is ${existingStudent.name}. I need your help!`);
    }
};

const startProgram = async (person: Person) => {
    console.log('Welcome');

    do {
        const userInput = await inquirer.prompt({
            type: 'list',
            name: 'selection',
            choices: ['Self', 'Student', 'Exit'],
            message: 'Whom would you like to talk with?',
        });

        switch (userInput.selection) {
            case 'Self':
                greetSelf();
                break;

            case 'Student':
                const input = await inquirer.prompt({
                    name: 'student',
                    type: 'input',
                    message: 'Enter student name',
                });
                await greetStudent(person, input.student);
                break;

            case 'Exit':
                console.log('Goodbye!');
                return; // Exit the loop and end the program
        }
    } while (true);
};

startProgram(person);
