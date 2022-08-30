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








