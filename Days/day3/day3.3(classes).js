//classes

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }

    saludo(){
        return `Hola, me llamo ${this.firstName} de apellido ${this.lastName}`
    }
}

let person1 = new Person("broly", "martinez")
let person2 = new Person("goku", "baena")
let person3 = new Person("saitama", "de la terra")

console.log(person1.saludo());
console.log(person2.saludo());
console.log(person3.saludo());


//si queremos usar esto en otro sitio haremos lo siguiente:
//primero tenemos que exportar.

module.exports = {Person}



