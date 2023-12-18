import inquirer from "inquirer";

let todos : string[] = [];  
let loop : boolean = true; 
while(loop){
    const answers:{
        TODO : string,
        addmore : boolean ,
     } = await inquirer.prompt([
        {
            type : "input",
            name : "TODO",
            message: ("what do you want to add in your todo?") //milkshake
        },
        {
            type : "confirm",
            name : "addmore",
            message :("Do You Want to add more todo/things "),
            default : false
        },

    ])
    const {TODO,addmore} = answers;
    console.log(answers);
    loop = addmore;
    if(TODO){
        todos.push(TODO) 
    }
    else{
        console.log("kindly add a valid input ");
    }

}
// console.log(todos);
if (todos.length > 0 ){
    console.log("Your Todos List :")
     todos.forEach(element => {
        console.log(element)
     });
}
else{
    console.warn("todos not found");
}