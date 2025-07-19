"use strict";
// sample.ts
console.log("Hello, TypeScript!");
const rose = {
    name: "rose",
    age: 28,
    color: "red",
};
// 3-6 Array型とTuple型
let songs; // これはArray型
songs = ["Want You", "All the way"];
let roseColor = ["rose", "red"];
let shion = {
    groupName: "meteorite",
    personName: "shion",
    personColor: "purple",
};
// 3-11 関数と型
function addNumbers(a, b) {
    return a + b;
}
function printMessage(message) {
    if (message) {
        console.log(message);
    }
    else {
        console.log("No message provided.");
    }
}
printMessage("Hello World!");
printMessage();
