class SeguroSocial{
  constructor(nombre){
    this.nombre = nombre
  }
}
class Empleado{
  constructor(name, sueldo){
    this.name = name
    this.sueldo = sueldo
  }
}




// Asociación Seguro 1->N Empleados
const univida = new SeguroSocial('UniVida')
const e1 = new Empleado('Roberto', 2800)
const e2 = new Empleado('Carlos', 1800)
let seguros = {
  univida: [e1,e2] //relacion ente dos objetos (sin importar dependencias)
}
console.log(seguros)





// Agregación Empresa tiene Empleados
const empresa = {
  nombre: 'Empresa SRL',
  empleados: [e1,e2] //Un objeto contiene varios objetos (Empleado intercambiable, eliminable)
}




// Composición Una Empresa se compone de su dirección (pues es unica) 
// La dirección es de la empresa y la empresa tiene una dirección
class Direccion{
  constructor(calle, numero){
    this.calle = calle
    this.numero = numero
  }
}
const d1 = new Direccion('Ro', 2020)
const empresa2 = {
  nombre: 'Empresa 2',
  empleados: [e1,e2],
  direccion: d1
}
console.log(empresa2)