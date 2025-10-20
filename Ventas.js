

const IVA = 0.19
let productos = []
let continuar = true

while(continuar){
   let precio = parseFloat(prompt("ingrese el precio del producto:"))
   let cantidad = parseInt(prompt("ingrese cantidad de unidades:"))

   if(precio>0 && cantidad>0){
      let total = precio * cantidad
      productos.push(total)
   }else{
      console.log("error: datos invalidos")
      continue
   }

   continuar = confirm("desea agregar otro producto?")
}

let subtotal = productos.reduce((a,b)=>a+b,0)
let iva = subtotal * IVA
let totalPagar = subtotal + iva

console.log("subtotal:", subtotal.toFixed(2))
console.log("iva (19%):", iva.toFixed(2))
console.log("total a pagar:", totalPagar.toFixed(2))
