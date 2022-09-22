"use strict"

/*Arrays are ways to store groups of related data inside a single variable. With Arrays, you can create lists containing any mix of string value,
 numbers, Boolean values, objects, functions
* And any other type of data and even other arrays!
1) The individual value of the array is called an array element
2) */

$(function(){
//Displaying an Array to the page using jQuery
    $.each(listOfArtists, function(index, value) {
        $("#addArray").append("<li>" + (index +1)+ ": " + value + "</li>")
    });
});

let listOfArtists = ["Alphonso Mucha", "Chiara Bautista", "Claude Monet", "Sandra Botticelli", "Andy Warhol", "Jill McVarish", "Vincdnt Van Gough", "Paul Klee", "Williams Blake", "Egon Schiele", "Salvador Dali", "Paul Cezanne", "Diego Rivera", "Pablo Picasso"]


//Declaring an empty array
let arrayOfBalloons = [];

//adding value to the empty array by calling the index and setting the value
arrayOfBalloons[0] = "yellow balloon";
arrayOfBalloons[1] = "red balloon";
arrayOfBalloons[2] = "blue balloon";
arrayOfBalloons[3] = "pink balloon";
// console.log(arrayOfBalloons);


console.log(arrayOfBalloons.join(" "));


//using a for loop to loop through the array with Javascript
//Lets simply count from 0 to 15


//using a while loop do count to 15
// let i = 0;
//
// while (i <= 15) {
//     console.log(i);
//     i++
// }

//1) You need an initializer for (let i = 0;
//2) Condition for when the loop should end i < number;
//3) Last you need an incrementer i++)


//This function will give you an array up to the point of the argument
function showMeTheNumbers(number) {
    let newNumberArray = []
    for (let i = 0; i <= number; i++) {
        newNumberArray.push(i);
    }
    return newNumberArray;
}
// console.log(showMeTheNumbers(15));


/*This will take the array given in showMeTheNumbers function and
* return the numbers sequentially in an array within an array, and also the total of that array */
function giveMeTheTotal(number) {
    let total = 0;
    let numbersArray = showMeTheNumbers(number);
    for (let i = 0; i < numbersArray.length; i++){
        total += numbersArray[i]

        // console.log(total);
    }
    return [numbersArray, total];
}
console.log(giveMeTheTotal(5));

//Now we will practice finding the index and values of given elements in an array

function whereIsThatArtist(name) {
    for (let i = 0; i < listOfArtists.length; i++) {
        console.log(listOfArtists[i]);
    }

}