
let inventario = []

function agregarProducto(codigo, nombre, precio, stock, estado){
   if(inventario.some(p => p.codigo===codigo)){
      console.log("ya existe ese codigo, prueba otro")
      return
   }
   if(precio<=0 || stock<0){
      console.log("datos incorrectos")
      return
   }
   inventario.push({codigo, nombre, precio, stock, estado})
   console.log("producto agregado:", nombre)
}

function actualizarStock(codigo, nuevoStock){
   let prod = inventario.find(p => p.codigo===codigo)
   if(prod){
      prod.stock = nuevoStock
      prod.estado = nuevoStock>0 ? "disponible" : "agotado"
      console.log("stock actualizado:", prod)
   }else{
      console.log("no existe ese producto")
   }
}

function listarProductos(){
   let ordenados = [...inventario].sort((a,b)=> a.nombre.localeCompare(b.nombre))
   console.log("lista de productos:")
   console.table(ordenados)
}

// pruebas
agregarProducto("001","arroz",2500,10,"disponible")
agregarProducto("002","azucar",3000,0,"agotado")
actualizarStock("002",5)
listarProductos()
