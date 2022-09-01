"use strict";

//Function to see if something is only a number
function isNumber(value) {
    return !(isNaN(value) || typeof value === "boolean" || value === null);
}