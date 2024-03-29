//Objects
/*
const car = {
    type:"toyota", 
    model:"supra", 
    color:"black",
    km:23,
    myCar: function(){
        return `mi coche es un ${this.type} ${this.model}`
    }
} 

console.log(car.myCar())
*/

//en function arrow:

const car = {
    type:"toyota", 
    model:"supra", 
    color:"black",
    km:23,
    //esto es function arrow simplificada
    myCar() {
        return this
    }
} 

console.log(car.myCar())
