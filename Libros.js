
let libros = []


function agregarLibro(titulo, autor, año, isbn){
   libros.push({titulo, autor, año, isbn})
   console.log("libro agregado:",
               
function listarLibros(){
   console.log("lista de libros:")
   for(let i=0; i<libros.length; i++){
      console.log((i+1)+".", libros[i].titulo, "-", libros[i].autor)
   }
}

// buscar por titulo o autor
function buscarLibro(valor){
   let encontrado = libros.filter(l => 
      l.titulo.toLowerCase().includes(valor.toLowerCase()) ||
      l.autor.toLowerCase().includes(valor.toLowerCase())
   )

   if(encontrado.length>0){
      console.log("coincidencias encontradas:", encontrado)
   }else{
      console.log("no se encontro ningun libro con ese dato")
   }
}

// pruebas rapidas
agregarLibro("cien años de soledad", "gabriel garcia marquez", 1967, "12345")
agregarLibro("el principito", "antoine de saint-exupery", 1943, "67890")
listarLibros()
buscarLibro("marquez")
