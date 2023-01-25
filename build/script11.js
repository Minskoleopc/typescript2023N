"use strict";
// // interface Greetable {
// //     name:string
// //     greet(word:string):void
// //     display(year:string):void
// // }
function add(a, b) {
    if (typeof a == "string" && typeof b == "string") {
        return a + b;
    }
    else if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a == 'number' && typeof b == 'string') {
        return a.toString() + b;
    }
    else if (typeof a == 'string' && typeof b == 'number') {
        return a + b.toString();
    }
}
console.log(add(1, 3));
console.log(add(1, '3'));
console.log(add('1', '3'));
console.log(add('1', 2));
