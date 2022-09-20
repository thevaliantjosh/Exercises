"use strict"
// alert("Welcome to Understanding the DOM");

/*This will output all the child nodes in the section element*/
// let myNodeList = document.body.childNodes[1].childNodes;
//     for (let i = 0; i < myNodeList.length; i++) {
//         document.write(myNodeList[i] + " <br>");
//     }
//

    /*Want to hover over a Nav item and Make it change color and grow*/


// let theLinks = document.querySelectorAll("a");
// theLinks.addEventListener = ("mouseover", function transformLinks() {
//     theLinks.querySelectorAll("a");
//     hoverOver.style.fontSize = "3rem";
//     hoverOver.style.color = "green";
// }

const games = [
    {Name: "Oblivion", Genre: "RPG"},
    {Name: "Morrowind", Genre: "RPG"},
    {Name: "Halo Wars 2", Genre: "Strategy"},
    {Name: "Civilization VI", Genre: "Strategy"},
    {Name: "Halo Infinite", Genre: "First Person Shooters"},
    {Name: "Overwatch", Genre: "First Person Shooters"},
    {Name: "Red Dead Redemption 2", Genre: "Action & Adventure"},
    {Name: "No Man's Sky", Genre: "Action & Adventure"},
    {Name: "Darkest Dungeon", Genre: "Roguelike"},
    {Name: "Hades", Genre: "Roguelike"},
    {Name: "Farming Simulator 22", Genre: "Simulation"},
    {Name: "The Sims 4", Genre: "Simulation"},
    {Name: "Slay the Spire", Genre: "Card & Board"},
    {Name: "Gwent", Genre: "Card & Board"},
];


//Display the games list onto the page

function gamesList(game) {
    let html = '<div class="newGame">';
    html += '<h2>' + game.Name + '</h2>';
    html += '<p>' + game.Genre + '</p>';
    html += '</div>';

    return html;
    // console.log(html);

}

/*Shows the List in ascending order:
* This is also what makes the list actually display to the page
*
* */
function showGamesList(games) {
    let html = "";
    for (let i = 0; i < games.length; i++) {
        html += gamesList(games[i]);
    }
    return html;
}


/*Now we need to filter our list whenever we select from the drop down form*/

// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     // let selectedRoast = roastSelection.value;
//     let filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         } else if (selectedRoast === "all") {
//             filteredCoffees.push(coffee);
//         }
//     });
//     showMeTheCoffee.innerHTML = renderCoffees(filteredCoffees);
// }


function filterGames(e) {
    e.preventDefault();
    let selectedGenre = genreList.value
    let filteredGames = [];
    games.forEach(function(games){
        if(games.Genre.toLowerCase() === selectedGenre.toLowerCase()){
            filteredGames.push(games);
        } else if (selectedGenre === "All") {
            filteredGames.push(games);
        }
    })
    showMeTheGames.innerHTML = showGamesList(filteredGames);
}


//Now we have to select the div we want the games list to appear in

let showMeTheGames = document.querySelector("#games");

/*Now that we have selected the div, we need to tell it to run the function to then display it onto our page with innerHTML*/

showMeTheGames.innerHTML = showGamesList(games)


/*Now we want to make the dropdown list work when different options are selected*/

let genreList = document.getElementById("gamesByGenre");
console.log(genreList);

genreList.addEventListener("change", filterGames);

//Now we have to run through our array of object so we know what data needs to be displayed



/*DOM Manipulation with the Movie Chart*/

//Grabbing the id of Main Heading off the h1 element
let title = document.getElementById("main-heading");
title.style.color = "whitesmoke";
console.log(title);

//Get Element by class name: Returns an array like element of all the children of the class name

let listItem = document.getElementsByClassName("list-item");
console.log(listItem);

//Get Elements by Tag name

let unorderedList = document.querySelector("ul");
//This will create a new list item in the Unordered List
let createNewListItem = document.createElement("li");
//This will add the new list item after the last list item
unorderedList.appendChild(createNewListItem);
//Modifying the Text of the new list item
createNewListItem.innerText = "Avatar";
console.log(unorderedList);


//querySelector

let myFranchiseList = document.querySelector(".movies");
myFranchiseList.style.color = "red"
console.log(myFranchiseList);
