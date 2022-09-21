"use strict"
console.log("Welcome to Objects Practice!");

const person1 = {
    firstName: "Joffrey",
    lastName: "Baratheon",
    email: "joff@widowswail.com"
}

const person2 = {
    firstName: "Jon",
    lastName: "Snow",
    email: "brooding@thewall.com"
}

const person3 = {
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "tyrion@pourmeanother.com"
}

const person4 = {
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "dragonlady@gmail.com"
}

function getEmail(object) {
    return object.email;
}

console.log(getEmail(person4));

/*Given an object containing both upvotes and downvotes, return what the vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes*/

// const numberOfVotes = {
//     upvotes: [24, 31, 33, 12, 38, 4],
//     downvotes: [13, 14, 1, 40, 43, 11]
// }
//
// function getVoteCount(object) {
//     return numberOfVotes.upvotes - numberOfVotes.downvotes;
// }
//
// getVoteCount(numberOfVotes);

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
        },
    introduceSelf: function() {
    console.log(`Hi! I'm ${this.name[0]}`);
        }
    };

console.log(person);

