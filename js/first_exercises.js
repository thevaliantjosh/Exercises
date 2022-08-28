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

function give(input) {
    return input;
}

let apple = give("apple");
let banana = give("banana");
let orange = give("orange");

function giveFruit() {
    return `Here is an ${apple}, a ${banana}, and an ${orange}`
}

console.log(giveFruit());

function moreFruit() {
    return `Here is some more fruit: ${give("pineapple")}, ${give("mango")}, and a ${give("kiwi")}`;
}

console.log(moreFruit());


// Loop through the array and verify which digit is a repDigit(i.e. 22, 33)
let someDigits = [11, 33, 22, 42, 23, 41, 44];

// function repDigit(array) {
//     let numberToString = array.toString();
//     for(let i = 0; i < array.length; i++) {
//         numberToString = array[i];
//         //console.log(numberToString);
//         if(numberToString[i] === numberToString.charAt(numberToString[i])) {
//             return `${numberToString[i]} is a repDigit!`
//         }
//         else {
//             return `This digit: ${numberToString[i]} is not!`
//         }
//     }
// }
//
// console.log(repDigit(someDigits));

//Arrays

let languages = ["C", "C++", "Java"];
let primes = [2, 3, 5, 7, 11];
let emptyArray = [];
let a = "Douglas";
let b = 12;
let c = true;
let someValues = [ a, b, c ];

console.log(someValues);

function toArray(input1, input2) {
    return [input1, input2];
}

console.log(toArray("Argument #1", "Argument #2"));

c = languages[0];
let cPlusPlus = languages[1]
console.log(cPlusPlus);
let java = languages[2];
console.log(java);
console.log(languages);

function getFirstElement(array) {
    return array[0];
}

console.log(getFirstElement(languages));

//You add elements into an array by index.

let pokemon = [];
pokemon[0] = "Pikachu";
pokemon[5] = "Charmander";
pokemon[1] = "Bulbasaur";
pokemon[2] = "Squirtle";
pokemon[3] = "Zapidos";
pokemon[4] = "Gyarados";
console.log(pokemon)

//Function that will take an array and a variable, and returns the variable as the first element in the array, and the array returned.



function setFirstElement(array, d) {
    array.shift();
    array.unshift(d);
        return array;
}

// console.log(setFirstElement(["Hello", "World"], "Wussup,"));
// console.log(setFirstElement([], 1));
// console.log(setFirstElement([1, 2], 3))
// console.log(setFirstElement([1, 2, 3], 4));

let oblivionWeapons = [];
let lengthOfOblivionWeapons = oblivionWeapons.length;
console.log(`Length of Array oblivionWeapons is Now: ${lengthOfOblivionWeapons}`);
oblivionWeapons[0] = "Iron Sword";
lengthOfOblivionWeapons = oblivionWeapons.length;
console.log(`Length of Array oblivionWeapons is Now: ${lengthOfOblivionWeapons}`);
oblivionWeapons[1] = "Steel Mace";
lengthOfOblivionWeapons = oblivionWeapons.length;
console.log(`Length of Array oblivionWeapons is Now: ${lengthOfOblivionWeapons}`);
oblivionWeapons.push("Steel Sword", "The Sword of Woe", "The Dagger of Doom");
lengthOfOblivionWeapons = oblivionWeapons.length;
console.log(`Length of Array oblivionWeapons is Now: ${lengthOfOblivionWeapons}`);

function getLastElement(array) {
    return array[array.length -1];
}

console.log(getLastElement(oblivionWeapons));
oblivionWeapons.reverse();
console.log(oblivionWeapons);
oblivionWeapons.sort();
console.log(oblivionWeapons);
let firstOblivionWeapons = oblivionWeapons.shift();
console.log(oblivionWeapons);
console.log(firstOblivionWeapons);
oblivionWeapons.push(firstOblivionWeapons);
console.log(oblivionWeapons);

function ifYouAintFirstYourLast(array) {
    let first = array.shift();
    array.push(first);
    return array;
}
console.log(ifYouAintFirstYourLast(oblivionWeapons));
