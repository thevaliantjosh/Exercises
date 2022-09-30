"use strict"
console.log("Welcome to the array Filter Method");

$(function (){
    $.ajax("https://swapi.dev/api/people").done(function(data){
        console.log(data);
       data.results.forEach(function(character){
           console.log(character)

       })
    }
)
});//End of