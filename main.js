const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

console.log(analizarPacientes(pacientes));

function analizarPacientes(personas) {
  const mayoresEdad = (acumulador, persona) =>
    persona.paciente.edad >= 18 ? ++acumulador : acumulador;

  const contarHombresDiabeticos = (persona) =>
    persona.paciente.sexo === "H" && persona.dieta === "Diabetes";

  const sumaDiasIngresados = (diasAcumulados, persona) =>
    diasAcumulados + persona.diasIngresado;

  const calcularMediaEdadMujeres = (edadAcumulada, persona, i, personasArray) =>
    edadAcumulada + persona.paciente.edad / personasArray.length;

  const sacarMujeres = (persona) => persona.paciente.sexo === "M";

  const datosHospital = {
    nPacientes: personas.length,
    nMayoresEdad: personas.reduce(mayoresEdad, 0),
    nHombresDiabeticos: personas.filter(contarHombresDiabeticos).length,
    totalDiasIngreso: personas.reduce(sumaDiasIngresados, 0),
    mediaEdadMujeres: personas
      .filter(sacarMujeres)
      .reduce(calcularMediaEdadMujeres, 0),
  };

  return datosHospital;
}
