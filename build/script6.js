"use strict";
// program1
class Person {
    constructor(nm) {
        this.name = nm;
    }
}
let amolK = new Person("amol");
// public , private , protected
// program 2
// public 
class PersonC {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        console.log(this.name);
    }
}
let ninad = new PersonC("ninad dani");
console.log(ninad.name);
ninad.displayName();
console.log(ninad);
// program3
// private 
class PersonD {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        console.log(this.name);
        this.displayGreet();
    }
    displayGreet() {
        console.log("Hello I am new to city");
    }
}
let mohit = new PersonD("mohit dani");
//console.log(mohit.name) 
// private method and property cannot be access outside class
//mohit.displayGreet()
mohit.displayName();
// program 4
class PersonE {
    //age:number
    // constructor(ag:number){
    //     this.age = ag
    // }
    constructor(age) {
        this.age = age;
    }
}
let ram = new PersonE(12);
// program4
class PersonF {
    constructor(nm) {
        this.name = nm;
    }
    getName() {
        return this.name;
    }
}
let ankita = new PersonF("ankit");
console.log(ankita.name);
class SBI {
    loan() {
        return 10;
    }
    save() {
        return 10;
    }
    cityName() {
        return "pune";
    }
}
class PNB {
    loan() {
        return 11;
    }
    save() {
        return 12;
    }
    cityName() {
        return "jaipur";
    }
}
let SBIPUNE = new SBI();
console.log(SBIPUNE.loan());
console.log(SBIPUNE.save());
console.log(SBIPUNE.cityName());
let PNBPUNE = new PNB();
console.log(SBIPUNE.loan());
console.log(SBIPUNE.save());
console.log(SBIPUNE.cityName());
