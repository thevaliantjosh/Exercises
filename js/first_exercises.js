"use strict"
console.log("This is the First Exercises .js");

function sayHello() {
    return "Hello, World!";
}

console.log(sayHello());

let preparationMinutesPerLayer = 2;
const expectedMinutesInOven = 40;


let numberOfLayers = [3, 4, 5, 6, 7];


function remainingMinutesInOven(actualMinutesInOven) {
    return expectedMinutesInOven - actualMinutesInOven;
}

//Given the Number of Layers, determines the total preparation time.

function preparationTimeInMinutes(array) {
    let nextLasagna = 0;
    for(let i = 0; i < array.length; i++) {
        nextLasagna = array[i] * preparationMinutesPerLayer;
        console.log(`${array[i]} layers takes ${nextLasagna} minutes to prep.`);
    }
    //return nextLasagna;
}

preparationTimeInMinutes(numberOfLayers);

console.log("-------------------");

function actualMinutesInOven(array) {
    let bakingTime = 0
    for(let i = 0; i < array.length; i++) {
        bakingTime = (array[i] * 5 ) + expectedMinutesInOven;
        console.log(`${array[i]} layers takes ${bakingTime} minutes to cook. `)
    }
}

actualMinutesInOven(numberOfLayers);

/*Calculate the total working time. That is, the time to prepare all the layers of lasagna */
// let prepTime = preparationTimeInMinutes()
// function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
//
// }