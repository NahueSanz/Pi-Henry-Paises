const validarCampo = (value, tipo) => {
  let regex;
  if (tipo === "email" && value.length < 35) {
    // Expresión regular para validar un correo electrónico
    regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  } else if (tipo === "password") {
    // Expresión regular para validar una contraseña
    regex = /^(?=.*\d).{6,10}$/;
  } else {
    // Tipo de campo no válido
    return false;
  }

  // Validar el valor utilizando la expresión regular
  return regex.test(value);
};

export { validarCampo };
