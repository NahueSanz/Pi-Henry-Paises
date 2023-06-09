import "./FormSignUp.css";
import UsernameField from "../User/Username/Username";
import EmailField from "../User/EmailField/Email";
import PasswordField from "../User/Password/PasswordField";
import axios from "axios";

const FormSignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = event.target.elements;
    try {
      const response = await axios.post("http://localhost:3001/signin", {
        username: username.value,
        email: email.value,
        password: password.value,
      });
    } catch (error) {
      console.error(error); // Maneja los errores de la solicitud (por ejemplo, muestra un mensaje de error)
    }
  };

  return (
    <div className="formulariodiv">
      <form onSubmit={handleSubmit}>
        <UsernameField />
        <EmailField />
        <PasswordField />
        <button className="submitButton" type="submit">
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default FormSignUp;
