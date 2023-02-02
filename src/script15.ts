
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