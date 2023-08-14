

const validation = (input) => {
  const error = {};

  if (!input.name) error.name = "Ingrese un nombre para la actividad";
  else if (input.name.length < 6)
    error.name = "El nombre de la actividad es muy corto";
  else if (input.name.length > 25)
    error.name = "El nombre de la actividad es muy largo";
 
  if (!input.dificultad)
    error.dificultad = "Ingrese un valor para la dificultad";
  else if (input.dificultad >= 6)
    error.dificultad = "La dificultad debe ser un valor entre 1 y 5";
  else if (input.dificultad <= 0)
    error.dificultad = "La dificultad debe ser un valor entre 1 y 5";
  else if (!/^[0-9]+$/.test(input.dificultad))
    error.dificultad = "El valor de la dificultad debe ser numerico";

  if (!input.duracion) error.duracion = "Ingrese un valor para la duracion";
  else if (input.duracion >= 13)
    error.duracion = "La duracion debe ser un valor entre 1 y 12 horas";
  else if (input.duracion <= 0)
    error.duracion = "La duracion debe ser un valor entre 1 y 12 horas";
  else if (!/^[0-9]+$/.test(input.duracion))
    error.duracion = "El valor de la duracion debe ser numerico";

  if (input.temporada == "default") error.temporada = "Ingrese una temporada";

  if (!input.countries) error.countries = "Ingrese al menos 1 pais";

  return error;
};

const input = { dificultad: "5s" };

console.log(validation(input));
export default validation;
