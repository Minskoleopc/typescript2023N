// Addition 
function addition(x, y) {
    console.log(x + y)
}
addition(5, 6)
addition('5', 6)

function additionA(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y
    }
    else {
        return 'please enter correct numbers'
    }
}
let q1 = additionA(12, 3)
let q2 = additionA(12, '3')
console.log(q1)
console.log(q2)

