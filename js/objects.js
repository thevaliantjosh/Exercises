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

console.log(person.introduceSelf());

console.log(`${person1.firstName} ${person1.lastName}'s email is: ${person1.email}`)

console.log(`${person2.firstName} ${person2.lastName}'s email is: ${person2.email}`)

console.log(`${person3.firstName} ${person3.lastName}'s email is: ${person3.email}`)

console.log(`${person4.firstName} ${person4.lastName}'s email is: ${person4.email}`)



/*Variables with the const and let keyword are block-scoped. A block is anything between curly brackets ({}). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of hte block it's declared in, a Reference Erro gets thrown.*/

// function checkAge(age) {
//     if (age < 18 ) {
//         const message = "Sorry, you're too young.";
//     } else {
//         const message = "Yay! You're old enough!";
//     }
//     return message;
// }
//
// console.log(checkAge(21));//This results in a ReferenceError

function checkAge(age) {
    const tooYoung = "Sorry, you're too young";
    const drinkingAge = "Your old enough to drink!"
    if (age < 21 ) {
        return tooYoung;
    } else {
        return drinkingAge;
    }
}



console.log(checkAge(18));
console.log(checkAge(21));