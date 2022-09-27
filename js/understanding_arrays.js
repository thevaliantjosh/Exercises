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

let listOfArtists = ["Alphonso Mucha", "Chiara Bautista", "Claude Monet", "Sandra Botticelli", "Andy Warhol", "Jill McVarish", "Vincent Van Gough", "Paul Klee", "Williams Blake", "Egon Schiele", "Salvador Dali", "Paul Cezanne", "Diego Rivera", "Pablo Picasso"]


//Declaring an empty array
let arrayOfBalloons = [];

//adding value to the empty array by calling the index and setting the value
arrayOfBalloons[0] = "yellow balloon";
arrayOfBalloons[1] = "red balloon";
arrayOfBalloons[2] = "blue balloon";
arrayOfBalloons[3] = "pink balloon";
// console.log(arrayOfBalloons);


// console.log(arrayOfBalloons.join(" "));


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
// console.log(giveMeTheTotal(5));

//Now we will practice finding the index and values of given elements in an array

// function whereIsThatArtist(name) {
//     for (let i = 0; i < listOfArtists.length; i++) {
//         console.log(listOfArtists[i]);
//     }
//
// }


let whereIsVincent = listOfArtists.indexOf("Vincent Van Gough");
let whereIsPablo = listOfArtists.indexOf("Pablo Picasso");
document.write(`Vincent has an index of: ${whereIsVincent}\<br>`)
document.write(`Pablo Picasso has an index of: ${whereIsPablo}\<br>`)

let time = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function traversingThroughTime(array) {
    for (let i = 0; i < array.length -1; i++){
        return array[i];
    }
}
console.log(traversingThroughTime(time));

/*I want to iterate through the time array, and display "Good Morning" if the
* value is < 12
* if the value is > 12 display: "Good Afternoon"
*
*
* */

let whatToSay = (time < 12 ? "Good Morning" : "Good Afternoon")

//Function that checks for negative

function isNegative(num){
    return num > 0;
}

//Function that will be equal to 10

function isTen(number){
    return number === 10;
}

//Double the number

function double(number){
    return number * 2;
}

//Function that will remove all a certain number in an array

function removeTheNumber(array, value) {
    return array.filter(number => number !== value)
}

// console.log(removeTheNumber([1, 9, 9, 10], 9));
// console.log(removeTheNumber([1, 3, 5, 8, 8, 8, 8], 8))

//Function that will return the average of numbers in an array

function average(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i]/array.length
    }
    return total;
}

console.log(average(time));

//Function that will count the odds

function countTheOdds(array) {
    let counter = 0;
    array.forEach(number=> {
        if(number % 2 !== 0)counter++
    });
    return counter;
}

console.log(countTheOdds(time));

//Function that will accept an array of objects and returns the average of a property

const peopleWithSales = [
    {
        name: "James",
        sales: 150
    },
    {
        name: "Jordan",
        sales: 100
    },
    {
        name: "Justin",
        sales: 150
    }
]

function averageOfProperty(arrayOfObjects){
    let sales = [];
    arrayOfObjects.forEach(object => sales.push(object.sales));
    return average(sales);
}

console.log(averageOfProperty(peopleWithSales))

//Count all the vowels in a string

let ourString = "The quick brown fox jumped over the lazy dog"

function countVowels(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    [...string].forEach(letter => {
        if (vowels.includes(letter)) counter++;
    })
    return counter;
}



console.log(countVowels(ourString));


//function that will analyze a word and return an object with #of Letters #of vowels and the word

function analyzeWord(word){
    return {
        word: word,
        numberOfLetters: word.length,
        numberOfVowels: countVowels(word)
    }
}

console.log(analyzeWord(ourString));

//Capitalize a name

function capitalizeName(name) {
    const words = name.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}

console.log(capitalizeName("harry potter"));
