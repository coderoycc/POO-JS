function Coche(){
  this.marca = ''
  this.color = ''
}
//creamos un objeto
const c1 = new Coche()
c1.marca='Toyota'
c1.color='Blanco'
//creamos otro objeto
const c2 = new Coche()
c2.marca = 'Nissan'
c2.color = 'Rojo'

//Agregamos una propiedad a todos 
Coche.prototype.km = 0 //todos los coches creados tienen 0KM

//comprobamos
console.log(c1.km)

//Agregamos una función(metodo)
Coche.prototype.kilometraje = function(){
  return this.km
}
//comprobamos
console.log(c2.kilometraje())


console.log("*******************")
let cadena = new String("Rocio")
String.prototype.adiciona = function(){
  return this + " XD"
}
console.log(cadena.adiciona())

let otra = 'Roberto'
console.log(otra.adiciona())