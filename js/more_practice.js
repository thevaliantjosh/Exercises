"use strict";
console.log("This is the more practice JS");

let jupiterIsSick = true;

let fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];

let vegetables = ["cabbage", "brussels sprouts", "broccoli", "carrots", "cauliflower"]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Reversing an array

numbers.reverse();
//console.log(numbers);

//Pushing to Fruits and vegetables; Adds to the end of the array.

vegetables.push("tomato");
vegetables.push("cucumber");
//console.log(vegetables);

fruits.push("pineapple");
fruits.push("apple");

//console.log(fruits);

//Sorting Fruits and vegetables to alphabetical order

fruits.sort();
vegetables.sort();
//console.log(fruits)

//Combine two arrays

let fruitsAndVeggies = fruits.concat(vegetables);
//console.log(fruitsAndVeggies);
fruitsAndVeggies.sort();
console.log(fruitsAndVeggies);

//Generate a random number that is Positive and even

function randomNumber() {
    return Math.ceil(Math.random() * 100) + 1;
}

function randomEvenNumber() {
    let randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !==0) {
        return randomEvenNumber();
    }
    return randomNumber;
}

//Generate a random number that is both positive and odd

function randomOddNumber() {
    let randomNumber = Math.ceil(Math.random() * 100) + 10;
    if (randomNumber % 2 === 0) {
        return randomOddNumber();
    }
    return randomNumber;
}

//Function that will say Hello to any name

function sayHello(name) {
    return `Hello, ${name}!`;
}
//console.log(sayHello("Joshua"));

//Function that will add 2 to any number

function addTwo(x) {
    if (!isNumber(x)) {
        return "Please Enter a Number.";
    }
    return x + 2;
}

//Function That will add 1 to any number

function addOne(number) {
    if (!isNumber(number)) {
        return "Please Enter a Number.";
    }
    return number + 1;
}

//Write a Function that return True if a number is Positive

function isPositive(number) {
    if (!isNumber(number)) {
        return "Please Enter a Number."
    }
    return number > 0;
}

//Write a Function that return True if a number is Negative

function isNegative(number) {
    if (!isNumber(number)) {
        return "Please Enter a Number.";
    }
    return number < 0;
}

//Function that returns true if a number is odd

function isOdd(number) {
    if (!isNumber(number)) {
        return "Please Enter a Number.";
    }
    return number % 2 !== 0;
}

/* Given a number Return a String Array as the answer
* If the number is divisible by 3 return "Fizz"
* If the number is divisible by 5 return "Buzz"
* If the number is divisible by both 3 and 5 Return "FizzBuzz"
* if the number is neither divisible by 3 or 5 return the number as a "String"
* */

function fizzBuzz(number) {
    let bucket = [];
    for (let i = 1; i <= number; i++) {
        if([i] % 3 === 0 && [i] % 5 === 0 ) {
            bucket.push("FizzBuzz!")
        } else if ([i] % 5 === 0) {
            bucket.push("Buzz")
        } else if ([i] % 3 === 0) {
                bucket.push("Fizz")
        } else {
            bucket.push(i.toString());
        }

    }
    return bucket;
}

console.log(fizzBuzz(15));

/*"ubuntu" returns "t"
* [1, 2, 3, 4] returns 3
* ["JS", "is", "awesome"] returns "is"
* ["kiwi", "mango", "guava"] returns "mango"
*Find the second to last with a simple string first.
*
*
* */

/*Return empty string if it is an empty string
* Return empty array if it is an empty array
* */

function last(sequence) {
    if(sequence.trim() === "" || sequence === "") {
        return `You have an empty string!: ""${sequence.trim()}`;
    } else if (sequence === []) {
        return `You have an empty array!: ${sequence}`
    } else {
        return sequence[sequence.length-1]
    }
}



function secondToLast(sequence) {
    return sequence[sequence.length - 2];
}

/*console.log(secondToLast("ubuntu"));
// console.log(secondToLast([1, 2, 3, 4]));
// console.log(secondToLast(["JS", "is", "awesome"]));

/*Write a function isPalindrome that will return True if the "string" is the
* same forward as it is backwards (reversed)
* should return false if it is not
* should return "Please enter a "String"" if its not a string
* ie. False, null, infinity, numbers, arrays.
* */

function isPalindrome(input) {
    input = input.toLowerCase();
    let reversed = input.split("").reverse().join("");
    return input === reversed
}


// console.log(isPalindrome(false));
// console.log(isPalindrome(true));
// console.log(isPalindrome(42));
// console.log(isPalindrome(""));
console.log(isPalindrome("Amanda"))
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Civic"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("reviver"));
console.log(isPalindrome("Zelda"));
console.log(isPalindrome("A nut for a jar of tuna"));

/*
* Write a function that will know if a String is more than one word
*
*
*
*
* */

function moreThanOneWord(input) {
    return (input.includes(" "));
}


let shoes = [
    [0, 21],
    [1, 23],
    [1, 21],
    [0, 23]

];


function pairOfShoes(shoes) {
    let firstShoeHasMatch = false;
    let secondShoeHasMatch = false;
    for (let i = 1; i < shoes.length; i++) {
        if (shoes[i][1] === shoes[0][1]) {
            if (shoes[i][0] !== shoes[0][0]){
                firstShoeHasMatch = true;
            }
        }
    }
    return firstShoeHasMatch;
}
