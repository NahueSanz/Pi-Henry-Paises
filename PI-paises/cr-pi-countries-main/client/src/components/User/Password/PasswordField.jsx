import "./passwordField.css";
import { useState } from "react";
import { calculateSecurityLevel } from "../SignUpValidations";

const PasswordField = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordStrength(calculateSecurityLevel(value));
    setPasswordMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setPasswordMatch(value === password);
  };

  return (
    <div>
      <label className="labelText" htmlFor="password">
        Contraseña:
      </label>
      <br />
      <input
        className="inputform"
        type="password"
        value={password}
        name="password"
        placeholder="Ingrese su contraseña"
        onChange={handlePasswordChange}
      />
      <div className="password-strength-bar">
        <div
          className={`bar level-${passwordStrength}`}
          style={{ width: `${passwordStrength}%` }}
        ></div>
        <div className="segment"></div>
        <div className="segment"></div>
        <div className="segment"></div>
        <div className="segment"></div>
      </div>
      <p className="security-message">
        {passwordStrength === 0 && "Su contraseña no es segura"}
        {passwordStrength === 25 && "Nivel de seguridad: 25%"}
        {passwordStrength === 50 && "Nivel de seguridad: 50%"}
        {passwordStrength === 75 && "Nivel de seguridad: 75%"}
        {passwordStrength === 100 && "Su contraseña es muy segura"}
      </p>
      <p>
        Para una contraseña mas segura ingrese: *Al menos un numero.
        <br />
        *Al menos una letra mayuscula y una minuscula.
        <br />
        *Al menos un caracter especial {"(/[$&+,:;=?@#|'<>.^*()%!-]/)"}
      </p>
      <label className="labelText" htmlFor="confirmPassword">
        Repetir Contraseña
      </label>
      <br />
      <input
        className="inputform"
        type="password"
        name="confirmPassword"
        placeholder="Repita su contraseña"
        onChange={handleConfirmPasswordChange}
      />
      {passwordMatch ? (
        <p className={`condition ${passwordMatch ? "valid" : ""}`}>
          {passwordMatch ? "✓" : "✘"} Las contraseñas coinciden.
        </p>
      ) : (
        <p className={`condition ${passwordMatch ? "valid" : ""}`}>
          {passwordMatch ? "✓" : "✘"} Las contraseñas no coinciden.
        </p>
      )}
    </div>
  );
};

export default PasswordField;
