//functions
/*
function name(param1, param2){

}
*/
/*
function greet(){
    console.log("hola");
    console.log("hola que tal");
    console.log("endi marica");

}

greet()
*/
/*
function addsTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addsTwoNumbers(1,3)
*/
/*
function addsTwoNumbers(num1, num2){
    return num1 + num2
}

console.log(addsTwoNumbers(1,3))
*/

//mas compleja:
/*
function toFahrenheit(celsius){
    let conversion1 = celsius * 1.8
    let finalConversion = conversion1 + 32

    return finalConversion
}

let callToFahreneit = toFahrenheit(30)
console.log(`la tempreratura es ${callToFahreneit} grados fahrenheit`);
*/

//convertimos esta funcion en una arrow function:

const toFahrenheit = (celsius) => {
    let conversion1 = celsius * 1.8
    let finalConversion = conversion1 + 32

    return finalConversion
}

let callToFahreneit = toFahrenheit(30)
console.log(`la tempreratura es ${callToFahreneit} grados fahrenheit`);
