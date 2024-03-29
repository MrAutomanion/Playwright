//Variable let y variable const  (si tenemos diferentes variables con el mismo nombre puede llevar a errores, por eso se usan estas variables )
/*
var firstName = "Tomas"
var firstName = "Eustakio"

//esta predefinido que la variable(con el mismo nombre) que manda es la ultima introducida

console.log(firstName)

//resultado: [Running] node "c:\D\OLDWORLD\CURSO TESTING\3-SDET Playwright\JavaScript\Days\day2\day2.2.js"
//Eustakio

*/

/*
let firstName = "Tomas"
let firstName = "Eustakio"

console.log(firstName)

//nos aparece este mensaje: SyntaxError: Identifier 'firstName' has already been declared
*/

//al dejar un let esta bloqueando esta variable y evitando de esta manera que nos aparezca un error
/*
let firstName = "Tomas"
firstName = "Eustakio"

console.log(firstName)
//resultado: [Running] node "c:\D\OLDWORLD\CURSO TESTING\3-SDET Playwright\JavaScript\Days\day2\day2.2.js"
//Eustakio
*/

//Un bloque es un trozo de código delimitado por {}. Un bloque vive entre llaves. Todo lo que está dentro de llaves es un bloque. 
//Así que una variable declarada en un bloque con let  solo está disponible para su uso dentro de ese bloque

/*
let firstName = "Tomas"
if(true){
    let firstName = "Eustakio"
    console.log(firstName);
}
console.log(firstName);
*/

//cons
//Las variables declaradas con const mantienen valores constantes. Las declaraciones const similitudes con las declaraciones let.
//Las declaraciones const tienen un ámbito de bloque
//Al igual que las declaraciones let, solamente se puede acceder a las declaraciones const dentro del bloque en el que fueron declaradas.
//const no puede modificarse ni volver a declararse
//Esto significa que el valor de una variable declarada con const s el mismo dentro de su ámbito. No se puede actualizar ni volver a declarar. Así que si declaramos una variable con const, no podemos hacer esto:
/*    const saludar = "dice Hola";
    saludar = "dice Hola tambien";// error: Assignment to constant variable.*/


