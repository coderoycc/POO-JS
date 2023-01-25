class Persona{
  constructor(nombre, edad){
    this._nombre = nombre
    this._edad = edad
  }
  get nombre(){
    return this._nombre
  }
  get edad(){
    return this._edad
  }
  set nombre(nom){
    this._nombre = nom
  }
  info(){
    return `Me llamo ${this._nombre} y tengo ${this._edad} años`
  }
  dormir(){
    console.log("Dormir ZZZZZZ")
  }
  comer(){
    console.log("Comida")
  }
  despertar(){
    console.log("Despierto")
  }
}
class Trabajador extends Persona{
  constructor(nombre, edad){
    super(nombre, edad)
    this._trabaja = 'SI'
  }
  info(){
    return `Soy ${this._nombre} y ${this._trabaja} trabajo`
  }
  set trabaja(valor){
    this._trabaja = valor
  }
}
const persona = new Persona("Betto", 21)
console.log(persona.info())
const t = new Trabajador('Pepito', 24)
console.log(t.info())
t.trabaja = 'NO'
t.nombre = "FERNANDO"
console.log(t.info())