//Wap in javaScript to check if a number is diviisble by 2 and 3.

const prompt = require("prompt-sync")();

let a = prompt("Enter the number you want to check:")

if (a % 2 == 0 && a % 3 == 0){
    console.log("Divisible by both 2 and 3")
}
else{
    console.log("Not Divisible")
}