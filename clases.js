class Coche{
  //constructor
  constructor(marca, motor, color){
    this.marca = marca
    this.motor = motor
    this._color = color
    this._recorrido = 0
  }

  get color(){
    return this._color;
  }
  get recorrido(){
    return this._recorrido;
  }
  set cambiaColor(color){
    this._color = color
  }

  get obtenerDatos(){
    return `El coche ${this.marca} es del color: ${this._color}`
  }

  //metodos (sin poner function)
  arrancar(){
    console.log("Coche arrancado")
  }
  parar(){
    console.log("DETENIDO")
  }
  recorridoMas(){
    console.log("RECORRIDO AUMENTADO")
    this._recorrido += 10 
  }

}
const mi_coche = new Coche('Seal', 'Toyota', 'Rojo')
console.log(mi_coche.obtenerDatos)
mi_coche.arrancar()
mi_coche.parar()
mi_coche.recorridoMas()
console.log(mi_coche.recorrido)

//USANDO PROTOTYPE
//Agregamos una nueva propiedad
Coche.prototype.ruedas = 4
console.log(mi_coche.ruedas)

//Agregamos un metodo
Coche.prototype.tunear = function(color){
  this._color = color
}
mi_coche.tunear('Rosado')
console.log(mi_coche.obtenerDatos)