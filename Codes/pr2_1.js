//Use logical operators to find whether the age of a person lies between 10 and 20

const prompt = require("prompt-sync")();

let age = prompt("Enter your age:")

if(age>10 && age<20){
    console.log("Your age is between 10 to 20.")
}
else{
    console.log("Age doesn't lies between 10 or 20")
}
