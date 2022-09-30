"use strict"
console.log("Welcome to the array Filter Method");



$(function (){
    let output = "";
    $.ajax("https://swapi.dev/api/people").done(function(data){
        console.log(data);
        const massAbove100 = data.results.filter(char => char.mass > 100);
        console.log(massAbove100);

        massAbove100.forEach(({name, mass }, index) => {
            output += `<li>${index + 1}: ${name} has a mass of: ${mass}</li>`
            $("#mass100").html(output)
        });//End of the ForEach loop which is an Array of Objects with Characters mass above 100.


        data.results.forEach(function(character){
           console.log(character);
           console.log(character.mass)

       });//End of Character data forEach
    });//End of Ajax.done
});//End of document.ready