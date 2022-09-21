"use strict"
// alert("Welcome to the Codeup Exercises");

// /**
// //  * Convert Address to Object
// //  * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
// //  *
// //  * Examples
// //  *
// //  * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
// //  * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
// */

// function convertAddressToObject(number, streetName) {
//     let newObject = {};
//     newObject.streetNumber = number;
//     newObject.streetName = streetName;
//     console.log(newObject);
//
// }
//
// convertAddressToObject(8444, "Street Name");

function addressToObjectWithString(address) {
    let newObject = {}
    let ourNumber = address.substring(0, address.indexOf(" "));
    let ourAddress = address.substring(address.indexOf(" ") + 1);
    newObject.streetNumber = ourNumber;
    newObject.streetName = ourAddress;
    console.log(newObject);
}

addressToObjectWithString("8444 This is my Street");


//IN CLASS EXAMPLE:


function convertAddressToObject(addressString) {
    return {
        streetNumber: addressString.substring(0, addressString.indexOf(" ")),
        streetName:  addressString.substring(addressString.indexOf(" ") + 1)
    }
}

console.log(convertAddressToObject("8646 Sunny Oaks"));

function convertAddressToObject(addressString) {
    let addressArray = addressString.split(" ");
    return {
        streetNumber: addressArray[0],
        streetName: addressArray.slice(1, addressArray.length).join(" ")
    }
}

console.log(convertAddressToObject("8646 Sunny Oaks"));

// /**
//  * Count total pets
//  * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//  *
//  * Examples
//  *
//  * >> totalPets([
//  *       {name: 'Fernando Mendoza', pets: 1},
//  *       {name: 'Douglas Hirsh', pets: 8},
//  *       {name: 'Kenneth Howell', pets: 2}
//  *    ]) ➞ 11
//  */
//

let peopleAndPets = [
        {name: 'Fernando Mendoza', pets: 1},
        {name: 'Douglas Hirsh', pets: 8},
        {name: 'Kenneth Howell', pets: 2}
    ]

//We want the sum of every objects numPets Property
 function totalPets(arrayOfObjects) {
    let total = 0;
     for (let i = 0; i < arrayOfObjects.length; i++) {
         total += arrayOfObjects[i].pets;//don't forget the [i] here!
     }
     return total;
 }

 console.log(totalPets(peopleAndPets));


//Solve it with a forEach!

function totalPets(arrayOfObjects) {
    let total = 0;
    arrayOfObjects.forEach(function(object){
        total += object.pets;
    })
    return total;
}
console.log(`For Each loop Result: ${totalPets(peopleAndPets)}`);


//Solve with .reduce

function totalPets(arrayOfObjects) {
    return arrayOfObjects.reduce(function(acc, currentValue) {
        return acc + currentValue.pets;
    }, 0)
}

console.log(`Using a .reduce result: ${totalPets(peopleAndPets)}`);

// /**
//  * Find the Smallest and Biggest Numbers
//  * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//  *
//  * Examples
//  * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//  * >> minMax([2334454, 5]) ➞ [5, 2334454]
//  * >> minMax([1]) ➞ [1, 1]
//  *
//  * Notes
//  * All test arrays will have at least one element and are valid.
//  */
//

let someNumbers = [1, 5, 10, 40];
// console.log(Math.min(...someNumbers));

function minMax(arrayOfNumbers) {
    let minAndMax = [];
    minAndMax[0] = Math.min(...arrayOfNumbers);
    minAndMax[1] = Math.max(...arrayOfNumbers);
    return minAndMax;
}

console.log(minMax(someNumbers));

minMax(someNumbers).forEach(number => {
    console.log(number);
});




//
// /**
//  * Filter out Strings from an Array
//  * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
//  *
//  * Examples
//  *
//  * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//  * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
//  * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
//  *



//  * Notes
//  * Zero is a non-negative integer.
//  * The given array only has integers and strings.
//  * Numbers in the array should not repeat.
//  * The original order must be maintained.
//  */