// program1

// function addition(x,y){
//     console.log(x+y)
// }
// addition('12','4')

// program 2
// function additionB(x,y){
//     if(typeof x === "number" && typeof y == "number"){
//         console.log(x+y)
//     }
//     else {
//         console.log('incorrect input')
//     }
// }
// additionB(12,3)

// program 3
// function add(x:number,y:number):number{
//     return x+y
// }
// add('12',14)

// Program 4
let nums:number[] = [11,22,33,44,55]
let names:string [] = ["chinmay","sarika","poorva"]
console.log(nums)
console.log(names)

// program 5
// tuple
let roles:[number,string] = [1,"admin"]
roles.push('names')

// program6

// let infoA:object ={
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// infoA.firstName = 1

// let infoA ={
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// console.log(infoA.firstName)
// infoA.firstName = 1

// program 7
// let infoR:{
//     fn:string,
//     ln:string
// }
// infoR = {
//     fn:"ch",
//     ln:'dh'
// }
// console.log(infoR)
// // program 8
// // type
// type studentA = {
//     firstName:string ,
//     lastName:string ,
//     age:number,
//     skills:string[]
// }

// let k:studentA = {
//     firstName:"chinmay" ,
//     lastName:"deshpande" ,
//     age:13,
//     skills:["html","css","javascript","datascience"]
// }

// let m:studentA;

// // program 10 (union types)
// let bny:number|string|boolean ;
// bny =true
// bny = 12
// bny ="chinmay"

// function cl(x:number|string,y:number|string){
//     if( typeof x == "number" && typeof y == "number"){
//         console.log(x+y)
//     }
//     else {
//         Number(x)+Number(y)
//     }
// }
// cl('22','22')
// cl(22,22)


// // program 11
// // literals 
// type country = "india"|"usa"|"mexico"
// type studentB = {
//     firstName:string ,
//     lastName:string ,
//     age:number,
//     skills:string[]
//     country:country
// }

// let q:studentB = {
//     firstName:"chinmay" ,
//     lastName:"deshpande" ,
//     age:34,
//     skills:["python"],
//     country:"india"
// }

// // program 12 

// enum rolls  {
//     admin=4,
//     customer,
//     manager,
//     hr,
//     pr
// }

// if(rolls.admin){

// }

// // program 13
// let sub:Function = function(x:number,y:number):number{
//     return  x+y
// }
// sub(2,3)

// // program 14
// type sum = (x:number,y:number) => number
// let ii:sum



























