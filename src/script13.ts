interface BusinessPartner {
    name:string ,
    credit:number
}
interface Indentity {
    id:number ,
    name:number
}
interface Contact {
    email:string;
    phone:string
}

type Employee = Indentity & Contact
type Customer = BusinessPartner & Contact

let e:Employee = {
    id:100,
    name:"chinmay deshpande",
    email:'chinmaydeshpande010@gmail.com',
    phone:'7709192441'

}
let c:Customer = {
    name:"rama " ,
    credit:7709192441,
    email:"mayuri15@gmail.com",
    phone:"ad"
}
type Employee1 =  Indentity & Customer & BusinessPartner

let j:Employee1 = {
    credit:88,
    id:99 ,
    name:"chinmay",
    email:"ram",
    phone:"ad"
}













