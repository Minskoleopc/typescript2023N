// program1
class Person {
    name: string
    constructor(nm: string) {
        this.name = nm
    }
}

let amolK = new Person("amol");

// public , private , protected

// program 2
// public 
class PersonC {
    public name: string
    constructor(nm: string) {
        this.name = nm
    }

    public displayName() {
        console.log(this.name)
    }

}

let ninad = new PersonC("ninad dani")
console.log(ninad.name)
ninad.displayName()
console.log(ninad)

// program3
// private 
class PersonD {
    private name: string
    constructor(nm: string) {
        this.name = nm
    }
    public displayName() {
        console.log(this.name)
        this.displayGreet()
    }
    private displayGreet() {
        console.log("Hello I am new to city")
    }
}

let mohit = new PersonD("mohit dani")
//console.log(mohit.name) 
// private method and property cannot be access outside class
//mohit.displayGreet()
mohit.displayName()

// program 4

class PersonE {
    //age:number
    // constructor(ag:number){
    //     this.age = ag
    // }

    constructor(private age: number) { }
}

let ram = new PersonE(12)

// program4
class PersonF {
    public readonly name: string
    constructor(nm: string) {
        this.name = nm
    }
    public getName(): string {
        return this.name
    }
}
let ankita = new PersonF("ankit")
console.log(ankita.name)
//ankita.name = "a"

// program5


interface Worldbank {
    loan(): number
    save(): number
}

class SBI implements Worldbank {
    public loan(): number {
        return 10
    }
    public save(): number {
        return 10
    }
    public cityName():string{
        return "pune"
    }
}

class PNB implements Worldbank {
    public loan(): number {
        return 11
    }
    public save(): number {
        return 12
    }
    public cityName():string{
        return "jaipur"
    }
}







let SBIPUNE = new SBI()
console.log(SBIPUNE.loan())
console.log(SBIPUNE.save())
console.log(SBIPUNE.cityName())

let PNBPUNE = new PNB()
console.log(SBIPUNE.loan())
console.log(SBIPUNE.save())
console.log(SBIPUNE.cityName())














