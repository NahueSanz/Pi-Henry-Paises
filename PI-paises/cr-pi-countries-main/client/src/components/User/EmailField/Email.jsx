import { validateEmail } from "../SignUpValidations";
import { useState } from "react";

const EmailField = () => {
  const [EmailValidation, setEmailValidation] = useState(false);
  const [email, setEmail] = useState("");
  const handleChangeEmail = (event) => {
    setEmailValidation(validateEmail(event.target.value));
    setEmail(event.target.value);
  };

  return (
    <div>
      <label className="labelText" htmlFor="email">
        Email
      </label>
      <br />
      <input
        className={`inputform ${EmailValidation ? "" : "invalid"}`}
        type="text"
        value={email}
        placeholder="Ingrese su Email"
        name="email"
        onChange={handleChangeEmail}
      />
      <div className="conditions">
        <p className={`condition ${EmailValidation ? "valid" : ""}`}>
          {EmailValidation ? "✓" : "✘"} El Email debe ser valido
        </p>
      </div>
    </div>
  );
};

export default EmailField;
