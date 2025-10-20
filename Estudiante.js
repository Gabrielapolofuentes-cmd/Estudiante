
const estudiantes = [
  {
    cedula: "0951234567",
    apellidos: "garcia pérez",
    nombres: "maria jose",
    programaAcademico: "ingenieria en sistemas",
    materias: ["algoritmo", "calculo", "ingles"],
    promedioNota: 8.75
  },
  {
    cedula: "0987654321",
    apellidos: "martinez lopez",
    nombres: "carlos andres",
    programaAcademico: "medicina",
    materias: ["quimica", "biologia", "ingles"],
    promedioNota: 9.10
  },
  {
    cedula: "0912345678",
    apellidos: "rodriguez sanchez",
    nombres: "ana lucia",
    programaAcademico: "derecho",
    materias: ["humanidades", "procesal", "ingles"],
    promedioNota: 8.95
  },
  {
    cedula: "0976543210",
    apellidos: "torres zambrano",
    nombres: "diego alejandro",
    programaAcademico: "arquitectura",
    materias: ["dibujo", "arte", "ingles"],
    promedioNota: 8.50
  },
  {
    cedula: "0898765432",
    apellidos: "vera castillo",
    nombres: "sofia valentina",
    programaAcademico: "psicologia",
    materias: ["psicologia", "sociales", "humanidades"],
    promedioNota: 9.25
  }
]

// funcion para buscar estudiante por cedula
function buscarEstudiante(cedulaBuscada){
  // buscar con metodo find
  let est = estudiantes.find(e => e.cedula === cedulaBuscada)

  if(est){
    console.log("estudiante encontrado:")
    console.log("nombre:", est.nombres, est.apellidos)
    console.log("programa:", est.programaAcademico)
    console.log("materias:", est.materias.join(", "))
    console.log("promedio:", est.promedioNota)
  }else{
    console.log("no se encontro ningun estudiante con esa cedula :(")
  }
}

// ejemplo de uso
buscarEstudiante("0912345678")
