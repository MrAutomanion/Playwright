//array

//todo el contenido de una array funciona como un inice empezando por el numero 0
/*

let donuts = new Array("choco","crema","coca");
console.log(donuts)
*/
//resultado: [ 'choco', 'crema', 'coca' ]
/*

let donuts = Array(12);
console.log(donuts)
*/
//resultado: [ <12 empty items> ]

/*
let donuts = ["choco","crema","coca"];
console.log(donuts)
*/
//resultado: [ 'choco', 'crema', 'coca' ]

/*
let donuts = ["choco","crema","coca"];
console.log(donuts[0])
console.log(donuts[1])
console.log(donuts[2])
*//*
//resultado: choco
             crema
             coca
*/
/*
//saber el numero de contenido de la array(.lenght):
let donuts = new Array("choco","crema","coca");
console.log(donuts.length)
*/
//resultado: 3

//para saber en que posicion esta un item concreto(.indexof):
/*
let donuts = ["choco","crema","coca"];
let index = donuts.indexOf("crema")
console.log(index)
*/
//resultado: 1

//para introducir un item en el array(push):
/*
let donuts = ["choco","crema","coca"];
let index = donuts.indexOf("crema")
console.log(index)
donuts.push("chocolate blanco")
console.log(donuts)
*/
/*resultado: 1
             [ 'choco', 'crema', 'coca', 'chocolate blanco' ]*/

/*
//Para poner el item en primera posicion(unshift):
let donuts = ["choco","crema","coca"];
let index = donuts.indexOf("crema")
console.log(index)
donuts.push("chocolate blanco")
donuts.unshift("caramelo")
console.log(donuts)
*/
/*resultado:  1
            [ 'caramelo', 'choco', 'crema', 'coca', 'chocolate blanco' ]*/


//Para remover del final de la array (pop) y del principio (shift):
/*
let donuts = ["choco","crema","coca"];
let index = donuts.indexOf("crema")

donuts.push("chocolate blanco")
donuts.unshift("caramelo")
console.log(donuts)
donuts.pop()
donuts.shift()
console.log(donuts)
*/
/*Resultado: [ 'caramelo', 'choco', 'crema', 'coca', 'chocolate blanco' ]
             [ 'choco', 'crema', 'coca' ]*/


//Para eliminar un rango de items de la array(splice(posicion inicial, posicion final))
/*
let donuts = ["choco","crema","coca"];
let index = donuts.indexOf("crema")

donuts.push("chocolate blanco")
donuts.unshift("caramelo")
console.log(donuts)
donuts.splice(1,3)
console.log(donuts)
*/
/*resultado: [ 'caramelo', 'choco', 'crema', 'coca', 'chocolate blanco' ]
             [ 'caramelo', 'chocolate blanco' ]
*/

//Para eliminar un solo item, en este caso le decimos que queremos eliminar el item de la posicion 3 y solo queremos eliminar 1 item:
/*
let donuts = ["choco","crema","coca"];
let index = donuts.indexOf("crema")

donuts.push("chocolate blanco")
donuts.unshift("caramelo")
console.log(donuts)
donuts.splice(3,1)
console.log(donuts)
*/
/*resultado: [ 'caramelo', 'choco', 'crema', 'coca', 'chocolate blanco' ]
             [ 'caramelo', 'choco', 'crema', 'chocolate blanco' ]*/










