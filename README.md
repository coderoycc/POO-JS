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

## Asociación - Agregación - Composición
Son principios básicos de la Programación Orientada a Objetos

* La asociación se refiere a relacionar un objeto con otro.
* Agregación es donde un objeto puede estar compuesto por otros objetos que son independientes, es decir, que si el objeto independiente se describe por si mismo.
* Composición es lo contrario a la agregación, pues un objeto es compuesto por otros objetos de manera que si se quita un de estos ambos quedan sin funcionamiento.
**Ver ejemplos en el archivo de principiosPOO**

## Herencia
Es donde un objeto mayor (PADRE) cuenta con una parte de los atributos y métodos de otro objeto menor (HIJO). Por ejemplo: Persona -> Cienfífico
Ejemplo:
```js
class Persona{
  constructor(name, age){
    this.name = name
    this.age = age
  }
}
class Programador extends Persona{
  constructor(name, age, language){
    super(name, age)
    this.language = language
  }
}
```

## Polimosfismo
Es la capacidad que se tiene para englobar una clase a distintas sub clases para diferenciar entre métodos. Por ejemplo: el objeto FIGURA tiene color, area, perimetro
Pero para el área de cada figura se emplea diferentes cálculos. <br>
Para cada figura se puede hacer la **sobrecarga de métodos** en JavaScript no es muy usado pues no es un lenguaje de tipado alto.
<br> En Java un ejemplo de sobrecarga sería el siguiente.

```Java
public int suma(int a, int b){
  return a + b;
}

public int suma(int a, int b, int c){
  return a + b + c;
}
// ambas funciones devuelven la suma, pero depende la cantidad de elementos que se le pase podra retornar la suma
```
## Palabra STATIC
* El método static interactua directamente con la clase.
* No puede ser llamado por objetos (instancias)
* En un método
```js
//Dentro de una clase
class Clase{
  static saludar(){
    console.log("")
  }
} 
// Afuera
Clase.saludar()
```
* En una variable de clase
```js
// Tambien se accede desde una clase y no desde una instancia
class Clase{
  static contador = 0;
  constructor(){
    Clase.contador++;
  }
}
```
* **NOTA:** los atributos no estáticos son los que se llenan desde un objeto y no se ponen static al inicio.
* Para definir una objeto de tipo estático de solo lectura 
```js
class Clase{
  ///...
  static get MAX_OBJ(){
    return "VALOR"
    // Accesible desde la Clase
  }
}
```
## Palabra INSTANCEOF
* Nos permite saber de que instancia es un objeto
```js
//class ...
  comprobar(obj){
    if(obj instanceof Genrente){
      console.log('Es gerente')
    }
    else if(obj instanceof Empleado){
      console.log('Es empleado')
    }
    else if(obj instanceof Object){
      console.log('Es un objeto')
    }
    // De menor a mayor Hijo Hijo Padre
  }
```
* Cualquier objeto tiene por padre a **Object**

