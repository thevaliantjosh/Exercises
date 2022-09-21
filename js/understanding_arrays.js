"use strict"

/*Arrays are ways to store groups of related data inside a single variable. With Arrays, you can create lists containing any mix of string value,
 numbers, Boolean values, objects, functions
* And any other type of data and even other arrays!
1) The individual value of the array is called an array element
2) */

$(function(){
    $(".addArray")
});


let listOfArtists = ["Alphonso Mucha", "Chiara Bautista", "Claude Monet", "Sandra Botticelli", "Andy Warhol", "Jill McVarish", "Vincdnt Van Gough", "Paul Klee", "Williams Blake", "Egon Schiele", "Salvador Dali", "Paul Cezanne", "Diego Rivera", "Pablo Picasso"]

//Declaring an empty array
let arrayOfBalloons = [];

//adding value to the empty array by calling the index and setting the value
arrayOfBalloons[0] = "yellow balloon";
arrayOfBalloons[1] = "red balloon";
arrayOfBalloons[2] = "blue balloon";
arrayOfBalloons[3] = "pink balloon";
console.log(arrayOfBalloons);


