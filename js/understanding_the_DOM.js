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

//Now we have to select the div we want the games list to appear in

let showMeTheGames = document.querySelector("#games");

/*Now that we have selected the div, we need to tell it to run the function to then display it onto our page with innerHTML*/

showMeTheGames.innerHTML = showGamesList(games)

let genreValue = document.querySelector("#gamesByGenre").value

//Now we have to run through our array of object so we know what data needs to be displayed

