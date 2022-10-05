"use strict"
console.log("Welcome to map, filter, reduce exercises");

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//Using Map, reduce, filter, sort

//Using .filter to find the mass of every object.
//character is a reference to every object in the array of objects
//The character.mass will pull out every single character.mass that is greater than 100
const massGreaterThan100 = characters.filter(character => character.mass > 100);

console.log("Characters with a mass greater than 100");
console.log(massGreaterThan100);

//Filtering characters with height less than 200
const shorterCharacters = characters.filter(character => character.height < 200);

console.log("Shorter Characters with Height less Than 200: ")
console.log(shorterCharacters);

//Filtering out male characters

const maleCharacters = characters.filter(character => character.gender === "male");

console.log("All the male Characters");
console.log(maleCharacters);

//Filtering out Female characters
const femaleCharacters = characters.filter(character => character.gender === "female");

console.log("All the female characters");
console.log(femaleCharacters);

/*=====================USING MAP================================*/

//Map allows us to transform items in an array into a new array
//Result will be another array with the transformed item/items

//Get an array of all the names using map

const allTheNames = characters.map(character => character.name);

console.log("Getting the names of all the characters: ");
console.log(allTheNames);

//Get an array for all the heights

const allTheHeights = characters.map(character => character.height);

console.log("Getting the heights of all the characters: ");
console.log(allTheHeights);

const heightWithName = characters.map(character => ({
    name: character.name,
    height: character.height
}))

console.log("Getting an array of objects with only the name and height: ")
console.log(heightWithName);


//split gives an array split at the first space
//than [0] will pull out the first index of that array
//resulting in an array with all the first names
const firstNameOnly = characters.map(character => character.name.split(" ")[0])

console.log("Getting an array with only the first name: ");
console.log(firstNameOnly);


/*=======================USING REDUCE============================= */

//Calculate the total mass for all characters

const massOfAllCharacters = characters.reduce((total, character) => {
    console.log(total);
    return total + character.mass;
}, 0);

console.log(massOfAllCharacters);

