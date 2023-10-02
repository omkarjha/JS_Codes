//WAP in JS to explore switch case statements

const prompt = require("prompt-sync")();
let a = prompt("Enter what you want:")

switch(a){
    case 'Ball':
        console.log("The ball is white in colour")
        break;
    case 'Bat':
        console.log("The bat is broken")
        break;
    default:
        console.log("Invalid")
}