"use strict"
console.log("Welcome to Objects Practice!");

const gameOfThronesCharacters = [
    {
    firstName: "Joffrey",
    lastName: "Baratheon",
    email: "joff@widowswail.com"
},

{
    firstName: "Jon",
    lastName: "Snow",
    email: "brooding@thewall.com"
},

{
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "tyrion@pourmeanother.com"
},

{
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "dragonlady@gmail.com"
}

]

function getEmail(object) {
    return object.email;
}


// console.log(getEmail(gameOfThronesCharacters.email));

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

//Using the Object.keys method

let keys = Object.keys(gameOfThronesCharacters);

console.log(keys);//list the amount of objects in the array by index

//Adding an object to the first position using Array.unshift

let theMountain = {
    firstName: "Gregor",
    lastName: "Clegane",
    email: "gregorTheMountainClegane@houselannister.com",
    strength: 100
}

gameOfThronesCharacters.unshift(theMountain);

// console.log(gameOfThronesCharacters);

//Adding an object to the last position in an array

let brienneOfTarth = {
    firstName: "Brienne",
    lastName: "Tarth",
    email: "BrienneOfTarth@evenfallhall.com",
    strength: 80
}

gameOfThronesCharacters.push(brienneOfTarth);

console.log(gameOfThronesCharacters);

let tyrion = gameOfThronesCharacters.splice(3, 1)


console.log(tyrion);

gameOfThronesCharacters.splice(1, 0, tyrion);

console.log(gameOfThronesCharacters);



// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//         },
//     introduceSelf: function() {
//     console.log(`Hi! I'm ${this.name[0]}`);
//         }
//     };

// console.log(person.introduceSelf());

// console.log(`${person1.firstName} ${person1.lastName}'s email is: ${person1.email}`)
//
// console.log(`${person2.firstName} ${person2.lastName}'s email is: ${person2.email}`)
//
// console.log(`${person3.firstName} ${person3.lastName}'s email is: ${person3.email}`)
//
// console.log(`${person4.firstName} ${person4.lastName}'s email is: ${person4.email}`)



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


//Write a JavaScript progam that will list the properties of an Object
const students = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}

function findProperties(object){
    return {
        name: object.name,
        sclass: object.sclass,
        rollno: object.rollno
    }
}

console.log(findProperties(students));
//Deleting a property form the students object.
delete students.rollno;

console.log(findProperties(students));