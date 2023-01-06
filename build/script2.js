"use strict";
// program1
function additionA(x, y) {
    return x + y;
}
additionA(12, 4);
// program2
let x;
x = 10;
console.log(x);
//program3
let firstName;
firstName = "chinmay";
console.log(firstName);
// program4
let canDrive;
let age = 18;
if (age >= 18) {
    canDrive = true;
}
else {
    canDrive = false;
}
// program5
let studentA = {
    firstName: "chinmay",
    lastName: "deshpande"
};
let studentB;
studentB = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 13
};
console.log(studentB);
// Program5 Array
let city = [];
city.push("pune");
city.push("nagpur");
city.push("nashik");
console.log(city);
city.forEach(function (el) {
    console.log(el.toUpperCase());
});
let numbers = [1, 3, 4, 5, 5, 6, 7];
numbers.forEach(function (el) {
    console.log(el);
});
// program 6 Array of fixed length tuple 
let info;
info = ["chinmay", "deshpande", 12];
console.log(info);
// program 7 enum
//admin
//supervision
//sr_supervisor
//customer
//client
//manager
//sr_manager
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["supervision"] = 1] = "supervision";
    Roles[Roles["sr_supervisor"] = 2] = "sr_supervisor";
    Roles[Roles["customer"] = 3] = "customer";
    Roles[Roles["client"] = 4] = "client";
    Roles[Roles["manager"] = 5] = "manager";
    Roles[Roles["sr_manager"] = 6] = "sr_manager";
})(Roles || (Roles = {}));
if (Roles.sr_manager) {
    console.log('senior manager');
}
