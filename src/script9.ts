// // class 1

// class Vehicle {
//     color:string = "blue"
//     model:number = 134

//     display(){
//         console.log(this.color)
//     }
// }

// let audi = new Vehicle()
// audi.color
// audi.model
// audi.display()


// program 2

// class Vehicle {

//     model:number;
//     type:string;
//     color:string;
//     constructor(model:number,type:string,color:string){
//         this.model = model
//         this.type = type
//         this.color = color
//     }

//         display(){
//         console.log(this.color)
//     }
// }

// let audi = new Vehicle(123,"SUV","red")
// audi.model
// audi.type
// audi.color
// audi.display()

// Program3
// class Vehicle {
//     constructor(public model:number,public type:string,public color:string){
//     }

//     display(){
//         console.log(this.color)
//     }
// }

// let bmw = new Vehicle(133,"SUV","red")
// console.log(bmw.color)

// program 4 

// class  Vehicle {
//     static country:string ="India"
//     static displayCountry():void{
//         console.log(Vehicle.country)
//     }
//     display(){
//         console.log("hello .....")
//     }
// }
// Vehicle.displayCountry()
// console.log(Vehicle.country)
// let q = new Vehicle()
// q.display()

// Private

// class Student  {
//     private fullName:string
//     private age:number
//     private skills:string[]

//     constructor(fn:string, ag:number , sks:string []){
//         this.fullName = fn
//         this.age = ag
//         this.skills = sks
//     }

//     getFullName(){
//         return this.fullName
//     }

//     getAge(){
//         return this.age
//     }
//     getSks(){
//         return this.skills
//    }

// }

// let a1 = new Student("ads",34 , ["js"])
// a1.getFullName()

// program 6
// class Student {

//     readonly fullName: string
//     readonly age: number
//     readonly skills: string[]

//     constructor(fn: string, ag: number, sks: string[]) {
//         this.fullName = fn
//         this.age = ag
//         this.skills = sks
//     }

//     // setFullName(n:string){
//     //     this.fullName = n
//     // }

// }
// let kl = new Student("as",45,["python"])
// console.log(kl.age)
//--------------------------------------------------------->


















