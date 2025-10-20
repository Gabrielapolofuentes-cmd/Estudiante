

let estudiantes = []

function agregarEstudiante(cedula, nombre, apellido, edad){
  estudiantes.push({cedula, nombre, apellido, edad})
  console.log("se agregó el estudiante:", nombre)
}

function listarEstudiantes(){
  let ordenados = [...estudiantes].sort((a,b)=> a.apellido.localeCompare(b.apellido))
  console.log("lista ordenada de estudiantes:")
  console.log(ordenados)
}

function buscarPorCedula(cedula){
  return estudiantes.find(e => e.cedula===cedula)
}

function actualizarEstudiante(cedula, nuevosDatos){
  let est = buscarPorCedula(cedula)
  if(est){
    Object.assign(est, nuevosDatos)
    console.log("datos actualizados:", est)
  }else{
    console.log("no se encontro esa cedula")
  }
}

function eliminarEstudiante(cedula){
  let pos = estudiantes.findIndex(e => e.cedula===cedula)
  if(pos!=-1){
    estudiantes.splice(pos,1)
    console.log("estudiante eliminado")
  }else{
    console.log("no existe esa cedula")
  }
}

// prueba rapida
agregarEstudiante("1","ana","perez",20)
agregarEstudiante("2","luis","martinez",22)
listarEstudiantes()
actualizarEstudiante("1",{edad:21})
eliminarEstudiante("2")
