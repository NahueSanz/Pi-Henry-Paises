const validateUniqueUsername = (value) => {
  // Lógica para validar unicidad del nombre de usuario
  // Retorna true si el nombre de usuario es único, false en caso contrario
};

export const validateUsername = (username) => {
  const regexUppercase = /[A-Z]/;
  const regexNumber = /[0-9]/;

  const hasUppercase = regexUppercase.test(username);
  const hasNumber = regexNumber.test(username);
  const isLengthValid = username.length >= 5 && username.length <= 15;

  return {
    hasUppercase,
    hasNumber,
    isLengthValid,
  };
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const calculateSecurityLevel = (password) => {
  let securityLevel = 0;

  // Verifica si la contraseña tiene números
  if (/\d/.test(password)) {
    securityLevel += 25;

    // Verifica la longitud de la contraseña
    if (password.length >= 5) {
      securityLevel += 25;

      // Verifica si la contraseña tiene mayúsculas y minúsculas
      if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        securityLevel += 25;

        // Verifica si la contraseña tiene caracteres especiales
        if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
          securityLevel += 25;
        }
      }
    }
  }

  return securityLevel;
};
