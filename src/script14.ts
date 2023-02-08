// type alphanumberic = string | number;


// function add(a:alphanumberic, b:alphanumberic){
//     if(typeof a === 'number' && typeof b === 'number'){
//         return a + b
//     }

//     if(typeof a === "string" && typeof b === 'string'){
//         return a.concat(b)
//     }

//     throw new Error('Invalid input ')
// }
// add(12,3)
// add('12','3')


class Customera {
    idCreditAllowed(): boolean {
        return true
    }
}

class Suppliera {
    
    isInShortList(): boolean {
        return true
    }
}

type BusinessPartnera = Customera | Suppliera


// function signContract(partner:BusinessPartnera):string{
//     let message:string = '';
//     // sign a contract with supplier
//     if(partner instanceof Suppliera){
//         if(partner.isInShortList()){
//             message =`sign a contract with supplier`
//         }
//     }
//     if(partner instanceof Customera){
//         if(partner.idCreditAllowed()){
//             message = `sign a contract with customer`
//         }
//     }
//     // sign a contract with customer
//     return message;
// }
// console.log(signContract(new Suppliera()))
// console.log(signContract(new Customera()))


// let ar = [22,33,44,55,6]
// console.log(ar instanceof Array)


// let family = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// if('firstName' in family){
//     console.log('find')
// }


function signContract(partner: BusinessPartnera): string {
    let message: string = '';

    if ('idCreditAllowed' in partner) {
        if (partner.idCreditAllowed()) {
            message = `sign a contract with customer`
        }
    }

    if ('isInShortList' in partner) {
        if (partner.isInShortList()) {
            message = `sign a contract with customer`
        }
    }

    // sign a contract with supplier
    // if(partner instanceof Suppliera){
    //     if(partner.isInShortList()){
    //         message =`sign a contract with supplier`
    //     }
    // }
    // if(partner instanceof Customera){
    //     if(partner.idCreditAllowed()){
    //         message = `sign a contract with customer`
    //     }
    // }
    // sign a contract with customer
    return message;
}
console.log(signContract(new Suppliera()))
console.log(signContract(new Customera()))






