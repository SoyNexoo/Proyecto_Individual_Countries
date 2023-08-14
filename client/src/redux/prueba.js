/* eslint-disable no-unused-vars */
let number = false;
let mayus = false;
let minus = false;
const validator = (contraseña) => {
  let caracteres = "@.!";
  const validadas = []

 
    for (let i = 0; i < contraseña.length; i++) {
      if (contraseña[i] >= "A" && contraseña[i] <= "Z") {
        mayus = true;
        validadas.push(1)
      } else if (contraseña[i] >= "a" && contraseña[i] <= "z") {
        minus = true;
        validadas.push(2)
      } else if (contraseña[i] >= "0" && contraseña[i] <= "9") {
        number = true;
        validadas.push(3)
      } else if(caracteres.includes(contraseña[i])){
        validadas.push(4)
      }
    }
  
  return "=>>>> ", validadas.join("")
};
                    // 124312341243
console.log(validator("3"));
console.log()



// La contraseña debe tener al menos 8 caracteres y no más de 16 caracteres.
// Debe contener al menos una letra mayúscula y una letra minúscula.
// Debe contener al menos un número.
// Debe contener al menos uno de los siguientes caracteres especiales: ! @ # $ % ^ & * ( ) _ + - = { } [ ] : ; " ' < > , . ? /
// La función debe devolver true si la contraseña cumple con todos los criterios anteriores, y false en caso contrario.

// Puedes escribir la función en el siguiente formato:
