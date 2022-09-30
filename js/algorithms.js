"use strict"
// alert("Welcome to Algorithms");


//Syntax for methods:

//Do not use arrow function in methods, they do not work
const Test = {
    name: "Joshua",
    oldSyntax: function (){
        console.log("This works");

    },
    outputName: ()=>{
        console.log(this.name);
    },
    output(){
        console.log("Does this work?");
    }
}

Test.oldSyntax();
Test.output();
Test.outputName();/*Arrow functions will not allow for a this binding (it retains the  value of the enclosing lexical context method*/

//Learning the for...of

let listItems = document.getElementsByTagName("li");

// listItems.forEach(listItem => console.log(listItem));//Cant use forEach to loop over a node list

for (let listItem of listItems){
    console.log(listItem);
}

console.log(document.getElementsByTagName("ul")[0]);

document.getElementsByTagName("li")[2].nextElementSibling.innerHTML = "Change anything, the DOM belongs to you!";


function displayAlert(){
    alert("This function was executed through the event listener function")
}

//Using a callback function

let ourButton = document.getElementById("alert");

ourButton.addEventListener("click", displayAlert)

// let theNumber = Number(prompt("Pick a number"));
// $("#yourNumber").html(`Your number is the square root of ${theNumber * theNumber}`)

let usersNumber = Number(prompt("Pick a Number"));

if (!Number.isNaN(usersNumber)){
    $("#yourNumber").html(`Your number is the square root of ${usersNumber * usersNumber}`)
} else {
    $("#yourNumber").html(`${usersNumber.value} is Not a number`)
}

function timesTwoPlusCounter(){
    let result = 1;
    let counter = 0;
    while (counter < 10) {
        result = result * 2;
        counter++
    }
    return `At ${counter}, The result is: ${result}`
}

console.log(timesTwoPlusCounter())