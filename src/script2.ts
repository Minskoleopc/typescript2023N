
// program1
function additionA(x: number, y: number): number {
    return x + y
}
additionA(12, 4)

// program2
let x: number;
x = 10
console.log(x)

//program3
let firstName: string
firstName = "chinmay"
console.log(firstName)

// program4
let canDrive: boolean
let age = 18;
if (age >= 18) {
    canDrive = true
}
else {
    canDrive = false
}
// program5
let studentA = {
    firstName: "chinmay",
    lastName: "deshpande"
}

let studentB: { firstName: string, lastName: string, age: number };
studentB = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 13
}

console.log(studentB)


// Program5 Array
let city: string[] = [];
city.push("pune")
city.push("nagpur")
city.push("nashik")
console.log(city)

city.forEach(function (el) {
    console.log(el.toUpperCase())
})

let numbers: number[] = [1, 3, 4, 5, 5, 6, 7]
numbers.forEach(function (el) {
    console.log(el)
})

// program 6 Array of fixed length tuple 
let info: [string, string, number]
info = ["chinmay", "deshpande", 12]
console.log(info)


// program 7 enum

//admin
//supervision
//sr_supervisor
//customer
//client
//manager
//sr_manager
enum Roles  {
    admin,
    supervision,
    sr_supervisor,
    customer,
    client,
    manager,
    sr_manager,
}

if (Roles.sr_manager) {
    console.log('senior manager')   
}






