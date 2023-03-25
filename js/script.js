const lamborghiniAventador = {
   color: 'black',
   speed: 350,
   isSportCar: true,
   toString() {
      return JSON.stringify(this, null, 2)
   },
   compareToObject() {
      return JSON.stringify(this, null, 2) === JSON.stringify(lamborghiniUrus, null, 2)
   },
}

const lamborghiniUrus = {
   color: 'white',
   speed: 305,
   isSportCar: true,
   toString() {
      return JSON.stringify(this, null, 2)
   },
   compareToObject() {
      return JSON.stringify(this, null, 2) === JSON.stringify(lamborghiniAventador, null, 2)
   },
}

console.log(lamborghiniAventador.toString())
console.log(lamborghiniUrus.compareToObject())