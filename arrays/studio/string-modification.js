const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let first3 = str.slice(0, 3);
console(first3)
//Use a template literal to print the original and modified string in a descriptive phrase.


console.log('${str.slice(3,str.length')


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let input = input.question("How many letters will move from the beginning of the string to the end? ")

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (input <= str.length){
    console.log('We changed LaunchCode ${str} to ${str.slice(input, str.length).concat(newStr2)}')
}