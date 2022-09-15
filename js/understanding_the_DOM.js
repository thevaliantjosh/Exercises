"use strict"
// alert("Welcome to Understanding the DOM");

/*This will output all the child nodes in the secion element*/
let myNodeList = document.body.childNodes[1].childNodes;
    for (let i = 0; i < myNodeList.length; i++) {
        document.write(myNodeList[i] + " <br>");
    }

