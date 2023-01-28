# Programación orientada a objetos con JS
Las variables que se manejan en JS son de tipo primitivas (strings, boolenas, enteros) y de tipo objeto ({}, []) arrays, objetos, Dates, etc.
<br>Para ver los tipos de datos se usa ` typeof variable `
<br>Los datos primitivos tambien pueden ser declarados como Objetos ej:

```JS
let cadena = new String('Esta es una cadena')
console.log(typeof cadena)
// object
```
Estas variables son tomadas como objetos porque cada tipo de dato tiene MÉTODOS como por ejemplo:
```js
let cadena = "Nombre de mi Perrito: es Bellota"
const mayusculas = cadena.toUpperCase()
```

## Propiedades
Cada objeto es característico por sus propiedades que son llamados atributos
Coche:
  - color
  - cilidrada
  - marca
  - modelo , etc

## Métodos
Cada objeto tiene metodos (acciones) que permite realizar una funcionalidad
Coche:
  - Start()
  - avanzar()
  - cargar(combustible)
```js
const user = {
  const user = {
    name: 'Rocio Kelly', //Propiedad
    edad: 20,
    hobbies:['futbol','rrss','cantar','wally'],
    showName: function(){
      return this.name //Obtener el valor del objeto actual
    }, //Metodo
    cumpleanio(){ //Uso de this para los valores propios
      this.edad+=1
    }
  }
}
```

## Constructor
Un constructor nos brinda la estructura básica de un objeto, este puede ser representado por una función
```js
const beto = new Person()
//Siempre llamar con new, sino solo sera ejecutado como una funcion
beto.name = "Betto"
beto.edad = 21
console.log(beto)
console.log(beto.showName())
```
Tambien se puede crear con la sentencia Object `const person = new Object()`
**Object nos permite obtener las propiedades de un objeto usando** `Object.keys(beto)`
El resultado de esa linea será ['name','edad','showName'] 

## Prototype
Hace referencia al contructor. Cada uno de los objetos creados bajo un constructor se encuentra enlazado a este.<br> 
**Prototype** nos permite adicionar propiedades y métodos a nuestros objetos y tambien a nuestro constructor, por ejemplo:
```js
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
``` 
Así tambien podemos alterar nuestros constructores que vienen con JavaScript como añadir un nuevo método de String para una funcionalidad diferente, pero siempre usando el constructor. `String.prototype.nuevo = function() { return this + "XD" }`