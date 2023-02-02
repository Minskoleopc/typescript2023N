
// type casting using as operator

let input = document.querySelector('input[type="text"]') as HTMLInputElement
console.log(input.value)

let input2 = document.querySelector('input[type="text"]')
let b = (input2 as HTMLInputElement).value


//HtmlInputElement  extends HTMLElement extents Element
//let e1:Element;
let e1:EventTarget;
e1 = new HTMLInputElement()

// <>
// program 2
let e2=  <HTMLInputElement>document.querySelector('input[type="text"]')
e2.value
// Type assertions 
function getCount(price:number,discount:number,format:boolean):number|string{
        let finalPrice=  (price - discount)
        if(format){
            return `$${finalPrice}`
        }
        else {
            return finalPrice
        }
}
let a11 = getCount(100,10,true) as String
let a12 = getCount(100,10,false) as number



