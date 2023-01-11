type person  = {
    firstName:string,
    lastName:string
}

let chinmay:person = {
    firstName:"chinmay",
    lastName:"deshpande"
}

let amol:{firstName:string , lastName:string} = {
    firstName:"amol",
    lastName:"rao"
}

let sarika:person = {
    firstName:"sarika",
    lastName:"pansare"
}

type Car = {
   modelNumber:number,
   color:string,
   type:string
}

let Audi:Car = {
    modelNumber:123,
    color:"red",
    type:"qwerty"
}

interface PersonB {
    firstName:string,
    lastName:string
}

let s:PersonB = {
    firstName:"mayuri",
    lastName:"rao"
}

// Unions

function printAddress(code:string|number){
    console.log(`My addres is ${code}`)
    console.log(code)
}

printAddress(12)
printAddress('12')
let account:"saving"|"current"
account = "current"


// functions 

function getName():void{
    console.log("Chinmay Deshpande")
}
getName()

function givString(){
    return "hello"
}
givString()

function canDriveA():boolean{
    return true
}
canDriveA()

