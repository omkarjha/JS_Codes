//WAP to check if a person can drive or not by user input age with the help of ternary operator

const prompt = require("prompt-sync")();

let age = prompt("Enter the age of driver :")

console.log("The person can",(age>18)?"Drive":"not Drive")