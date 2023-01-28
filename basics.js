const variable = new String("Esta es una cadena");
console.log(variable)

//Objeto
const user = {
  name: 'Rocio Kelly', //Propiedad
  edad: 30,
  hobbies:['futbol','rrss','cantar','wally'],
  showName: function(){
    return this.name //Obtener el valor del objeto actual
  }, //Metodo
  cumpleanio(){
    this.edad+=1
  }
}
console.log(user)
console.log(user.showName())
user.cumpleanio()
console.log(user)


//Crear un constructor
function Person(){
  this.name = ""
  this.edad = 0
  this.showName = function(){
    return this.name
  }
}

const beto = new Person() //Importante llamar a person con 'NEW'
beto.name = "Betto"
beto.edad = 21
console.log(beto)
console.log(beto.showName())

const x = Object.keys(beto)
console.log(x)



