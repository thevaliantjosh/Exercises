"use strict"
// alert("Welcome to Understanding the DOM");

/*This will output all the child nodes in the section element*/
let myNodeList = document.body.childNodes[1].childNodes;
    for (let i = 0; i < myNodeList.length; i++) {
        document.write(myNodeList[i] + " <br>");
    }

function boldFirstAndLastNav() {
        document.body.childNodes[1].firstChild.style.fontWeight = "bold";
        document.body.childNodes[1].lastChild.style.fontWeight = "bold";
}
    boldFirstAndLastNav();