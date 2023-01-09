// Typescript -----javascript ----- browser 

// program1
// function additonD(x,y){
//     console.log(x+y)
// }
// additonD(5,6)
// additonD('5',6)

function additionB(x:number,y:number):void{
    console.log(x+y)
}
additionB(3,9)

// program2 

// let q1:number;
// q1 = "chinmay"

//let q1 = "chinmay"
//q1 = 45

// program 3
let fname = "chinmay"
//fname = 45

let lastN:string;
lastN = "c"

// program 4
let ya = true;
//ya = 23 
let ya2:boolean;
ya2 = true
console.log(ya2)

// program5

let stud1  = {
    firstName:"ram",
    lastName:"dani"
}
stud1.firstName = "mayuri"
stud1.lastName = "nagrare"

let stu2:{
    firstName:string,
    lastName:string,
    age:number
}
stu2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23
}


// let d = 19
// const da = 89
// da = 90

// program 6
let names:string [];
names = ["chinmay","deshpande","shirish"]
names.forEach(function(el){
    el.toUpperCase()
})
// program 7
// tuple (array of fixed length)
let info2:[number,string,string]
info2 = [7709192441,"chinmay","deshpande"]
console.log(info2)

// program8 

enum Roles {
    admin2 ,
    customer2,
    student2,
    manager2 
}

if(Roles.admin2){
    console.log("admin2")
}
