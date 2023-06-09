import { useState } from "react";
import { validateUsername } from "../SignUpValidations";

const UsernameField = () => {
  const [usernameValidation, setUsernameValidation] = useState({
    hasUppercase: false,
    hasNumber: false,
    isLengthValid: false,
  });
  const [username, setUsername] = useState("");

  const handleChangeUser = (event) => {
    setUsernameValidation(validateUsername(event.target.value));
    setUsername(event.target.value);
  };
  return (
    <div>
      <label className="labelText" htmlFor="email">
        Nombre de usuario
      </label>
      <br />
      <input
        className="inputform"
        type="text"
        value={username}
        placeholder="Nombre de usuario"
        name="username"
        onChange={handleChangeUser}
      />
      {/*armar debe ser unico el usuario*/}
      <div className="conditions">
        <p
          className={`condition ${
            usernameValidation.hasUppercase ? "valid" : ""
          }`}
        >
          {usernameValidation.hasUppercase ? "✓" : "✘"} Debe tener al menos una
          mayúscula
        </p>
        <p
          className={`condition ${usernameValidation.hasNumber ? "valid" : ""}`}
        >
          {usernameValidation.hasNumber ? "✓" : "✘"} Debe tener al menos un
          número
        </p>
        <p
          className={`condition ${
            usernameValidation.isLengthValid ? "valid" : ""
          }`}
        >
          {usernameValidation.isLengthValid ? "✓" : "✘"} Debe tener entre 5 y 15
          caracteres
        </p>
      </div>
    </div>
  );
};

export default UsernameField;
