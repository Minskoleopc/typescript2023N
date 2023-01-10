"use strict";
let chinmay = {
    firstName: "chinmay",
    lastName: "deshpande"
};
let amol = {
    firstName: "amol",
    lastName: "rao"
};
let sarika = {
    firstName: "sarika",
    lastName: "pansare"
};
let Audi = {
    modelNumber: 123,
    color: "red",
    type: "qwerty"
};
let s = {
    firstName: "mayuri",
    lastName: "rao"
};
// Unions
function printAddress(code) {
    console.log(`My addres is ${code}`);
    console.log(code);
}
printAddress(12);
printAddress('12');
let account;
account = "current";
// functions 
function getName() {
    console.log("Chinmay Deshpande");
}
getName();
function givString() {
    return "hello";
}
givString();
function canDriveA() {
    return true;
}
canDriveA();
