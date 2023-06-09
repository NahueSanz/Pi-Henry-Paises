import { useState } from "react";

const formLogIn = (props) => {
  const [userData, setUserData] = useState({
    usuario: "",
    password: "",
  });
  const [erros, setErrors] = useState({});

  return (
    <div className="formulariodiv">
      <div className="contenedorImagen">
      </div>
      <form>
        <div>
          <label className="labelText" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="inputform"
            value={userData.email}
            type="text"
            placeholder="Ingrese su Email"
            name="email"
          ></input>
        </div>
        <div>
          <label className="labelText" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="inputform"
            value={userData.password}
            type="text"
            name="password"
            placeholder="Ingrese su contraseña"
          ></input>
        </div>
        <button className="submitButton" type="submit">
          Ingresar
        </button>
        <p>
          No tienes una cuenta? <a href="/signin">Registrate</a>
        </p>
      </form>
    </div>
  );
};
export default formLogIn;
