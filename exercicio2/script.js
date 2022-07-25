const numero1 = Number (prompt("qual número?")) 
const numero2= Number(prompt("qual número?"))
console.log(typeof numero1)

const a= numero1>numero2
const b =numero1===numero2
const c= (numero1%numero2)=== 0
const d= (numero2%numero1)=== 0


console.log("O primeiro numero é maior que segundo?", a)
console.log("O primeiro numero é igual ao segundo?", b)
console.log("O primeiro numero é divisivel pelo  segundo?", c)
console.log("O segundo numero é divisível pelo primeiro",d)